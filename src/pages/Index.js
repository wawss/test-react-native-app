import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SwiperBanner from '../components/SwiperBanner';
import Cakes from '../components/Cakes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {activeColor,defaultColor} from "../config/tabBarConfig";

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons
        name='ios-home'
        size={30}
        color={focused
        ? activeColor
        : defaultColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? styles.activeMenuStyle
        : styles.defaultColor}>首页</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SwiperBanner/><Cakes/>
      </View>
    );
  }
}
const tabBarActiveLabelColor = '#E95098';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFBFF'
  },
  activeMenuStyle: {
            color: '#E95098'
        },
        defaultMenuStyle: {
            color: '#686868'
        }
});
