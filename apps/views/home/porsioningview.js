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
import {styles} from '../../styles';
import Constants from '../../config/constant';
import {moderateScale} from '../../styles/scaling';
import Buttons from '../../components/Buttons';
import {convertWidth} from '../../config/utils';
import KEY_ROUTE from './../../route/keyroute';
import Headers from '../../components/Headers';

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

export class PorsioningScreen extends Component {
  //EVENT
  toQrCode() {
    this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
  }
  //API

  //RENDER
  render() {
    return (
      <View style={styles.containerDimension}>
        <Headers />
        <Text>{'Porsioning'}</Text>
        <View>
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
              }}
              onPressButton={this.toQrCode.bind(this)}>
              <Text>Scan Barcode/QR-Code</Text>
            </Buttons>
          </View>
        </View>
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
