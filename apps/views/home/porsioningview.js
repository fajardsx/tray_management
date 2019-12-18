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
import Headers, {Subtitles} from '../../components/Headers';
import Iconqr from '../../assets/images/icons/qricon.svg';

export class PorsioningScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  //EVENT
  toQrCode() {
    //this.props.navigation.navigate(KEY_ROUTE.QR_SCREEN);
    this.props.navigation.navigate(KEY_ROUTE.TRAYSET_SCREEN);
  }
  onDone(data) {}
  //API

  //RENDER
  render() {
    return (
      <View style={styles.containerDimension}>
        {Subtitles('Porsioning')}
        <View>
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <Buttons
              style={{
                width: convertWidth(80),
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
              onPressButton={this.toQrCode.bind(this)}>
              <Iconqr width={moderateScale(25)} height={moderateScale(25)} />
              <Text>Scan e-Ticket</Text>
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
