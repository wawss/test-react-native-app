import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {deviceWidth, deviceHeight, getSizeOfImage} from "../tools/ScreenUtil";
import {NavigationActions} from 'react-navigation';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.back = () => {
            const backAction = NavigationActions.back();
            this.props.navigation.dispatch(backAction);
        }
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.StatusBarView}>
                    <StatusBar backgroundColor={'blue'} barStyle={'dark-content'}/>
                </View>
                <View style={styles.headerTitleView}>
                    <TouchableWithoutFeedback onPress={this.back}>
                        <View
                            style={{
                            width: 45,
                            alignItems: 'center'
                        }}>
                            <Ionicons
                                name='ios-arrow-back'
                                size={28}
                                style={{
                                color: '#464b55'
                            }}></Ionicons>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerTitleText}>{this.props.title}</Text>
                    </View>

                    <View
                        style={{
                        width: 45,
                        alignItems: 'center'
                    }}>
                        <Ionicons
                            name='ios-more'
                            size={28}
                            style={{
                            color: '#464b55'
                        }}></Ionicons>
                    </View>
                </View>
            </View>
        );
    }
};
var styles = StyleSheet.create({
    header: {
        height: 62
    },
    StatusBarView: {
        backgroundColor: 'white',
        height: StatusBar.currentHeight
            ? StatusBar.currentHeight
            : 20
    },
    headerTitleView: {
        height: 62 - (StatusBar.currentHeight
            ? StatusBar.currentHeight
            : 20),
        backgroundColor: 'white',
        borderBottomWidth: .5,
        borderBottomColor: '#cbcbcb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        flex: 1,
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: 18
    }
});