
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';





class Home extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Counter')}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Counter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Food')}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Food</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    

});


