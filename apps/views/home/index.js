import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {styles, colors} from '../../styles';
import Constants from '../../config/constant';
import {moderateScale} from '../../styles/scaling';
import Buttons from '../../components/Buttons';
import {convertWidth} from '../../config/utils';
import KEY_ROUTE from './../../route/keyroute';
import Headers from '../../components/Headers';

import IconPorsioning from '../../assets/images/icons/porsioningicon.svg';
import IconDelivery from '../../assets/images/icons/deliveryicon.svg';
import IconRecive from '../../assets/images/icons/receivingicon.svg';
import IconPickup from '../../assets/images/icons/pickupicon.svg';
import Forminput from '../../components/Forminput';

import Iconqr from '../../assets/images/icons/qricon.svg';
import { OnPorsioning } from '../../services/ApiController';
const btnlist = [
  {
    id: 0,
    title: 'Porsioning',
  },
  {
    id: 1,
    title: 'Delivery Tray',
  },
  {
    id: 2,
    title: 'Receiving Tray',
  },
  {
    id: 3,
    title: 'Pickup Tray',
  },
];

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchmrtxt: '',
    };
  }
  componentDidMount(){
    this.init()
  }
  //
  async init(){
    let data = await OnPorsioning();
    //console.log("HomeScreen => init ",data)
  }
  //EVENT
  onChangeInput = text => {
    this.setState({searchmrtxt: text});
  };
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  toScreen(id) {
    switch (id) {
      case 0:
        return this.props.navigation.navigate(KEY_ROUTE.PORSIONING_SCREEN);
      case 1:
        return this.props.navigation.navigate(KEY_ROUTE.TROLEY_LIST_SCREEN);
      case 2:
        return this.props.navigation.navigate(KEY_ROUTE.TROLEY_LIST_SCREEN);
      case 3:
        return this.props.navigation.navigate(KEY_ROUTE.PICKUP_SCREEN);
    }
  }
  //API

  //RENDER
  render() {
    const {searchmrtxt} = this.state;
    return (
      <SafeAreaView style={styles.containerDimension}>
       <Headers />
        <KeyboardAvoidingView behavior={'position'}>
         
          <View style={{marginTop: 25}}>
            <FlatList
              numColumns={2}
              extraData={this.state}
              data={btnlist}
              renderItem={this.renderBtn}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
            />
            {/* <View style={{marginTop: '10%', alignItems: 'center'}}>
              <Buttons
                style={{
                  width: convertWidth(80),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                onPressButton={this.toQrCode.bind(this)}>
                <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
                <Text style={{marginLeft: moderateScale(10)}}>
                  {'Scan Barcode/QR-Code'}
                </Text>
              </Buttons>
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
                placeholder={'Search MR'}
              />
            </View> */}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  getIcon(id) {
    const sizeIcon = 100;
    switch (id) {
      case 0:
        return (
          <IconPorsioning
            width={moderateScale(sizeIcon * 0.8)}
            height={moderateScale(sizeIcon * 0.8)}
            fill={colors.main.COLOR_PRIMARY_2}
          />
        );
      case 1:
        return (
          <IconDelivery
            width={moderateScale(sizeIcon * 0.8)}
            height={moderateScale(sizeIcon * 0.8)}
            fill={colors.main.COLOR_PRIMARY_2}
          />
        );
      case 2:
        return (
          <IconRecive
            width={moderateScale(sizeIcon)}
            height={moderateScale(sizeIcon)}
            fill={colors.main.COLOR_PRIMARY_2}
          />
        );
      case 3:
        return (
          <IconPickup
            width={moderateScale(sizeIcon)}
            height={moderateScale(sizeIcon)}
            fill={colors.main.COLOR_PRIMARY_2}
          />
        );
    }
  }
  renderBtn = ({item, index}) => (
    <View style={[styles.container, styles.centercontainer, {borderWidth: 0}]}>
      <TouchableOpacity
        onPress={() => this.toScreen(index)}
        style={{
          borderWidth: 2,
          borderColor: colors.main.COLOR_PRIMARY_6,
          margin: 5,
          borderRadius: 10,
          overflow: 'hidden',
          elevation:3
        }}>
        <View
          style={{
            width: moderateScale(140),
            height: moderateScale(140),
            //justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 10}}>{this.getIcon(index)}</View>

          <View
            style={[
              {
                width: '100%',
                paddingLeft: moderateScale(10),
                position: 'absolute',
                bottom: 0,
                backgroundColor: colors.main.COLOR_PRIMARY_2,
              },
            ]}>
            <Text
              style={[
                {
                  paddingVertical: moderateScale(10),
                  fontSize: moderateScale(15),
                  color: colors.textcolor.COLOR_TEXT_1,
                },
              ]}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
