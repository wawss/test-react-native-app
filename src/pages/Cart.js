import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeColor, defaultColor, fontSize, iconSize, TabBarStyle} from "../config/TabBarConfig";
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";
import Header from "../components/Header";

export default class Cart extends React.Component {

  static navigationOptions = {
    header: null,
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
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title={'购物车'}/>
        <View style={styles.list}>
          <ScrollView>
            <View style={styles.items}>
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
            <View style={styles.items}>
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
            <View style={styles.items}>
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
            <View style={styles.items}>
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
            <View style={styles.items}>
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
            <View style={styles.items}>
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
          </ScrollView>

        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomColumns, styles.checkboxAllDiv]}>
            <Ionicons
              name='checkbox-blank-circle-outline'
              size={23}
              style={styles.checkboxAll}/>
            <Text style={styles.checkboxText}>全选</Text>
          </View>
          <View style={[styles.bottomColumns, styles.totalDiv]}>
            <Text style={styles.totalText}>金额:￥500.00</Text>
          </View>
          <View style={[styles.bottomColumns, styles.submitBotton]}>
            <TouchableHighlight>
              <Text style={styles.submitBottonText}>结算</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  list: {
    flex: 1
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  items: {
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
    fontSize: 14,
    color: '#363636'
  },
  cakeEnglishName: {
    fontSize: 14,
    color: '#363636'
  },
  size: {
    color: '#aaaaaa',
    fontSize: 12,
    marginTop: (deviceWidth * 0.02)
  },
  price: {
    color: '#EE0000',
    fontSize: 15
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
    borderColor: '#aaaaaa'
  },
  subtract: {
    borderRightWidth: 1,
    borderColor: '#aaaaaa',
    paddingLeft: (deviceWidth * 0.025),
    paddingRight: (deviceWidth * 0.025)
  },
  number: {
    paddingLeft: (deviceWidth * 0.025),
    paddingRight: (deviceWidth * 0.025)
  },
  add: {
    borderLeftWidth: 1,
    borderColor: '#aaaaaa',
    paddingLeft: (deviceWidth * 0.025),
    paddingRight: (deviceWidth * 0.025)
  },
  bottomColumns: {},
  submitBotton: {
    backgroundColor: '#f23030',
    width: (deviceWidth * 0.3),
    alignItems: 'center',
    paddingTop: (deviceWidth * 0.045),
    paddingBottom: (deviceWidth * 0.045)
  },
  submitBottonText: {
    color: 'white',
    fontSize: 17
  },
  totalDiv: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: (deviceWidth * 0.03),
    borderTopWidth: 1,
    borderTopColor: '#dedede'
  },
  totalText: {
    fontSize: 15
  },
  checkboxAllDiv: {
    paddingLeft: (deviceWidth * 0.025),
    paddingRight: (deviceWidth * 0.025),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dedede'
  },
  checkboxAll: {
    color: '#9a9ca5',
    paddingRight: (deviceWidth * 0.01)
  },
  checkboxText: {
    fontSize: 15
  }
});