import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./src/pages/Index";
import CakeList from "./src/pages/CakeList";
import UpdatePwd from "./src/pages/updatePwd";
import BindPhone from "./src/pages/bindPhone";
import CakeDetail from "./src/pages/CakeDetail";
import Cart from "./src/pages/Cart";
import Me from "./src/pages/Me";
import MyCards from "./src/pages/MyCards";
import MyOrders from "./src/pages/MyOrders";
import MyAddress from "./src/pages/MyAddress";
import MyIntegral from "./src/pages/MyIntegral";

import { TabNavigator, StackNavigator } from 'react-navigation';
import { deviceWidth, deviceHeight, setSpText } from "./src/tools/ScreenUtil";
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
    animationEnabled: false,
    swipeEnabled: false,//不允许tab左右滑动切换页面
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
  },
  myCards: {
    screen: MyCards
  },
  myOrders: {
    screen: MyOrders
  },
  myAddress: {
    screen: MyAddress
  },
  myIntegral: {
    screen: MyIntegral
  },
}, {
    mode: 'card'
  });
