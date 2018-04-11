import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { deviceWidth, deviceHeight, getSizeOfImage, setSpText } from "../tools/ScreenUtil";

export default class BindPhone extends React.Component {
    static navigationOptions = {
        title: '绑定手机号码',
        headerStyle: {
            backgroundColor: '#E95098'
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    render() {
        return (
            <View style={styles.container}>
               <View>
                    <TextInput style={styles.inputStyle} placeholder={'新手机号码'}></TextInput>
                </View>
                <View style={styles.codeContainer}>
                    <TextInput style={[styles.inputStyle,styles.codeInputStyle]} placeholder={'验证码'}></TextInput>
                    <View style={styles.buttonStyle}>
                        <Button title='获取验证码' color="white" onPress={() => { }}></Button>
                    </View>
                </View>
                <View>
                <View style={styles.button}>
                        <Button title="提交" color="white" onPress={() => { }}></Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingLeft: (deviceWidth * 0.03),
        paddingRight: (deviceWidth * 0.03),
    },
    inputStyle: {
        height: (deviceWidth * 0.12),
        backgroundColor: 'white',
        marginTop: (deviceWidth * 0.02),
        paddingLeft: (deviceWidth * 0.04),
        borderRadius: 5,
    },
    codeInputStyle:{
    flex:1
    },
    codeContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    buttonStyle:{
        marginTop: (deviceWidth * 0.02),
        borderRadius: 5,
        backgroundColor:'#E95098',
        justifyContent: 'center',
        marginLeft:(deviceWidth * 0.02),
        height: (deviceWidth * 0.12),
    },
    button: {
        marginTop: (deviceWidth * 0.06),
        borderRadius: 5,
        height: (deviceWidth * 0.12),
        backgroundColor: '#E95098',
        justifyContent: 'center',

    }
});