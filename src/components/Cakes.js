import React from "react";
import SwiperBanner from './SwiperBanner';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { deviceWidth, deviceHeight, getSizeOfImage, setSpText } from "../tools/ScreenUtil";
export default class Cakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕22',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕1',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕',
                    english: 'dincakedd'
                }
            ]
        };
        this.itemStyle = (index) => {
            return index % 2 > 0
                ? styles.itemEven
                : styles.itemOdd;
        };
        this.renderItem = ({ item, index }) => {
            return (
                <TouchableHighlight underlayColor='red'>
                    <View
                        style={[
                            styles.item, this.itemStyle(index)
                        ]}>
                        <Image source={item.imageUri} style={styles.itemImg} />
                        <View style={styles.viewForItemName}>
                            <Text style={styles.styleForText}>{item.name}</Text>
                            <Text style={styles.styleForText}>{item.english}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        };
        this._keyExtractor = (item, index) => index;
        this._header = () => {
            return (<View>

            </View>);
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleDesc}>全&nbsp;部&nbsp;产&nbsp;品</Text>
                    <Text style={styles.engTitleDesc}>All Products</Text>
                </View>
                <FlatList  style={styles.ListView}
                    numColumns={2}
                    keyExtractor={this._keyExtractor}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}></FlatList>
            </View>
        );
    };

}
var { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
flex:1
    },
    titleBox: {
        marginLeft: (deviceWidth * 0.06),
        marginRight: (deviceWidth * 0.06),
        marginTop: (deviceWidth * 0.06),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#7bc2d5',
    },
    titleDesc: {
        color: '#686868',
        fontSize: setSpText(15)
    },
    engTitleDesc: {
        color: '#686868',
        fontSize: setSpText(12)
    },
    ListView: {
        paddingLeft: (deviceWidth * 0.06),
        paddingRight: (deviceWidth * 0.06),
    },
    item: {
        'display': 'flex',
        backgroundColor: 'white',
        width: (deviceWidth * 0.44),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (deviceWidth * 0.04),
    },
    viewForItemName: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleForText: {
        color: '#686868',
        fontSize: setSpText(16)
    },
    itemOdd: {
        // marginRight: (deviceWidth * 0.02)
    },
    itemEven: {
        // marginLeft: (deviceWidth * 0.02)
    },
    itemImg: {
        width: (deviceWidth * 0.40),
        height: (deviceWidth * 0.40)
    }
});