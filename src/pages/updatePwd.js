import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableWithoutFeedback
} from 'react-native';
import {deviceWidth, deviceHeight, getSizeOfImage, setSpText} from "../tools/ScreenUtil";
import Header from "../components/Header";

export default class UpdatePwd extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title={'修改密码'}/>

                <View>
                    <TextInput style={styles.inputStyle} placeholder={'原密码'}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.inputStyle} placeholder={'新密码'}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.inputStyle} placeholder={'确认新密码'}></TextInput>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableWithoutFeedback>
                        <View>
                            <Text style={styles.buttonText}>提交</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
        borderRadius: 5
    },
    buttonContainer: {
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    buttonStyle: {
        marginTop: (deviceWidth * 0.02),
        borderRadius: 5,
        backgroundColor: '#E95098',
        justifyContent: 'center',
        height: (deviceWidth * 0.12),
        alignItems:'center'
    }
});