import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

class Counter extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increment()}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, margin: 5 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decrement()}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Decrement</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProp(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment : () => dispatch({type: 'INCREASE_COUNTER'}),
        decrement : () => dispatch({type: 'DECREASE_COUNTER'}),
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default connect(mapStateToProp, mapDispatchToProps)(Counter);
