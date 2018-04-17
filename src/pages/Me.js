import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MetIonicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { activeColor, defaultColor, fontSize, iconSize, TabBarStyle } from "../config/TabBarConfig";
import { deviceWidth, deviceHeight, getSizeOfImage, setSpText } from "../tools/ScreenUtil";
import { NavigationActions } from 'react-navigation';

export default class Me extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ focused, tintColor }) => {
      return <Ionicons
        name='ios-contact'
        size={iconSize}
        color={focused
          ? activeColor
          : defaultColor} />
    },
    tabBarLabel: ({ focused, tintColor }) => {
      return <Text
        style={focused
          ? TabBarStyle.activeMenuStyle
          : TabBarStyle.defaultMenuStyle}>我的</Text>
    },
  };
  constructor(props) {
    super(props);
    this.onPress = (routeName) => {
      if (routeName) {
        this
          .props
          .navigation
          .dispatch(NavigationActions.navigate({ routeName: routeName }))
      }
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headImgBox}>
            <View style={styles.headImg}></View>
          </View>
          <View style={styles.columnMenu}>
            <TouchableHighlight style={styles.column} onPress={this.onPress.bind(this, 'myOrders')} underlayColor={'#f2f2f2'}>
              <View style={[styles.orderMenu, styles.menuContainer]}>
                <MetIonicons name='reorder-horizontal' size={24} style={styles.columnMenuIcons} />
                <Text style={styles.columnMenuText}>订单</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.column} onPress={this.onPress.bind(this, 'myCards')} underlayColor={'#f2f2f2'}>
              <View style={[styles.couponMenu, styles.menuContainer]}>
                <MetIonicons name='credit-card' size={24} style={styles.columnMenuIcons} />
                <Text style={styles.columnMenuText}>卡券</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.column}  onPress={this.onPress.bind(this, 'myAddress')} underlayColor={'#f2f2f2'}>
              <View style={[styles.addressMenu, styles.menuContainer]}>
                <MetIonicons name='map-marker' size={24} style={styles.columnMenuIcons} />
                <Text style={styles.columnMenuText}>收货地址</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.column}  onPress={this.onPress.bind(this, 'myIntegral')} underlayColor={'#f2f2f2'}>
              <View style={[styles.pointMenu, styles.menuContainer]}>
                <MetIonicons name='bitcoin' size={24} style={styles.columnMenuIcons} />
                <Text style={styles.columnMenuText}>积分</Text>
              </View>
            </TouchableHighlight>

          </View>

          <View style={styles.rowMenu}>
            <TouchableHighlight
              onPress={() => {
                this
                  .props
                  .navigation
                  .dispatch(NavigationActions.navigate({ routeName: 'bindPhone' }))
              }} underlayColor={'#f2f2f2'}>
              <View style={styles.row}>
                <MetIonicons name='cellphone' size={22} style={styles.rowMenuIcons} />
                <View style={[styles.rowItems, styles.rowItemsOfFirst]}>
                  <Text style={styles.rowMenuText}>绑定手机号</Text>
                  <View style={styles.lastViewOfRowItems}>
                    <Text style={styles.phoneText}>13800121300</Text>
                    <Ionicons name='ios-arrow-forward' size={22} style={styles.iconsArrowForward} />
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this
                  .props
                  .navigation
                  .dispatch(NavigationActions.navigate({ routeName: 'updatePwd' }))
              }} underlayColor={'#f2f2f2'}>
              <View style={styles.row}>
                <MetIonicons name='lock' size={22} style={styles.rowMenuIcons} />
                <View style={styles.rowItems}>
                  <Text style={styles.rowMenuText}>修改密码</Text>
                  <Ionicons name='ios-arrow-forward' size={22} style={styles.iconsArrowForward} />
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.row}>
              <MetIonicons name='note' size={22} style={styles.rowMenuIcons} />
              <View style={styles.rowItems}>
                <Text style={styles.rowMenuText}>我的收藏</Text>
                <Ionicons name='ios-arrow-forward' size={22} style={styles.iconsArrowForward} />
              </View>
            </View>
            <View style={styles.row}>
              <MetIonicons name='help-box' size={22} style={styles.rowMenuIcons} />
              <View style={styles.rowItems}>
                <Text style={styles.rowMenuText}>帮助中心</Text>
                <Ionicons name='ios-arrow-forward' size={22} style={styles.iconsArrowForward} />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headImgBox: {
    height: (deviceWidth * 0.46),
    backgroundColor: '#E95098',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headImg: {
    width: (deviceWidth * 0.2),
    height: (deviceWidth * 0.2),
    borderRadius: (deviceWidth * 0.1),
    borderWidth: 1,
    borderColor: 'white'
  },
  columnMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1,
    paddingTop: (deviceWidth * 0.05),
    paddingBottom: (deviceWidth * 0.05),
    backgroundColor: 'white'
  },
  menuContainer: {
    alignItems: 'center'
  },
  columnMenuIcons: {
    color: '#333333'
  },
  orderMenu: {},
  pointMenu: {},
  couponMenu: {},
  addressMenu: {},
  columnMenuText: {
    paddingTop: (deviceWidth * 0.02),
    color: '#666666',
    fontSize: 15
  },
  rowMenu: {
    backgroundColor: 'white',
    marginTop: (deviceWidth * 0.04)
  },
  row: {
    flexDirection: 'row',

    alignItems: 'center'
  },
  rowMenuIcons: {
    paddingLeft: (deviceWidth * 0.04),
    paddingRight: (deviceWidth * 0.04),
    color: '#e53488'
  },
  rowMenuText: {
    color: '#333333',
    fontSize: 15
  },
  rowItems: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    flex: 1,
    paddingTop: (deviceWidth * 0.045),
    paddingBottom: (deviceWidth * 0.045),
    paddingRight: (deviceWidth * 0.02),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowItemsOfFirst: {
    borderTopWidth: 0
  },
  iconsArrowForward: {
    color: '#dedede',
    paddingLeft: (deviceWidth * 0.02)
  },
  lastViewOfRowItems: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneText: {
    color: '#999999'
  }
});
