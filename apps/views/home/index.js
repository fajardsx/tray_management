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
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <View style={styles.containerDimension}>
        <View
          style={[
            {
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateScale(80),
            },
          ]}>
          <Text>{Constants.NAME_APPS}</Text>
          <Text>{'TRAY MANAGEMENT'}</Text>
        </View>
        <View>
          <FlatList
            numColumns={2}
            extraData={this.state}
            data={btnlist}
            renderItem={this.renderBtn}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
              }}
              // onPressButton={this.onTryLogin.bind(this)}
            >
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
