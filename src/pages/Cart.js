import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { activeColor, defaultColor, fontSize, iconSize, TabBarStyle } from "../config/TabBarConfig";

export default class Cart extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons name='ios-cart' size={iconSize} color={focused
        ? activeColor
        : defaultColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? TabBarStyle.activeMenuStyle
        : TabBarStyle.defaultMenuStyle}>购物车</Text>
    }
  };
    render() {
      return (<Text>购物车</Text>);
    }
  }

  