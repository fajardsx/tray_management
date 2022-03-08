import React from 'react';
import {Image, View, Text} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {colors, images, styles} from '../styles';
import {convertHeight} from '../config/utils';
import {moderateScale} from '../styles/scaling';
//views
import InitScreen from '../views';
import {HomeScreen} from './../views/home/index';
import QRCamera from '../views/qrcodecamera';
import {PorsioningScreen} from '../views/home/porsioningview';
import {TraySetScreen} from '../views/home/trysetview';
import {TroleyScreen} from './../views/home/trolylistview';
import {PickupScreen} from './../views/home/pickupview';
import {TaryDetailScreen} from '../views/detailitem/detailtray';
import LoginScreen from '../views/titles/LoginScreen';

const TitleScene = createStackNavigator(
  {
    login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'login',
    headerMode: 'none',
  },
);
const InAppScene = createStackNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    porsioning: {
      screen: PorsioningScreen,
    },
    troley: {
      screen: TroleyScreen,
    },
    tryset: {
      screen: TraySetScreen,
    },
    traydetail: {
      screen: TaryDetailScreen,
    },
    pickup: {
      screen: PickupScreen,
    },
    qrscan: {
      screen: QRCamera,
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
