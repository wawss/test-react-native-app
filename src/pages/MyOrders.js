import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deviceWidth, deviceHeight, getSizeOfImage } from "../tools/ScreenUtil";
import { NavigationActions } from 'react-navigation';
import Header from "../components/Header";

export default class MyOrders extends React.Component {
    static navigationOptions = {
        header: null,
    }
constructor(props) {
    super(props);
} 
    render()   {    
        return (
            <View  style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} title={'我的订单'} />
            <ScrollView>
                <View style={styles.orderContainer}>
                     
                </View>
                </ScrollView>
            </View>
        );
    }
};
var styles = StyleSheet.create({
    orderContainer:{
        paddingLeft: (deviceWidth*0.02),
        paddingRight: (deviceWidth*0.02),
    }
});