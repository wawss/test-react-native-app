import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  StatusBar
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CakeDetail from './CakeDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {activeColor, defaultColor, fontSize, iconSize, TabBarStyle} from "../config/TabBarConfig";
import Cakes from "../components/Cakes";
import Header from "../components/Header";

export default class CakeList extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons
        name='ios-pizza'
        size={iconSize}
        color={focused
        ? activeColor
        : defaultColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? TabBarStyle.activeMenuStyle
        : TabBarStyle.defaultMenuStyle}>蛋糕</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title={'客乐多蛋糕'}/>
        <Cakes navigation={this.props.navigation}/>
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
