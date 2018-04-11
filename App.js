import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Index from "./src/pages/Index";
import CakeList from "./src/pages/CakeList";
import UpdatePwd from "./src/pages/updatePwd";
import BindPhone from "./src/pages/bindPhone";
import CakeDetail from "./src/pages/CakeDetail";
import Cart from "./src/pages/Cart";
import Me from "./src/pages/Me";
import {TabNavigator, StackNavigator} from 'react-navigation';
import {deviceWidth, deviceHeight, setSpText} from "./src/tools/ScreenUtil";
import {
  activeColor,
  defaultColor,
  fontSize,
  iconSize,
  TabBarStyle,
  tabBarOptions
} from "./src/config/TabBarConfig";

const TabNav = TabNavigator({
  'index': {
    screen: Index
  },
  'cakeList': {
    screen: CakeList
  },
  'cart': {
    screen: Cart
  },
  'me': {
    screen: Me
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: tabBarOptions
});

export default StackNavigator({
  tabNav: {
    screen: TabNav
  },
  cakeDetail: {
    screen: CakeDetail
  },
  updatePwd: {
    screen: UpdatePwd
  },
  bindPhone: {
    screen: BindPhone
  }
});
