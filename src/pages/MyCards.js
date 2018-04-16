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

export default class MyCards extends React.Component {
    static navigationOptions = {
        header: null,
    }
constructor(props) {
    super(props);
} 
    render()   {    
        return (
            <View  style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} title={'卡券'} />
            <ScrollView>
                <View style={styles.cardContainer}>
                     <View style={[styles.cardItem,styles.discountCard]}>
                             <View style={styles.cardLogo}></View>
                             <View style={styles.cardContent}>
                                 <Text style={styles.cardTitle}>折扣卡   ***kb20180416</Text>
                                 <Text  style={styles.cardDesc}>折扣：7.0折，剩余使用次数：1次</Text>
                             </View>
                     </View>
                     <View style={[styles.cardItem,styles.cakeCard]}>
                             <View style={styles.cardLogo}></View>
                             <View style={styles.cardContent}>
                                 <Text style={styles.cardTitle}>蛋糕卡   ***kb20180416</Text>
                                 <Text  style={styles.cardDesc}>已激活，金额：¥258</Text>
                             </View>
                     </View>
                     <View style={[styles.cardItem,styles.couponCard]}>
                             <View style={styles.cardLogo}></View>
                             <View style={styles.cardContent}>
                                 <Text style={styles.cardTitle}>优惠券   ***kb20180416</Text>
                                 <Text  style={styles.cardDesc}>优惠金额：¥100</Text>
                             </View>
                     </View>
                </View>
                </ScrollView>
            </View>
        );
    }
};
var styles = StyleSheet.create({
    cardContainer:{
        paddingLeft: (deviceWidth*0.02),
        paddingRight: (deviceWidth*0.02),
    },
    discountCard:{
        backgroundColor: '#48ab53'
    },
    cakeCard:{
        backgroundColor: '#d02e37'
    },
    couponCard:{
        backgroundColor: '#e8a72f'
    },
    cardItem:{
        borderRadius: 3,
        
        flexDirection: 'row',
        paddingTop: (deviceWidth * 0.03),
        paddingBottom: (deviceWidth * 0.03),
        paddingLeft: (deviceWidth * 0.03),
        paddingRight: (deviceWidth * 0.03),
        marginTop: (deviceWidth * 0.03)
    },
    cardContent:{
        paddingLeft: (deviceWidth * 0.03),
        justifyContent: 'space-around',
    },
    cardTitle:{
        color:'white',
        fontSize:13
    },
    cardDesc:{
        color:'white',
        fontSize:16
    },
    cardLogo:{
        width: (deviceWidth * 0.15),
    height: (deviceWidth * 0.15),
    borderRadius: (deviceWidth * 0.1),
    borderWidth: 1,
    borderColor: 'white'
    },
});