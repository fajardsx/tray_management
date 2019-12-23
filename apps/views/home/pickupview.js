import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import Forminput from '../../components/Forminput';
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
    saldo: 1,
  },
  {
    id: 1,
    title: 'Garpu',
    count: 0,
    saldo: 1,
  },
  {
    id: 2,
    title: 'Gelas',
    count: 0,
    saldo: 2,
  },
];
export class PickupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: foodlist,
      datasCutelies: cuteliselist,
      sisatxt: '',
    };
  }

  //EVENT
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  updateInput(id, text) {
    const {datas} = this.state;
    switch (id) {
      case 0:
        return this.setState({input1: text});
      case 1:
        return this.setState({input2: text});
      case 2:
        return this.setState({input3: text});
    }
  }
  getInputTxt(id) {
    const {datas} = this.state;
    switch (id) {
      case 0:
        return this.state.input1;
      case 1:
        return this.state.input2;
      case 2:
        return this.state.input3;
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
      if (tempdata[currentdata].count > -1) {
        this.setState({datasCutelies: tempdata});
      }
    }
  }
  //API

  //RENDER
  render() {
    const {datas, datasCutelies, sisatxt} = this.state;
    return (
      <SafeAreaView style={styles.containerDimension}>
        {Subtitles('Pick Up')}

        <ScrollView
          style={{flex: 1, marginBottom: moderateScale(30)}}
          contentContainerStyle={{flexGrow: 2}}>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingLeft: 10,
                paddingLeft: moderateScale(10),
                paddingVertical: moderateScale(7),
              }}>
              {'Date :' + formatDate(new Date())}
            </Text>
          </View>
          <View style={{marginTop: moderateScale(10), paddingHorizontal: 10}}>
            {this.renderForm('Nama Pasien :', 'Hendra [L] Herbron - 34')}
            <View
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(15),
                  color: colors.textcolor.COLOR_TEXT_1,
                  marginTop: 10,
                  paddingLeft: 10,
                  paddingVertical: moderateScale(5),
                }}>
                {'Menu'}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(15),
                  color: colors.textcolor.COLOR_TEXT_1,
                  marginTop: 10,
                  paddingRight: 10,
                  paddingVertical: moderateScale(5),
                }}>
                {'Sisa'}
              </Text>
            </View>

            {datas.map((res, index) => {
              return this.renderCheckListItem(res);
            })}
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingLeft: 10,
                paddingVertical: moderateScale(5),
              }}>
              {'Cutelies :'}
            </Text>
            {this.renderTitleCutlist()}
            {datasCutelies.map((res, index) => {
              return this.renderCutlistItem(res);
            })}
          </View>

          <View style={{alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
                marginTop: 50,
              }}
              //onPressButton={this.onTryLogin.bind(this)}
            >
              <Text>Done</Text>
            </Buttons>
            <Buttons
              style={{
                width: convertWidth(80),
                marginTop: 10,
              }}
              //onPressButton={this.onTryLogin.bind(this)}
            >
              <Text>Cancel</Text>
            </Buttons>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderForm = (title, value) => (
    <View>
      <Text
        style={{
          paddingVertical: moderateScale(5),
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          color: colors.textcolor.COLOR_TEXT_1,
          paddingLeft: 10,
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
        alignItems: 'center',
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: moderateScale(19)}}>{data.title}</Text>
      <Forminput
        keyboardtype={'number-pad'}
        stylecontainer={{flex: 0, width: convertWidth(20), margin: 10}}
        defaultText={this.getInputTxt(data.id)}
        onChangeText={text => {
          this.updateInput(data.id, text);
        }}
        styleinput={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.main.COLOR_PRIMARY_3,
          //paddingLeft: 10,
          textAlign: 'center',
          color: colors.textcolor.COLOR_TEXT_2,
          fontSize: moderateScale(15),
        }}
        placeholder={'Sisa'}
      />
    </View>
  );
  renderTitleCutlist = () => (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: moderateScale(10),
        borderBottomWidth: 0.5,
      }}>
      <View style={{width: convertWidth(50)}} />
      <Text style={{fontSize: moderateScale(15)}}>{'saldo'}</Text>
      <View style={{width: convertWidth(10)}} />
      <Text
        style={{
          paddingHorizontal: moderateScale(20),
          fontSize: moderateScale(15),
        }}>
        {'Kembali'}
      </Text>
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
            paddingRight: moderateScale(40),
            fontSize: moderateScale(19),
          }}>
          {data.saldo}
        </Text>

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

export default connect(mapStateToProps, mapDispatchToProps)(PickupScreen);
