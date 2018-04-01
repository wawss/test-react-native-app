import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MetIonicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeColor, defaultColor, fontSize, iconSize, TabBarStyle} from "../config/TabBarConfig";
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";

export default class Me extends React.Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons
        name='ios-contact'
        size={iconSize}
        color={focused
        ? activeColor
        : defaultColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? TabBarStyle.activeMenuStyle
        : TabBarStyle.defaultMenuStyle}>我的</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headImg}></View>
        <View style={styles.rowMenu}>
          <View style={[styles.column, styles.orderMenu]}>
            <MetIonicons name='cart' size={22}/>
            <Text>订单</Text>
          </View>
          <View style={[styles.column, styles.pointMenu]}>
            <Text>积分</Text>
          </View>
          <View style={[styles.column, styles.couponMenu]}>
            <Text>优惠券</Text>
          </View>
          <View style={[styles.column, styles.addressMenu]}>
            <Text>收货地址1</Text>
          </View>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headImg: {
    height: (deviceWidth * 0.46),
    backgroundColor: '#E95098'
  },
  rowMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  orderMenu: {
    backgroundColor: 'red'
  },
  pointMenu: {
    backgroundColor: 'green'
  },
  couponMenu: {
    backgroundColor: 'black'
  },
  addressMenu: {
    backgroundColor: 'yellow'
  }
});
