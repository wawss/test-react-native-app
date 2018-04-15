import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";
import Header from "../components/Header";

export default class BindPhone extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title={'绑定手机号码'}/>
                <View>
                    <View>
                        <TextInput style={styles.inputStyle} placeholder={'新手机号码'}  underlineColorAndroid={'transparent'}></TextInput>
                    </View>
                    <View style={styles.codeContainer}>
                        <TextInput
                            style={[styles.inputStyle, styles.codeInputStyle]}
                            placeholder={'验证码'} underlineColorAndroid={'transparent'}></TextInput>
                        <View style={styles.buttonStyle}>
                            <TouchableWithoutFeedback>
                                <View>
                                    <Text style={styles.buttonText}>获取验证码</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View>
                        <View style={styles.button}>
                            <TouchableWithoutFeedback>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>提交</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    inputStyle: {
        height: (deviceWidth * 0.12),
        backgroundColor: 'white',
        marginTop: (deviceWidth * 0.02),
        paddingLeft: (deviceWidth * 0.04),
        borderRadius: 5,
        borderBottomWidth: 0
    },
    buttonContainer:{
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        paddingLeft: (deviceWidth * 0.02),
        paddingRight: (deviceWidth * 0.02),
        fontSize: 16,
    },
    codeInputStyle: {
        flex: 1
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonStyle: {
        marginTop: (deviceWidth * 0.02),
        borderRadius: 5,
        backgroundColor: '#E95098',
        justifyContent: 'center',
        marginLeft: (deviceWidth * 0.02),
        height: (deviceWidth * 0.12)
    },
    button: {
        marginTop: (deviceWidth * 0.06),
        borderRadius: 5,
        height: (deviceWidth * 0.12),
        backgroundColor: '#E95098',
        justifyContent: 'center'
    }
});