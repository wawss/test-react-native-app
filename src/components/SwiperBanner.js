import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {deviceWidth, deviceHeight,getSizeOfImage} from "../tools/ScreenUtil";

export default class SwiperBanner extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Swiper>
                    <View style={styles.slide1}>
                        <Image source={require('../images/b1.png')} style={styles.banner}></Image>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../images/b2.png')} style={styles.banner}></Image>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../images/b3.png')} style={styles.banner}></Image>
                    </View>
                </Swiper>
            </View>
        );
    }
};
// banner原图尺寸
const imageSize={width:640,height:233};
var styles = StyleSheet.create({
    wrapper: {
        width: deviceWidth,
        height: getSizeOfImage(imageSize,deviceWidth),
        backgroundColor: 'red'
    },
    banner: {
        width: deviceWidth,
        height: getSizeOfImage(imageSize,deviceWidth)
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
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})