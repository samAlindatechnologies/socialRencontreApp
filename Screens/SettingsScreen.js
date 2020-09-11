import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "../database/Fire";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

class SettingsScreen extends Component {
  state = {
    users: [],
  };

  componentWillMount() {
    let dbRef = firebase.database().ref("users");
    dbRef.on("child_added", (val) => {
      let person = val.val();
      person.pseudo = val.key;
      this.setState((prevState) => {
        return {
          users: [...prevState.users, person],
        };
      });
      console.log(this.state.users);
    });
  }

  signOut = async () => {
    await AsyncStorage.clear();
    Actions.replace("Login");
  };

  renderRow = ({ item }) => {
    return (
      <View>
        <Text>{item.pseudo}</Text>
      </View>
    );
  };
  render() {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    // this.setState = {
    //   pseudo: firebase.auth().currentUser.pseudo,
    //   uid: firebase.auth().currentUser.uid,
    // };

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <ImageBackground source={image} style={styles.image}>
                <View style={styles.pictureProfil}>
                  {/* <Avatar
                    style={styles.tinyLogo}
                    source={{
                      uri:
                        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                    }}
                    showEditButton
                  /> */}
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            style={{ color: "black" }}
            data={this.state.users}
            renderItem={this.renderRow}
            // keyExtractor={(item) => item.email}
          />
          {/* {console.log(item)} */}
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

export default //  connect(mapStateToProps) (
SettingsScreen;
// );

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column"
  },
  header: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    justifyContent: "center",
    height: 200,
  },
  pictureProfil: {
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    resizeMode: "cover",
    height: 65,
    width: 65,
    borderRadius: 150,
    borderColor: "white",
    borderWidth: 1,
  },
});

// import React, { Component } from "react";
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Button,
// } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";
// import firebase from "../database/Fire";
// import { connect } from "react-redux";
// import { Actions } from "react-native-router-flux";
// // import { Avatar } from 'react-native-elements';
// class SettingsScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // users:'',
//       displayName: "",
//       uid: "",
//     };
//     // this.componentDidMount();
//   }

//   signOut = async () => {
//     // firebase.auth().signOut().then(() => {
//     //   this.props.navigation.navigate('Login')
//     // })
//     // .catch(error => this.setState({ errorMessage: error.message }))
//     await AsyncStorage.clear();
//     // this.props.navigation.navigate("Login");
//     Actions.replace("Login");
//   };
//   render() {
//     const image = { uri: "https://reactjs.org/logo-og.png" };
//     //  console.log(this.props.users);
//     // this.setState = ({
//     //     displayName: firebase.auth().currentUser.displayName,
//     //     uid: firebase.auth().currentUser.uid
//     //   }   )
//     //   console.log(this.state.displayName);
//     return (
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <TouchableOpacity>
//               <ImageBackground source={image} style={styles.image}>
//                 <View style={styles.pictureProfil}>
//                   {/* <Avatar
//             style={styles.tinyLogo}
//               source={{
//               uri:
//                   'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//                      }}
//               showEditButton
//             /> */}
//                   <Image source={image} style={styles.tinyLogo}></Image>
//                 </View>
//               </ImageBackground>
//             </TouchableOpacity>
//           </View>
//           <Button
//             color="#3740FE"
//             title="Logout"
//             onPress={() => this.signOut()}
//           />
//         </View>
//         <View style={{ justifyContent: "center", alignItems: "center" }}>
//           <Text style={{ color: "black" }}>
//             {/* {this.state.users.displayName} */}
//           </Text>
//         </View>
//       </ScrollView>
//     );
//   }
//   // componentDidMount() {

//   //   // _userName= async() => {
//   //     const name = firebase.auth().currentUser;
//   //     this.setState({users: name})

//   //   // }
//   //   console.log(name);
//   // }
// }

// // const mapStateToProps = (state) => {
// //   return state
// // }

// export default //  connect(mapStateToProps) (
// SettingsScreen;
// // );

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // flexDirection: "column"
//   },
//   header: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   image: {
//     justifyContent: "center",
//     height: 200,
//   },
//   pictureProfil: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   tinyLogo: {
//     resizeMode: "cover",
//     height: 65,
//     width: 65,
//     borderRadius: 150,
//     borderColor: "white",
//     borderWidth: 1,
//   },
// });
