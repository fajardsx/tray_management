import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Constants from '../config/constant';
import {moderateScale} from '../styles/scaling';

export default Headers = () => {
  return (
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
  );
};
