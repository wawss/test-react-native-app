import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SwiperBanner from '../components/SwiperBanner';
import Cakes from '../components/Cakes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { activeColor, defaultColor, fontSize, iconSize, TabBarStyle } from "../config/TabBarConfig";

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons
        name='ios-home'
        size={iconSize}
        color={focused
          ? activeColor
          : defaultColor} />
    },
    tabBarLabel: ({ focused, tintColor }) => {
      return <Text
        style={focused
          ? TabBarStyle.activeMenuStyle
          : TabBarStyle.defaultMenuStyle}>首页</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SwiperBanner />
        <Cakes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFBFF'
  }
});
