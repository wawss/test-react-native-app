import React from 'react';
import {View, Text,StyleSheet,Image,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Me extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons name='ios-contact' size={30} color={focused
        ? tabBarActiveLabelColor
        : tintColor}/>
    },tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? styles.activeMenuStyle
        : styles.defaultMenuStyle}>我的</Text>
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
  const tabBarActiveLabelColor = '#E95098';

  const styles = StyleSheet.create({
    activeMenuStyle: {
      color: tabBarActiveLabelColor
    },
    defaultMenuStyle: {
      color: '#686868'
    }
  });

  