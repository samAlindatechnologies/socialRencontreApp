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
  Picker,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInterfaceIdiom } from "expo-constants";
import axios from "axios";
import { Actions } from "react-native-router-flux";
export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      // isLoading: false,
      // displayName: "",
      email: "",
      password1: "",
      // password2: "",
      pseudo: "",
      // description: "",
    };
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  submitForm = async () => {
    const { pseudo, email, password1, password2 } = this.state;

    if (password1 !== password2) {
      alert("Passwords are not matching");
    }
    axios
      .post("http://10.0.2.2:3000/signup", {
        email: email,
        password: password1,
        pseudo: pseudo,
      })
      .then(async (response) => {
        // console.log("la rep de la response:", response);
        const token = response.data.token;
        console.log("le token est:", token);
        if (response.data.message === "must provide email") {
          alert("Cet email est déjà utilisé");
        } else {
          await AsyncStorage.setItem("token", token);
          Actions.replace("Login");
          // this.props.navigation.navigate("Home");
        }
      });
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

          {/* Screen 1 */}
          {/* <View
            style={{
              backgroundColor: "rgba(20,20,200,0.3)",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: screenWidth,
              // height: screenHeight,
            }}
          >
            <View style={styles.questions}>
              <View>
                <Text>Vous êtes ☺</Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 25, width: 200, borderRadius: 50 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item label="Femme" value="Femme" />
                  <Picker.Item label="Homme" value="Homme" />
                </Picker>
              </View>
              <View>
                <Text>Vous recherchez</Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 25, width: 200, borderRadius: 50 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item label="Femmee" value="Femme" />
                  <Picker.Item label="Homme" value="Homme" />
                </Picker>
              </View>
              <View>
                <Text>Vous êtes la pour </Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 25, width: 200, borderRadius: 50 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item
                    label="Une histoire d'amour"
                    value="Une histoire d'amour"
                  />
                  <Picker.Item label="M'amuser" value="M'amuser" />
                  <Picker.Item
                    label="Rencontrer des nouvelles personnes"
                    value="Rencontrer des nouvelles personnes"
                  />
                  <Picker.Item label="Essayer" value="Essayer" />
                </Picker>
              </View>
            </View>
            <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Déjà un compte ? Se connecter
            </Text>
          </View> */}

          {/* Screen 2 */}

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
            <View style={styles.questions}>
              <View>
                <Text>Votre age</Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 25, width: 200, color: "blue" }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                  <Picker.Item label="13" value="13" />
                  <Picker.Item label="14" value="14" />
                  <Picker.Item label="15" value="15" />
                  <Picker.Item label="16" value="16" />
                  <Picker.Item label="17" value="17" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                </Picker>
              </View>
              <View>
                <Text>Vous habitez</Text>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 25, width: 200, borderRadius: 50 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item
                    label="Auvergne-Rhône-Alpes"
                    value="Auvergne-Rhône-Alpes"
                  />
                  <Picker.Item
                    label="Bourgogne-Franche-Conté"
                    value="Bourgogne-Franche-Conté"
                  />
                  <Picker.Item label="Bretagne" value="Bretagne" />
                  <Picker.Item
                    label="Centre-Val de Loire"
                    value="Centre-Val de Loire"
                  />
                  <Picker.Item label="Corse" value="Corse" />
                  <Picker.Item label="Grand Est" value="Grand Est" />
                  <Picker.Item
                    label="Hauts-de-France"
                    value="Hauts-de-France"
                  />
                  <Picker.Item label="Île-de-France" value="Île-de-France" />
                  <Picker.Item label="Normandie" value="Normandie" />
                  <Picker.Item
                    label="Nouvelle-Aquitaine"
                    value="Nouvelle-Aquitaine"
                  />
                  <Picker.Item label="Occitanie" value="Occitanie" />
                  <Picker.Item
                    label="Pays de la Loire"
                    value="Pays de la Loire"
                  />
                  <Picker.Item
                    label="Provence-Alpes-Côte d'Azur"
                    value="Provence-Alpes-Côte d'Azur"
                  />
                  <Picker.Item label="Guadeloupe" value="Guadeloupe" />
                  <Picker.Item label="Martinique" value="Martinique" />
                  <Picker.Item label="Guyane" value="Guyane" />
                  <Picker.Item label="La Réunion" value="La Réunion" />
                  <Picker.Item label="Mayotte" value="Mayotte" />
                </Picker>
              </View>
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Pseudo"
                  placeholderTextColor={"white"}
                  onChangeText={(val) => this.updateInputVal(val, "pseudo")}
                  value={this.state.pseudo}
                />
              </View>
              <View>
                <TextInput
                  style={styles.textInputDescription}
                  placeholder="Description"
                  placeholderTextColor={"white"}
                  onChangeText={(val) =>
                    this.updateInputVal(val, "description")
                  }
                  value={this.state.description}
                />
              </View>
            </View>
            <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Déjà un compte ? Se connecter
            </Text>
          </View>

          {/* screen 3 */}

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
            <View style={styles.container}>
              <Text style={styles.title}>Rejoignez-nous !</Text>

              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                placeholderTextColor={"white"}
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={this.state.password1}
                onChangeText={(val) => this.updateInputVal(val, "password1")}
                maxLength={15}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={this.state.password2}
                onChangeText={(val) => this.updateInputVal(val, "password2")}
                maxLength={15}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.submitForm()}
              >
                <LinearGradient
                  colors={["#e36387", "#f2aaaa"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradient}
                >
                  <Text style={styles.buttonText}> Let's Go</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.text}>
                * Et comme votre anonyma et important pour nous et vous
                appartient, nous vous en demandons pas plus{" "}
              </Text>
              <Text
                style={styles.loginText}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                Déjà un compte ? Se connecter
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 200,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
  },
  textInputDescription: {
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    height: 105,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
    justifyContent: "center",
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
    color: "white",
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
    color: "white",
    fontSize: 24,
  },
  loginText: {
    marginTop: 15,
    color: "white",
    textDecorationLine: "underline",
  },
  text: {
    color: "white",
    textAlign: "center",
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
  questions: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "70%",
  },
});
