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
const troleylist = [
  {
    id: -1,
    label: 'All Troley',
  },
  {
    id: 0,
    label: 'Troley ABC',
  },
  {
    id: 1,
    label: 'Troley Matahari',
  },
];
const itemlist = [
  {
    id: 0,
    rack: 1,
    troleyid: 0,
    data: {
      name: 'Hendra',
      gender: 'L',
      ruang: 'Hebron',
      umur: 35,
    },
    tray: 1,
  },
  {
    id: 1,
    rack: 1,
    troleyid: 0,
    data: {
      name: 'Hendra',
      gender: 'L',
      ruang: 'Hebron',
      umur: 35,
    },
    tray: 2,
  },
  {
    id: 2,
    rack: 1,
    troleyid: 0,
    data: {
      name: 'Hendra',
      gender: 'L',
      ruang: 'Hebron',
      umur: 35,
    },
    tray: 3,
  },
  {
    id: 3,
    rack: 1,
    troleyid: 1,
    data: {
      name: 'Hendra',
      gender: 'L',
      ruang: 'Hebron',
      umur: 35,
    },
    tray: 4,
  },
];
export class TroleyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataitem: itemlist,
      currenttroley: -1,
    };
  }

  //EVENT
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  toDetail(title, data) {
    this.props.navigation.navigate(KEY_ROUTE.TRAY_DETAIL, {
      data: data,
      title: title,
    });
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
    return (
      <View style={styles.containerDimension}>
        {Subtitles('Tray List')}
        <View style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                backgroundColor: colors.main.COLOR_PRIMARY_2,
                fontSize: moderateScale(15),
                color: colors.textcolor.COLOR_TEXT_1,
                marginTop: 10,
                paddingVertical: moderateScale(5),
              }}>
              {'Date : ' + formatDate(new Date())}
            </Text>
          </View>
          {this.renderSwitchList()}
          <FlatList
            style={{flex: 1, marginBottom: moderateScale(25)}}
            extraData={this.state}
            data={this.state.dataitem}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
      </View>
    );
  }
  renderSwitchList = () => (
    <View style={{borderBottomWidth: 1}}>
      <Picker
        selectedValue={this.state.currenttroley}
        style={{
          height: moderateScale(30),
          width: convertWidth(100),
        }}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({currenttroley: itemValue});
        }}>
        {troleylist.map((res, index) => {
          return <Picker.Item label={res.label} value={res.id} />;
        })}
      </Picker>
    </View>
  );
  renderItems = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        this.toDetail(item, this.getTroleyName(item.troleyid).label)
      }
      style={{
        //height: moderateScale(50),
        backgroundColor: colors.tabsstyle.COLOR_PRIMARY_2,
        width: convertWidth(97),
        borderWidth: 2,
        borderColor: colors.tabsstyle.COLOR_PRIMARY_4,
        borderRadius: 5,
        marginTop: 10,
        margin: 5,
        padding: 5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            flex: 1,
            backgroundColor: colors.main.COLOR_PRIMARY_8,
            fontSize: moderateScale(15),
            color: colors.textcolor.COLOR_TEXT_1,
            marginTop: 5,
            paddingLeft: 5,
            paddingVertical: moderateScale(5),
          }}>{`Rack ${item.rack}`}</Text>
        <Text
          style={{
            flex: 1,
            backgroundColor: colors.main.COLOR_PRIMARY_7,
            fontSize: moderateScale(15),
            color: colors.textcolor.COLOR_TEXT_1,
            marginTop: 5,
            paddingVertical: moderateScale(5),
          }}>{`${this.getTroleyName(item.troleyid).label}`}</Text>
      </View>

      <Text
        style={{
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          fontSize: moderateScale(15),
          color: colors.textcolor.COLOR_TEXT_1,
          marginTop: 5,
          paddingLeft: 5,
          paddingVertical: moderateScale(5),
        }}>{`${item.data.name} [${item.data.gender}] ${item.data.ruang} ${item.data.umur}`}</Text>
      <Text
        style={{
          backgroundColor: colors.main.COLOR_PRIMARY_9,
          fontSize: moderateScale(15),
          color: colors.textcolor.COLOR_TEXT_1,
          marginTop: 5,
          paddingLeft: 5,
          paddingVertical: moderateScale(5),
        }}>{`Tray ${item.tray}`}</Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TroleyScreen);
