import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <LinearGradient
          colors={["#051923", "#003554", "#0582CA", "#0582CA"]}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            // top: 0,
            height: "100%",
          }}
        />
        <ScrollView bounces={false} contentContainerStyle={styles.container}>
          <KeyboardAwareScrollView extraScrollHeight={110}>
            <SafeAreaView>
              <View style={styles.inner}>
                <Text style={styles.title}>Récupérez votre mot de passe</Text>

                <TextInput
                  autoCapitalize="none"
                  style={styles.textInput}
                  placeholder="email"
                  placeholderTextColor="#E1E1E1"
                />
                <Text style={styles.description}>
                  Vous avez oublié votre mot de passe? Nous vous enverons un
                  lien pour y remédier{" "}
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </KeyboardAwareScrollView>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    padding: 24,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginVertical: 20,
  },
  button: {
    width: 190,
    height: 65,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#3770B5",
    fontSize: 24,
  },
  underButton: {
    marginTop: 15,
    color: "white",
    textDecorationLine: "underline",
  },
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
  },
  description: {
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
    textAlign: "center",
  },
  textArea: {
    width: 330,
    height: 80,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: "top",
    color: "white",
    marginBottom: 20,
  },
});
