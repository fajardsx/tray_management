import React from 'react';
import {Image, View, Text} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {colors, images, styles} from '../styles';
import {convertHeight} from '../config/utils';
import {moderateScale} from '../styles/scaling';
//views
import InitScreen from '../views';
import TitleScreen from '../views/titles/titleview';
import {HomeScreen} from './../views/home/index';

const TitleScene = createStackNavigator(
  {
    title: {
      screen: TitleScreen,
    },
  },
  {
    initialRouteName: 'title',
    headerMode: 'none',
  },
);
const InAppScene = createStackNavigator(
  {
    home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  },
);
const MainApplication = createSwitchNavigator(
  {
    initscreen: {
      screen: InitScreen,
    },
    titlescreen: {
      screen: TitleScene,
    },
    inappscreen: {
      screen: InAppScene,
    },
  },
  {
    initialRouteName: 'initscreen',
    headerMode: 'none',
  },
);

export default createAppContainer(MainApplication);
