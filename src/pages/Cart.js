import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Cart extends React.Component {
  static navigationOptions = {
    tabBarLabel:'购物车',
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons name='ios-cart' size={30} color={focused
        ? tabBarActiveLabelColor
        : tintColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? styles.activeMenuStyle
        : styles.defaultMenuStyle}>购物车</Text>
    }
  };
    render() {
      return (<Text>购物车</Text>);
    }
  }
  
  const tabBarActiveLabelColor = '#E95098';

  const styles = StyleSheet.create({
    activeMenuStyle: {
      color: tabBarActiveLabelColor
    },
    defaultMenuStyle: {
      color: '#686868'
    }
  });
  