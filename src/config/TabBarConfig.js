import React from 'react';
import { StyleSheet } from 'react-native';



export const activeColor = '#E95098';
export const defaultColor = '#686868';
export const iconSize = 25;
export const fontSize = 13;

export const tabBarOptions= {
    style: {
      backgroundColor: 'white',
      paddingTop:4,
      paddingBottom:4,
      display:'flex',
      alignItems:'flex-end'
    }
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
