import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class FoodList extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <FlatList style={styles.listContainer}
                extraData={this.props.foodList}
                data={this.props.foodList}
                keyExtractor={(item, index) => item.key.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ backgroundColor: 'red', width: 300 }} onPress={() => this.props.deletefood(item.key)}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 5 }}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
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
        deletefood: (key) => dispatch({ type: 'DELETE_FOOD', key: key }),
    }
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#dce2ff',
        padding: 16
    },
});

export default connect(mapStateToProp, mapDispatchToProps)(FoodList);
