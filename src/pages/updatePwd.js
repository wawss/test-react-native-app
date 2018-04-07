import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,Button} from 'react-native';
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";

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
                    <Text></Text>
                    <TextInput style={styles.inputStyle} placeholder={'原密码'}></TextInput>
                </View>
                <View>
                   
                    <TextInput style={styles.inputStyle}  placeholder={'新密码'}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.inputStyle}  placeholder={'确认新密码'}></TextInput>
                </View>
                <View>
                <Button title="提交" color="#841584" onPress={()=>{}} style={styles.button}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingLeft: (deviceWidth*0.03),
        paddingRight: (deviceWidth*0.03),
    },
    inputStyle: {
        height: (deviceWidth*0.12),
        backgroundColor: 'white',
        marginTop: (deviceWidth*0.02),
        paddingLeft: (deviceWidth*0.04),
        borderRadius: 5,
    },
    button:{
        height: (deviceWidth*0.12),
        backgroundColor: '#E95098',
    }
});