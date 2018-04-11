import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { deviceWidth, deviceHeight, getSizeOfImage, setSpText } from "../tools/ScreenUtil";

export default class UpdatePwd extends React.Component {
    static navigationOptions = {
        title: '修改密码',
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
                    <TextInput style={styles.inputStyle} placeholder={'原密码'}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.inputStyle} placeholder={'新密码'}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.inputStyle} placeholder={'确认新密码'}></TextInput>
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
    button: {
        marginTop: (deviceWidth * 0.06),
        borderRadius: 5,
        height: (deviceWidth * 0.12),
        backgroundColor: '#E95098',
        justifyContent: 'center',

    }
});