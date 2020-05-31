import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';


import Home from './src/Home'
import Counter from './src/Counter'
import Food from './src/Food'
import FoodList from './src/FoodList'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  counter: 0,
  foodList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
    case 'ADD_FOOD':
      return {
        ...state,
        foodList: state.foodList.concat({
          "key": Math.random(), "name": action.data
        })
      }
    case 'DELETE_FOOD':
      console.debug(state.foodList, action.key, action.key)
      return {
        ...state,
        foodList: state.foodList.filter((item) => item.key == action.key)
      }
  }
  return state

}
const store = createStore(reducer)
const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="FoodList" component={FoodList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    );
  }
}

export default App;

