import React, {Component} from 'react';
import {
  View,
  Text,
  Picker,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
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
export class TaryDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: foodlist,
      datasCutelies: cuteliselist,
    };
  }

  //EVENT
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  getTroleyName = id => {
    const nametroly = troleylist.find(res => {
      return res.id == id;
    });
    return nametroly;
  };
  //API

  //RENDER
  render() {
    const {datas, datasCutelies} = this.state;
    return (
      <View style={styles.containerDimension}>
        {Subtitles('Tray Detail')}
        <ScrollView
          style={{flex: 1, marginBottom: 10}}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingVertical: moderateScale(5),
              }}>
              {'Date :' + formatDate(new Date())}
            </Text>
          </View>
          <View style={{marginTop: moderateScale(10), paddingHorizontal: 10}}>
            {this.renderForm('Nama Pasien :', 'Hendra [L] Herbron - 34')}
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingVertical: moderateScale(5),
              }}>
              {'Menu :'}
            </Text>
            {datas.map((res, index) => {
              return this.renderCheckListItem(res);
            })}
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingVertical: moderateScale(5),
              }}>
              {'Cutelies :'}
            </Text>
            {datasCutelies.map((res, index) => {
              return this.renderCutlistItem(res);
            })}
          </View>
          {/* <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <View
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
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: moderateScale(19)}}>Rack</Text>
              <Buttons
                style={{
                  width: convertWidth(30),
                  paddingVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
                //onPressButton={this.toQrCode.bind(this)}
              >
                <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
                <Text>Scan</Text>
              </Buttons>
            </View>
          </View> */}
          <View style={{height: moderateScale(20)}} />
        </ScrollView>
      </View>
    );
  }
  renderForm = (title, value) => (
    <View>
      <Text
        style={{
          paddingVertical: moderateScale(5),
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          color: colors.textcolor.COLOR_TEXT_1,
          fontSize: moderateScale(15),
        }}>
        {title}
      </Text>
      <Text style={{fontSize: moderateScale(19), borderBottomWidth: 0.5}}>
        {value}
      </Text>
    </View>
  );
  renderCheckListItem = data => (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: moderateScale(10),
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: moderateScale(19)}}>{data.title}</Text>
    </View>
  );
  renderCutlistItem = data => (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: moderateScale(10),
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: moderateScale(19)}}>{data.title}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            paddingHorizontal: moderateScale(20),
            fontSize: moderateScale(19),
          }}>
          {data.count}
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaryDetailScreen);
