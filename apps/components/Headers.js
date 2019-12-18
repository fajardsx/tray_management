import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Constants from '../config/constant';
import {moderateScale} from '../styles/scaling';
import {styles} from '../styles';

export default Headers = () => {
  return (
    <View
      style={[
        {
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(20),
          borderBottomWidth: 1,
        },
      ]}>
      <Text style={[styles.titles]}>{Constants.NAME_APPS}</Text>
      <Text style={[styles.titles]}>{'TRAY MANAGEMENT'}</Text>
    </View>
  );
};
export const Subtitles = (
  titlesText,
  containerStyle = null,
  addStyle = null,
) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(20),
          borderBottomWidth: 1,
        },
        containerStyle,
      ]}>
      <Text style={[styles.category, addStyle]}>{titlesText}</Text>
    </View>
  );
};
