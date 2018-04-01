import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CakeDetail from './CakeDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { activeColor, defaultColor, fontSize, iconSize, TabBarStyle } from "../config/TabBarConfig";
import Cakes from "../components/Cakes";

export default class CakeList extends React.Component {
  static navigationOptions = {
    title: '客乐多蛋糕',
    headerStyle: {
      backgroundColor: '#E95098'
    },
    headerTitleStyle: {
      color: 'white'
    },
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons
        name='ios-pizza'
        size={iconSize}
        color={focused
          ? activeColor
          : defaultColor} />
    },
    tabBarLabel: ({ focused, tintColor }) => {
      return <Text
        style={focused
          ? TabBarStyle.activeMenuStyle
          : TabBarStyle.defaultMenuStyle}>蛋糕</Text>
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Cakes navigation={this.props.navigation} />
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
