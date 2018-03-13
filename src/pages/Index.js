import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';
import  SwiperBanner  from '../components/SwiperBanner';
import  Cakes  from '../components/Cakes';

export default class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <SwiperBanner/><Cakes/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#EDFBFF'
    }
  });
  