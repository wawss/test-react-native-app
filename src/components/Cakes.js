import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    ListView,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import {deviceWidth, deviceHeight,getSizeOfImage} from "../tools/ScreenUtil";
export default class Cakes extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕2'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕2'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕2'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕2'
                }, {
                    imageUri: require('../images/p-test.png'),
                    name: '迪士尼蛋糕2'
                }
            ])
        };
        this.itemStyle = (index) => {
            return index % 2 > 0
                ? styles.itemEven
                : styles.itemOdd;
        };
        this.renderRow = (rowData, sid, rid) => {
            return (
                <TouchableHighlight underlayColor='red'>
                <View style={[styles.item,this.itemStyle(rid)]}>
                    <Image source={rowData.imageUri} style={styles.itemImg}/>
                    <Text style={styles.itemName}>{rowData.name}</Text>
                </View>
                </TouchableHighlight>
            );
        };
    }
    render() {
        return (
            <ListView
                contentContainerStyle={styles.ListView}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}></ListView>
        );
    };

}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {},
    ListView: {
        'display': 'flex',
        'flexDirection': 'row',
        flexWrap: 'wrap',
        margin: 0,
        paddingLeft:deviceWidth*0.06,
    },
    item:{
        width: deviceWidth*0.42,
        height:  deviceWidth*0.42,
        marginBottom: deviceWidth*0.1,
    },
    itemName:{

    },
    itemOdd: {
        marginRight:deviceWidth*0.02
    },
    itemEven: {
        marginLeft:deviceWidth*0.02
    },
    itemImg: {
        width: deviceWidth*0.42,
        height:  deviceWidth*0.42
    }
});