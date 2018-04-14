import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";
import {getProductDetailByName} from "../data/Data";

export default class CakeDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      header: null,
      title: params
        ? params.itemName
        : ''
    }
  }
  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;
    this.state = {
      itemName: params.itemName,
      itemInfo: {},
      itemImages: []
    };
    getProductDetailByName(params.itemName, (res) => {
      let resData = JSON.parse(res._bodyInit);
      this.state.itemInfo = resData.data;
      this.state.itemImages = resData.data.ext.image;
      this.setState(prev => {
        return {itemInfo: resData.data, itemImages: resData.data.ext.image}
      });
    });

  };

  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.wrapper}>
            <Swiper autoplay={true}>
              {this
                .state
                .itemImages
                .map((imgName, i) => {
                  return (
                    <View style={styles.slide1} key={i}>
                      <Image
                        source={{
                        uri: 'http://res.cakeland.com/item/' + this.state.itemName + '/' + imgName
                      }}
                        style={styles.banner}></Image>
                    </View>
                  )
                })}
            </Swiper>
          </View>
          <View style={[styles.textBox, styles.column]}>
            <Text style={styles.textName}>{this.state.itemName}</Text>
            <Text style={styles.englishName}>{this.state.itemInfo.ext
                ? this.state.itemInfo.ext['英文名称']
                : ''}</Text>
            <Text style={styles.desc}>{this.state.itemInfo.ext
                ? this.state.itemInfo.ext['产品描述']
                : ''}</Text>
            <Text style={styles.price}>{this.state.itemInfo.size
                ? '¥' + this.state.itemInfo.size[0].price
                : 0}
            </Text>
          </View>
          <View style={[styles.column, styles.size]}>
            <View style={styles.sizeColumn}>
              <Text style={styles.sizeTitle}>尺寸</Text>
            </View>
            <View style={[styles.sizeColumn, styles.chooseSize]}>
              <Text>已选6寸</Text>
            </View>
            <View style={styles.sizeColumn}>
              <Ionicons name='ios-arrow-forward' size={25}/>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.msgColumn}>
              <Text style={[styles.msg, styles.msgTitle]}>温馨提示：</Text>
              <Text style={styles.msg}>1、为确保蛋糕新鲜制作，请提前24小时订购</Text>
              <Text style={styles.msg}>2、请冷藏保存，建议当天食用完毕</Text>
              <Text style={styles.msg}>3、蛋糕0-4℃冷藏保存，离开冷藏勿超过2小时</Text>
            </View>
            <View style={styles.msgColumn}>
              <Text style={[styles.msg, styles.msgTitle]}>配送服务：</Text>
              <Text style={[styles.msg, styles.msgTitle]}>时间：10:00-20:00</Text>
              <Image
                source={{
                uri: 'http://res.cakeland.com/images/map.jpg'
              }}
                style={styles.mapImage}></Image>
              <Text style={styles.msg}>1、A20外环以内地区：免费配送</Text>
              <Text style={styles.msg}>2、A20外环以外、郊环以内地区，凡使用抵扣券码购买的订单均加收20元配送费</Text>
              <Text style={styles.msg}>3、其他区域范围暂不做配送</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
// banner原图尺寸
const imageSize = {
  width: 850,
  height: 536
};
var styles = StyleSheet.create({
  body: {
    // backgroundColor: 'white'
  },
  wrapper: {
    width: deviceWidth,
    height: getSizeOfImage(imageSize, deviceWidth)
  },
  column: {
    backgroundColor: 'white',
    marginBottom: (deviceWidth * 0.04),
    paddingTop: (deviceWidth * 0.03),
    paddingBottom: (deviceWidth * 0.03),
    paddingLeft: (deviceWidth * 0.04),
    paddingRight: (deviceWidth * 0.04)
  },
  size: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  sizeColumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  sizeTitle: {
    color: '#aaaaaa'
  },
  chooseSize: {
    paddingLeft: (deviceWidth * 0.04),
    flexGrow: 1
  },
  banner: {
    width: deviceWidth,
    height: getSizeOfImage(imageSize, deviceWidth)
  },
  slide1: {
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    backgroundColor: '#97CAE5'
  },
  slide3: {
    backgroundColor: '#92BBD9'
  },
  textBox: {
    paddingLeft: (deviceWidth * 0.04),
    paddingRight: (deviceWidth * 0.04)
  },
  textName: {
    color: '#363636',
    fontSize: 18,
    paddingTop: (deviceWidth * 0.03)
  },
  englishName: {
    color: '#363636',
    paddingBottom: (deviceWidth * 0.03)
  },
  desc: {
    color: '#aaaaaa',
    fontSize: 15,
    paddingBottom: (deviceWidth * 0.03)
  },
  price: {
    color: '#EE0000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  msgColumn: {
    marginBottom: (deviceWidth * 0.06)
  },
  msgTitle: {
    paddingBottom: (deviceWidth * 0.01)
  },
  msg: {
    color: '#363636',
    paddingTop: (deviceWidth * 0.01)
  },
  mapImage: {
    width: (deviceWidth - deviceWidth * 0.08),
    height: getSizeOfImage({
      width: 1437,
      height: 866
    }, (deviceWidth - deviceWidth * 0.08))
  }
});
