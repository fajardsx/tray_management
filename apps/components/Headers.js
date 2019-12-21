import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Constants from '../config/constant';
import {moderateScale} from '../styles/scaling';
import {styles, colors} from '../styles';
import {convertWidth} from '../config/utils';

export default Headers = () => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(20),
          borderBottomWidth: 2,
          borderColor: colors.main.COLOR_PRIMARY_6,
        },
      ]}>
      <Text style={[styles.titles, {color: colors.textcolor.COLOR_TEXT_1}]}>
        {Constants.NAME_APPS}
      </Text>
      <Text style={[styles.titles, {color: colors.textcolor.COLOR_TEXT_1}]}>
        {'TRAY MANAGEMENT'}
      </Text>
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
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(20),
          borderBottomWidth: 1,
          borderColor: colors.main.COLOR_PRIMARY_6,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          styles.category,
          addStyle,
          {width: convertWidth(100), textAlign: 'center', color: '#f5f5f5'},
        ]}>
        {titlesText}
      </Text>
    </View>
  );
};
