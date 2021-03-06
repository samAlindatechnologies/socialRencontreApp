import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Image,
  Form,
  Item,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";
import Logo from "../images/yxxyV1.png";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pseudo: "",
      password: "",
      isLoading: false,
      uid: "",
      name: "",
    };
  }

  onSubmit = () => {
    this.setState();
  };
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = async () => {
    const { email, password } = this.state;
    if (
      (!this.state.email && !this.state.password) ||
      (this.state.email && !this.state.password) ||
      (!this.state.email && this.state.password)
    ) {
      Alert.alert("Enter details to signin please!");
    } else {
      this.setState({
        isLoading: true,
      });
      await axios
        .post("http://10.0.2.2:3000/signin", {
          email: email,
          password: password,
        })
        .then(async (response) => {
          // console.log(response.data);
          if (response.data.message === "User not found") {
            alert("Cet utilisateur n'existe pas");
            this.props.navigation.navigate("Login");
          } else if (response.data.message === "Access denied") {
            alert("Username or password incorrect");
            this.props.navigation.navigate("Login");
          } else {
            //J'enregistre mon token dans mes AsyncStorage
            const token = response.data.token;
            await AsyncStorage.setItem("token", token);
            // const voila = await AsyncStorage.getItem("token");
            // console.log(voila);
            this.props.navigation.navigate("Home");
          }
        });
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

    return (
      <>
        <LinearGradient
          colors={["#a6dcef", "#ddf3f5"]}
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
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.image} source={Logo} />
        </View>

        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <SafeAreaView style={{ alignItems: "center" }}>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor={"white"}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, "password")}
                maxLength={15}
                secureTextEntry={true}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.userLogin()}
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
                style={styles.underButton}
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                Pas de compte ? S'inscrire
              </Text>
              <Text
                style={styles.underButton}
                onPress={() => this.props.navigation.navigate("RestPassword")}
              >
                Mot de passe oublié ?
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
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
  underButton: {
    marginBottom: 15,
    color: "#e36387",
    textDecorationLine: "underline",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    width: 190,
    height: 45,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 10,
  },
});
