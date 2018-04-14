import React from 'react';
import {StyleSheet} from 'react-native';

export const activeColor = '#E95098';
export const defaultColor = '#686868';
export const iconSize = 25;
export const fontSize = 11;

export const tabBarOptions = {
    style: {
        backgroundColor: 'white',
        height: 50,
        paddingTop: 0,
        paddingBottom: 0,
        borderTopWidth: .3,
        borderTopColor: '#cecece',
    },
    showIcon: true, //for android,
    indicatorStyle: {
        backgroundColor: 'white', //for android,
    },
    tabStyle: {}
}

export const TabBarStyle = StyleSheet.create({
    activeMenuStyle: {
        fontSize: fontSize,
        color: activeColor
    },
    defaultMenuStyle: {
        fontSize: fontSize,
        color: defaultColor
    }
});
