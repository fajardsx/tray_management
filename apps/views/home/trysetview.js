import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {styles, colors} from '../../styles';
import Constants from '../../config/constant';
import {moderateScale} from '../../styles/scaling';
import Buttons from '../../components/Buttons';
import {convertWidth, formatDate} from '../../config/utils';
import KEY_ROUTE from '../../route/keyroute';
import Headers, {Subtitles} from '../../components/Headers';
import IconCheck from '../../assets/images/icons/checkicon.svg';
import IconPlus from '../../assets/images/icons/iconplus.svg';
import IconMinus from '../../assets/images/icons/iconminus.svg';
import Iconqr from '../../assets/images/icons/qricon.svg';
const foodlist = [
  {
    id: 0,
    title: 'Nasi Putih',
    isCheck: false,
  },
  {
    id: 1,
    title: 'Ikan Bandeng',
    isCheck: false,
  },
  {
    id: 2,
    title: 'Sayur Bayam',
    isCheck: false,
  },
];
const cuteliselist = [
  {
    id: 0,
    title: 'Sendok',
    count: 0,
  },
  {
    id: 1,
    title: 'Garpu',
    count: 0,
  },
  {
    id: 2,
    title: 'Gelas',
    count: 0,
  },
];
class TraySetScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPatient:null,
      dataMenu:[],
      datas: foodlist,
      datasCutelies: cuteliselist,
      
    };
  }
  componentDidMount(){
    let data = this.props.navigation.getParam('data',null);
    if(data != null){
      console.log("TraySetScreen => data ",data);
      this.setState({
        dataPatient:data.patient,
        dataMenu:data.menu,
      })
    }
  }
  //EVENT
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  updateCheck(id) {
    const {dataMenu} = this.state;
    let currentdata = dataMenu.findIndex(res => {
      return res.code == id;
    });

    if (currentdata > -1) {
      let tempdata = Object.assign([], dataMenu);
      tempdata[currentdata].isCheck = !tempdata[currentdata].isCheck;
      this.setState({dataMenu: tempdata});
    }
  }
  updateCutelies(id, updateCount) {
    const {datasCutelies} = this.state;
    let currentdata = datasCutelies.findIndex(res => {
      return res.id == id;
    });

    if (currentdata > -1) {
      let tempdata = Object.assign([], datasCutelies);
      tempdata[currentdata].count = tempdata[currentdata].count + updateCount;
      this.setState({datasCutelies: tempdata});
    }
  }
  onPressSubmit=()=>{

  }
  onPressCancel=()=>{
    this.props.navigation.goBack();
  }
  //API

  //RENDER
  render() {
    const {datas, datasCutelies} = this.state;
    return (
      <View style={styles.containerDimension}>
        {Subtitles('Tray Set')}
        <ScrollView
          style={{flex: 1, marginBottom: moderateScale(30)}}
          contentContainerStyle={{flexGrow: 2}}>
          <View style={{paddingVertical: 5,width:convertWidth(100)}}>
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingLeft: 20,
                paddingVertical: moderateScale(7),
              }}>
              {'Date : ' + formatDate(new Date())}
            </Text>
          </View>
          <View style={{marginTop: moderateScale(10), paddingHorizontal: 10,alignItems:'center'}}>
            {this.state.dataPatient != null && this.patientView(this.state.dataPatient)}
            <Text
              style={{
                width:"90%",
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingLeft:10,
                paddingVertical: moderateScale(5),
              }}>
              {'Menu :'}
            </Text>
            {this.state.dataMenu.map((res, index) => {
              return this.renderCheckListItem(res);
            })}
            <Text
              style={{
                width:"90%",
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingLeft:10,
                paddingVertical: moderateScale(5),
              }}>
              {'Cutelies :'}
            </Text>
            {datasCutelies.map((res, index) => {
              return this.renderCutlistItem(res);
            })}
          </View>

          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            {/* <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: moderateScale(19)}}>Troley</Text>
              <Buttons
                style={{
                  width: convertWidth(40),
                  paddingVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
                //onPressButton={this.toQrCode.bind(this)}
              >
                <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
                <Text>Scan</Text>
              </Buttons>
            </View> */}
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: moderateScale(19)}}>Rack</Text>
              <Buttons
                style={{
                  width: convertWidth(40),
                  paddingVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
                onPressButton={this.toQrCode.bind(this)}
              >
                <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
                <Text>Scan</Text>
              </Buttons>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
                marginTop: 50,
              }}
              onPressButton={this.onPressSubmit}
            >
              <Text>Done</Text>
            </Buttons>
            <Buttons
              style={{
                width: convertWidth(80),
                marginTop: 10,
              }}
              onPressButton={this.onPressCancel}
            >
              <Text>Cancel</Text>
            </Buttons>
          </View>
        </ScrollView>
      </View>
    );
  }

  patientView = (value) => (
    <View style={{width:"90%"}}>
      <Text
        style={{
          paddingVertical: moderateScale(5),
          paddingLeft:10,
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          color: colors.textcolor.COLOR_TEXT_1,
          fontSize: moderateScale(15),
        }}>
        {"Nama Pasien : "}
      </Text>
      <Text style={{fontSize: moderateScale(19), borderBottomWidth: 0.5, paddingLeft:10,}}>
        {`${value.name} - ${value.room} `}
      </Text>
    </View>
  );
  renderCheckListItem = data => (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        paddingVertical: moderateScale(10),
        justifyContent: 'space-between',
        paddingLeft:10,
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: 18}}>{data.name}</Text>
      <TouchableOpacity
        onPress={() => this.updateCheck(data.code)}
        style={{
          borderWidth: 2,
          width: moderateScale(30),
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.main.COLOR_PRIMARY_2,
          aspectRatio: 1,
        }}>
        {data.isCheck == true && (
          <IconCheck
            width={moderateScale(22)}
            height={moderateScale(22)}
            fill={colors.main.COLOR_PRIMARY_2}
          />
        )}
        {data.isCheck == false && <View />}
      </TouchableOpacity>
    </View>
  );
  renderCutlistItem = data => (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        paddingLeft:10,
        paddingVertical: moderateScale(10),
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: moderateScale(19)}}>{data.title}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {data.count > 0 && (
          <TouchableOpacity
            onPress={() => this.updateCutelies(data.id, -1)}
            style={{
              borderWidth: 2,
              width: moderateScale(30),
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.main.COLOR_PRIMARY_2,
              aspectRatio: 1,
            }}>
            <IconMinus
              width={moderateScale(22)}
              height={moderateScale(22)}
              //fill={colors.main.COLOR_PRIMARY_2}
            />
          </TouchableOpacity>
        )}

        <Text
          style={{
            paddingHorizontal: moderateScale(20),
            fontSize: moderateScale(19),
          }}>
          {data.count}
        </Text>
        <TouchableOpacity
          onPress={() => this.updateCutelies(data.id, 1)}
          style={{
            borderWidth: 2,
            width: moderateScale(30),
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.main.COLOR_PRIMARY_2,
            aspectRatio: 1,
          }}>
          <IconPlus
            width={moderateScale(22)}
            height={moderateScale(22)}
            //fill={colors.main.COLOR_PRIMARY_2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TraySetScreen);
