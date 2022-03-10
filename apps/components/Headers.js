import React, {Component} from 'react';
import {View, Text,StatusBar} from 'react-native';
import Constants from '../config/constant';
import {moderateScale} from '../styles/scaling';
import {styles, colors} from '../styles';
import {convertWidth} from '../config/utils';

export default Headers = () => {
  return (
    <View
      style={[
        {
          width:convertWidth(100),
          backgroundColor: colors.main.COLOR_PRIMARY_2,
          height:70,
          justifyContent:'center',
          borderColor: colors.main.COLOR_PRIMARY_6,
          paddingLeft:20
        },
      ]}>
      <Text style={[styles.titles, {color: colors.textcolor.COLOR_TEXT_1,fontSize:16}]}>
        {Constants.NAME_APPS}
      </Text>
      <Text style={[styles.titles, {color: colors.textcolor.COLOR_TEXT_1,fontSize:16}]}>
        {'TRAY MANAGEMENT'}
      </Text>
      <StatusBar backgroundColor={colors.main.COLOR_PRIMARY_10}/>
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
