// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/Fire';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'
import SettingsScreen from "./SettingsScreen"


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class Home extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: "black" }}>Home!</Text>
      </View>
    );
  }
}



class Message extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , color: "black"}}>
        <Text>Message!</Text>
      </View>
    );
  }
}
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <>
     

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />


      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey"
      }}
      >
              <Tab.Screen
         name="Settings"
         options={{
           tabBarLabel: "",
           tabBarIcon: ({color, size}) => (
             <Ionicons 
             style={{marginTop: 10}}
             name={"ios-person"}
             size={size}
             color={color}
             />
           )
         }}
          component={SettingsScreen}
           />
        <Tab.Screen
         name="Home"
         options={{
          tabBarLabel: "",
          tabBarIcon: ({color, size}) => (
            <Ionicons 
            style={{marginTop: 10}}
            name={"ios-people"}
            size={size}
            color={color}
            />
          )
        }}
          component={Home} 
          />
  
             <Tab.Screen
         name="Message"
         options={{
           tabBarLabel: "",
           tabBarIcon: ({color, size}) => (
             <Ionicons 
             style={{marginTop: 10}}
             name={"ios-chatbubbles"}
             size={size}
             color={color}
             />
           )
         }}
          component={Message}
           />
      </Tab.Navigator>
      {/* </View> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100%",
  //   width: "100%",
  // },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});