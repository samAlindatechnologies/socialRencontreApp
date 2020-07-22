import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button  } from "react-native";

import firebase from '../database/Fire';
class SettingsScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName:'',
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
    const image = { uri: "https://reactjs.org/logo-og.png" };

  // this.setState = ({ 
  //     displayName: firebase.auth().currentUser.displayName,
  //     uid: firebase.auth().currentUser.uid
  //   }   )
  //   console.log(this.state.displayName);
      return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <ImageBackground source={image} style={styles.image}>
            <View style={styles.pictureProfil} >
              <Image source={image} style={styles.tinyLogo}></Image>
            </View>
             
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Button
color="#3740FE"
title="Logout"
onPress={() => this.signOut()}
/>

      </View>
      </ScrollView>
      );
    }
  }
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column"
  },
  header: {
    flex: 1,
    flexDirection: "column",
    // marginTop: 24
  },
  image: {
    // resizeMode: "cover",
    justifyContent: "center",
    height: 200
  },
  pictureProfil : {
    justifyContent: "center",
    alignItems:"center",
  },
    tinyLogo: {
      // resizeMode: "cover",
      height:65,
      width: 65,
      borderRadius: 150,
      borderColor: "white",
      borderWidth: 1,
    }
});
