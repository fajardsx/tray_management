import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {RNCamera} from 'react-native-camera';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {styles} from '../../styles';
import {showToast} from '../../config/utils';

class QRCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcodes: [],
    };
  }
  //EVENT

  scanBarcode = ({barcodes}) => {
    this.setState({barcodes});
    barcodes.forEach(barcode => {
      console.warn(barcode.data);
      console.log(barcode.data);
    });
  };
  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    const check = e.data;
    console.log('scanned data' + check);
    showToast(check);
  };
  //RENDER
  render() {
    return (
      <View style={[styles.container]}>
        {/* QRCODE ONLY WORK ON RELEASE */}
        <QRCodeScanner
          showMarker
          reactivate
          onRead={this.onSuccess}
          //flashMode={QRCodeScanner}
          topContent={<Text style={styles.centerText}>scan the QR code.</Text>}
        />
      </View>
    );
  }
  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  );
  renderBarcode = ({bounds, data}) => {
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}>
        <Text
          style={{
            color: '#F00',
            flex: 1,
            position: 'absolute',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}>
          {data}
        </Text>
      </View>
    </React.Fragment>;
  };
}

export default QRCamera;
