import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeColor, defaultColor, fontSize, iconSize, TabBarStyle} from "../config/TabBarConfig";
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";

export default class Cart extends React.Component {

  static navigationOptions = {
    title: '购物车',
    headerStyle: {
      backgroundColor: '#E95098'
    },
    headerTitleStyle: {
      color: 'white'
    },
    tabBarIcon: ({focused, tintColor}) => {
      return <Ionicons
        name='cart'
        size={iconSize}
        color={focused
        ? activeColor
        : defaultColor}/>
    },
    tabBarLabel: ({focused, tintColor}) => {
      return <Text
        style={focused
        ? TabBarStyle.activeMenuStyle
        : TabBarStyle.defaultMenuStyle}>购物车</Text>
    }

  };
  constructor(props) {
    super(props);
    this.icos = () => {
      // < Ionicons name = 'checkbox-marked-circle-outline' size = {25} />
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={[styles.columns, styles.checkbox]}>
            <Ionicons
              name='checkbox-blank-circle-outline'
              size={21}
              style={styles.checkboxStyles}/>
          </View>
          <View style={styles.columns}>
            <Image source={require('../images/p-test.png')} style={styles.image}/>
          </View>
          <View style={[styles.columns, styles.cakeContext]}>
            <View>
              <Text style={styles.cakeName}>米奇系列（巧克力的浪漫）</Text>
              <Text style={styles.cakeEnglishName}>Mickey's Yoghurt Mousse</Text>
              <Text style={styles.size}>大小:6寸</Text>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.price}>￥258</Text>
              <View style={styles.numberContainer}>
                <View style={styles.subtract}>
                  <Text>-</Text>
                </View>
                <View style={styles.number}>
                  <Text>1</Text>
                </View>
                <View style={styles.add}>
                  <Text>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: (deviceWidth * 0.04),
    paddingBottom: (deviceWidth * 0.04),
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  columns: {
    display: 'flex',
    flexDirection: 'row'
  },
  checkbox: {
    alignItems: 'center',
    paddingLeft: (deviceWidth * 0.02),
    paddingRight: (deviceWidth * 0.02)
  },
  checkboxStyles: {
    color: '#cccccc'
  },
  image: {
    width: (deviceWidth * 0.25),
    height: (deviceWidth * 0.25)
  },
  cakeContext: {
    flexGrow: 1,
    paddingLeft: (deviceWidth * 0.02),
    paddingRight: (deviceWidth * 0.02),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cakeName: {
    fontSize: setSpText(14),
    color: '#363636'
  },
  cakeEnglishName: {
    fontSize: setSpText(14),
    color: '#363636'
  },
  size: {
    color: '#aaaaaa',
    fontSize: setSpText(12),
    marginTop: (deviceWidth * 0.02)
  },
  price: {
    color: '#EE0000',
    fontSize: setSpText(15)
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#aaaaaa',
  },
  subtract:{
    borderRightWidth: 1,
    borderColor: '#aaaaaa',
    paddingLeft:(deviceWidth * 0.025),
    paddingRight:(deviceWidth * 0.025)
  },
  number:{
    paddingLeft:(deviceWidth * 0.025),
    paddingRight:(deviceWidth * 0.025)
  },
  add:{
    borderLeftWidth: 1,
    borderColor: '#aaaaaa',
    paddingLeft:(deviceWidth * 0.025),
    paddingRight:(deviceWidth * 0.025)
  }
});