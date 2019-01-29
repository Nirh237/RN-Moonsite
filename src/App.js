import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Root } from 'native-base';
import MainScreen from './pages/MainScreen';
import ShowScreen from './pages/ShowScreen';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";

const store = configureStore();

class App extends React.Component {
  componentDidMount() {
  
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

export const AppNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    ShowScreen: {screen: ShowScreen },

  },
  {
    initialRouteName: 'MainScreen',
  }
);



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

Expo.registerRootComponent(App);