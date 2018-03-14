import React from 'react';
import {View, Text,StyleSheet,Image,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { activeColor, defaultColor, fontSize, iconSize, TabBarStyle } from "../config/TabBarConfig";

export default class Me extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons name='ios-contact' size={iconSize} color={focused
        ? activeColor
        : defaultColor}/>
    },tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? TabBarStyle.activeMenuStyle
        : TabBarStyle.defaultMenuStyle}>我的</Text>
    }
  };
    render() {
      return (
        <View>
        <Text>我的</Text>
        </View>
      );
    }
  }
  