import React, { Component } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../Screens/LoadingScreen";
import Login from "../Screens/SignInScreen";
import Signup from "../Screens/SignUpScreen";
import Home from "../Screens/HomeScreen";
import Description from "../Screens/DescriptionScreen";
import RestPassword from "../Screens/ForgotPassword";
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import User from "../User";
import { Router, Scene } from "react-native-router-flux";
import firebase from "../database/Fire";
// const Stack = createStackNavigator();

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  // componentWillMount() {
  //   firebase;
  // }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    this.props.navigation.navigate(isLoggedIn !== "1" ? "Login" : "Home");
    // User.email = await AsyncStorage.getItem("userEmail");
    // this.props.navigation.navigate(User.email ? "Home" : "Login");
  };
  render() {
    return (
      <View style={styles.activity}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default class AppContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="LoadingScreen"
            component={LoadingScreen}
            initial={true}
            hideNavBar={true}
          ></Scene>
          <Scene
            key="Auth"
            component={AuthLoadingScreen}
            hideNavBar={true}
          ></Scene>
          <Scene
            key="LoadingScreen"
            component={LoadingScreen}
            hideNavBar={true}
          ></Scene>
          <Scene key="Login" component={Login} hideNavBar={true}></Scene>
          <Scene key="Signup" component={Signup} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>

          <Scene
            key="RestPassword"
            component={RestPassword}
            hideNavBar={true}
          ></Scene>

          <Scene
            key="Description"
            component={Description}
            hideNavBar={true}
          ></Scene>
        </Scene>
      </Router>
    );
  }
}
