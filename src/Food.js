import React, { Component } from 'react';
import { StyleSheet, Keyboard, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Counter extends Component {

    state = {
        food: null,
    }

    submit = () => {
        Keyboard.dismiss()
        this.props.addFood(this.state.food)
    }

    onChangeText = (text) => {
        console.log('list', this.props.foodList)
        this.setState({
            food: text
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.foodInput}
                        value={this.state.food}
                        placeholder={'enter food'}
                        onChangeText={text => this.onChangeText(text)}
                    />
                    <TouchableOpacity onPress={() => this.submit()}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert(this.props.foodList.map(food => food.name))}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Alert</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FoodList')}>
                        <Text style={{ fontSize: 20, margin: 5 }}>Go to see food list</Text>
                    </TouchableOpacity>



                </View>
            </View>
        );
    }
}

function mapStateToProp(state) {
    return {
        foodList: state.foodList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFood: (food) => dispatch({ type: 'ADD_FOOD', data: food }),

    }
}



const styles = StyleSheet.create({

    foodInput: {
        fontSize: 32,
        marginBottom: 32,
        borderWidth: 1,
        padding: 8,
        width: 200,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },



});

export default connect(mapStateToProp, mapDispatchToProps)(Counter);
