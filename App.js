import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Index from "./src/pages/Index";
import CakeList from "./src/pages/CakeList";
import Cart from "./src/pages/Cart";
import Me from "./src/pages/Me";
import { TabNavigator } from 'react-navigation';

export default TabNavigator({
  '首页': { screen: Index },
  '蛋糕': { screen:  CakeList},
  '购物车': { screen:  Cart},
  '我的': { screen:  Me}
});