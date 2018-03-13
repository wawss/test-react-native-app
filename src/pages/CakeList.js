import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CakeDetail from './CakeDetail';

class CakeList extends React.Component {
  static navigationOptions = {
    title: '所有蛋糕',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };
  render() {
    return (
      <View>
        <Text>蛋糕列表</Text>
        <Button title='详细' onPress={() => this.props.navigation.navigate('CakeDetail',{
          itemId: 86,
          title: '芒果芝士',
        })}></Button>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
const RootStack = StackNavigator({
  CakeList: {
    screen: CakeList
  },
  CakeDetail: {
    screen: CakeDetail
  }
}, {initialRouteName: 'CakeList'});
