import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button  } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../database/Fire';
import {connect} from 'react-redux'
class SettingsScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      // users:'',
      displayName:'',
      uid: ''
    }
    // this.componentDidMount();
  }

  signOut = async() => {
    // firebase.auth().signOut().then(() => {
    //   this.props.navigation.navigate('Login')
    // })
    // .catch(error => this.setState({ errorMessage: error.message }))
await AsyncStorage.clear();
this.props.navigation.navigate('Login')
  }  
  render() {
    const image = { uri: "https://reactjs.org/logo-og.png" };
  //  console.log(this.props.users);
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
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
         <Text style={{ color: "black" }}>
        {/* {this.state.users.displayName} */}
      </Text>
      </View>
     
      </ScrollView>
      );
    }
    // componentDidMount() {

    //   // _userName= async() => {
    //     const name = firebase.auth().currentUser;
    //     this.setState({users: name})
        
    //   // }
    //   console.log(name);
    // }
  }



// const mapStateToProps = (state) => {
//   return state
// }

export default
//  connect(mapStateToProps) (
  SettingsScreen
  // );

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
