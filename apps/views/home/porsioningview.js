import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {styles, colors} from '../../styles';
import Constants, { ENUM_TYPE_QRCODE } from '../../config/constant';
import {moderateScale} from '../../styles/scaling';
import Buttons from '../../components/Buttons';
import {convertWidth} from '../../config/utils';
import KEY_ROUTE from './../../route/keyroute';
import Headers, {Subtitles} from '../../components/Headers';
import Iconqr from '../../assets/images/icons/qricon.svg';
import Forminput from '../../components/Forminput';
import { OnGetPorsioning } from '../../services/ApiController';

class PorsioningScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      searchmrtxt: '',
    };
  }
  componentDidMount(){
    this.init()
  }
  //INIT
  init(){
    //this.onGetList();
  }
  //EVENT
  onChangeInput = text => {
    this.setState({searchmrtxt: text});
  };
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN,{type:ENUM_TYPE_QRCODE.porsioningview});
    //
  }
  
  onSubmitData=()=>{
    this.onGetList();
  }
  onDone(data) {}
  //API
  async onGetList(){
    try {
        let body = this.state.searchmrtxt.length>0? this.state.searchmrtxt.length:"76687"
        let result = await OnGetPorsioning(body);
        console.log("PorsioningScreen => onGetList => result ",result)
        if(result != null && result.api_message == "success"){
          this.props.navigation.navigate(KEY_ROUTE.TRAYSET_SCREEN,{data:result.data});
        }
    } catch (error) {
      console.log("PorsioningScreen => onGetList => error ",error)
    }
  }
  //RENDER
  render() {
    const {searchmrtxt} = this.state;
    return (
      <View style={styles.containerDimension}>
        {Subtitles('Porsioning')}
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: moderateScale(10),
              width: convertWidth(100),
              backgroundColor: colors.main.COLOR_PRIMARY_6,
            }}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                fontSize: moderateScale(20),
                color: colors.textcolor.COLOR_TEXT_1,
              }}>
              {'Scan E-Ticket'}
            </Text>
          </View>
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onPressButton={this.toQrCode.bind(this)}>
              <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={{marginLeft: moderateScale(10)}}>
                {'Scan Barcode Pasien'}
              </Text>
            </Buttons>
            <Text
              style={{
                fontSize: moderateScale(15),
                paddingVertical: moderateScale(10),
              }}>
              {'Atau'}
            </Text>
            <Forminput
              securetxt={true}
              stylecontainer={{flex: 0, width: convertWidth(80), margin: 10}}
              defaultText={searchmrtxt}
              onChangeText={this.onChangeInput}
              styleinput={{
                borderWidth: 1,
                paddingLeft: 10,
                color: colors.textcolor.COLOR_TEXT_2,
                fontSize: moderateScale(15),
              }}
              placeholder={'Input MR'}
            />
          </View>
        </View>
        <Buttons
          style={{
            alignSelf: 'center',
            width: convertWidth(80),
            backgroundColor: colors.main.COLOR_PRIMARY_2,
            marginTop: moderateScale(100),
          }}
          onPressButton={this.onSubmitData.bind(this)}>
          <Text
            style={{
              color: colors.textcolor.COLOR_TEXT_1,
              fontSize: moderateScale(18),
            }}>
            {'Submit'}
          </Text>
        </Buttons>
      </View>
    );
  }
  renderBtn = ({item, index}) => (
    <View style={[styles.container, styles.centercontainer, {borderWidth: 0}]}>
      <TouchableOpacity style={{borderWidth: 1, margin: 5, borderRadius: 10}}>
        <View style={{width: moderateScale(130), aspectRatio: 1}}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PorsioningScreen);
