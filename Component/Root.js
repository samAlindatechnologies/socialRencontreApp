import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/SignInScreen';
import Signup from '../Screens/SignUpScreen';
import Home from '../Screens/HomeScreen';
import Description from '../Screens/DescriptionScreen';
import RestPassword from '../Screens/ForgotPassword';
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return(
      <View style={styles.activity}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    )
  }
  _loadData= async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Login' : 'Home')
  }
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   
  }
});


export default class AppContainer extends Component {
  render() {
    return (
  <NavigationContainer> 
    <Stack.Navigator
      initialRouteName="AuthLoading"
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
        name="AuthLoading" 
        component={AuthLoadingScreen} 
        options={{ header: () => null, animationEnabled: false }}
      />
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
         <Stack.Screen 
          name="Description" 
          component={Description} 
          options={{ header: () => null, animationEnabled: false }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
    }   
   }
