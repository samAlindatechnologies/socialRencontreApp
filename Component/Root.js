import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/SignInScreen';
import Signup from '../Screens/SignUpScreen';
import Home from '../Screens/HomeScreen';
import RestPassword from '../Screens/ForgotPassword';
// import { View, ActivityIndicator, } from 'react-native';

const Stack = createStackNavigator();
// const AuthStack = createStackNavigator({Login : Login})

// class AuthLoadingScreen extends Component {
//   constructor(props) {
//     super(props);
//     this._loadData();
//   }
//   render() {
//     return(
//       <View>

//       </View>
//     )
//   }
// }


export default class AppContainer extends Component {
  render() {
    return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ header: () => null, animationEnabled: false }}
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ header: () => null, animationEnabled: false }}
      />       
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={{ header: () => null, animationEnabled: false }}
      />
      <Stack.Screen 
       name="RestPassword" 
       component={RestPassword} 
       options={{ header: () => null, animationEnabled: false }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
  }
   }
