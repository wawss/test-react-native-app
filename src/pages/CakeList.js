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

class CakeList extends React.Component {
  static navigationOptions = {
    title: '迪士尼品牌蛋糕',
    headerStyle: {
      backgroundColor: '#E95098'
    },
    headerTitleStyle: {
      color: 'white'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Cakes navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => {
      // return <Image source={require('../images/icon-cake.png')}
      // style={{width:23,height:23}}/>
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
  
  constructor(props) {
    super(props);
    alert(JSON.stringify(this.props));
    this.hideTabNav = function () {
      navigationOptions.tabBarVisible=false;
      //this.props.navigation.tabBarVisible = false;
    }
  }
  render() {
    return <RootStack screenProps={{
      hideTabNav: this.hideTabNav
    }}/>;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFBFF'
  }
});
