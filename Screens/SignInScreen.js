import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from '../database/Fire';


export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
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
          top: 0,
          height: "100%",
        }}
      />

<KeyboardAwareScrollView
        extraScrollHeight={130}
        contentContainerStyle={styles.container}
      >
        <SafeAreaView style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="home-outline"
            size={130}
            color="white"
          />
      <View style={styles.form}>  
        <TextInput
           style={styles.textInput}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
           style={styles.textInput}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   

        <TouchableOpacity style={styles.button} onPress={() => this.userLogin()}>
            <Text style={styles.buttonText}> Se connecter</Text>
        </TouchableOpacity>

        <Text 
          style={styles.underButton}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Pas de compte ? S'inscrire
        </Text>     
        <Text 
          style={styles.underButton}
          onPress={() => this.props.navigation.navigate('RestPassword')}>
          Mot de passe oublié ?
        </Text>                         
      </View>
      </SafeAreaView>
      </KeyboardAwareScrollView>
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
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  }
});