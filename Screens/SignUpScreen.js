import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  AppRegistry,
  ScrollView,
  Dimensions,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../database/Fire";
import Swiper from "react-native-web-swiper";

export default class Signup extends Component {
  constructor() {
    super();
    // this.email = this.email.bind(this);
    this.state = {
      isLoading: false,
      displayName: "",
      email: "",
      password: "",
    };
  }
  handleChange(name, value) {
    this.setState({ [name]: value });
    console.log();
  }

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <>
        <ScrollView horizontal={true} pagingEnabled={true}>
          <LinearGradient
            colors={["#ddf3f5", "#a6dcef"]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 1, y: 0 }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
          />
          <View
            style={{
              backgroundColor: "rgba(20,20,200,0.3)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: screenWidth,
              // height: screenHeight,
            }}
          >
            {/* <TextInput
                style={styles.textInput}
                placeholder="Name"
                value={this.state.displayName}
                onChangeText={(txt) => this.handleChange("displayName", txt)}
              /> */}
            {/* <Text
                style={styles.loginText}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                Déjà un compte ? Se connecter
              </Text> */}
          </View>
          <View
            style={{
              backgroundColor: "rgba(20,200,20,0.3)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: screenWidth,
              // height: screenHeight,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                padding: 15,
                color: "white",
                textAlign: "center",
              }}
            >
              Screen 2
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(200,20,20,0.3)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: screenWidth,
              // height: screenHeight,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                padding: 15,
                color: "white",
                textAlign: "center",
              }}
            >
              Screen 3
            </Text>
          </View>
        </ScrollView>
        {/* <ScrollView bounces={false} contentContainerStyle={styles.container}>
          <KeyboardAwareScrollView extraScrollHeight={110}>
          <SafeAreaView>
          <Swiper>
            <View style={styles.container}>
              <Text style={styles.title}>Rejoignez-nous !</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Name"
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, "displayName")}
              />

              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, "password")}
                maxLength={15}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.registerUser()}
              >
                <LinearGradient
                  colors={["#e36387", "#f2aaaa"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradient}
                >
                  <Text style={styles.buttonText}> Se connecter</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text
                style={styles.loginText}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                Déjà un compte ? Se connecter
              </Text>
            </View>
          </Swiper>
          </SafeAreaView>
          </KeyboardAwareScrollView>
        </ScrollView> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "blue",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginVertical: 20,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    width: 190,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },

  inputStyle: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
  },
  buttonText: {
    color: "#3770B5",
    fontSize: 24,
  },
  loginText: {
    marginTop: 15,
    color: "white",
    textDecorationLine: "underline",
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    width: 190,
    height: 45,
    borderRadius: 10,
  },
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // slide1: {
  //   backgroundColor: "rgba(20,20,200,0.3)",
  // },
  // slide2: {
  //   backgroundColor: "rgba(20,200,20,0.3)",
  // },
  // slide3: {
  //   backgroundColor: "rgba(200,20,20,0.3)",
  // },
});
