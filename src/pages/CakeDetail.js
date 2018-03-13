import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

export default class CakeList extends React.Component {


  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.title : 'A Nested Details Screen'
    }
  }

    render() {
      const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const title = params ? params.title : null;
      return (
          <Text>蛋糕详细</Text>
      );
    }
  }
  
