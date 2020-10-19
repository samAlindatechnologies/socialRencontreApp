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
import { Ionicons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

class SettingsScreen extends Component {
  state = {
    users: [],
    pseudo: "",
  };

  signOut = async () => {
    await AsyncStorage.clear();
    Actions.replace("Login");
  };
  // signOut = async () => {
  //   console.log(AsyncStorage.getItem(token));
  // };
  renderRow = async ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={_onOpenActionSheet}>
          {data.photo.length > 0 ? (
            <Image
              style={styles.image}
              source={{ uri: image || data.photo[0].url }}
            />
          ) : (
            <Ionicons name="ios-person" size={140} />
          )}
        </TouchableOpacity>

        
      </View>
    );
  };


  renderPseudo = async () => {
    await axios
    .get("http://10.0.2.2:3000/users")
    .then(async (response) => {
      console.log(response);
    //     const pseudo = response.data.pseudo;
    // this.setState({pseudo: pseudo})
      }
    );
  
    return (
      <View>
 <Text>hello</Text>

        
      </View>
    );
  };


 
  render() {
    const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <ImageBackground source={image} style={styles.image}>
                <View style={styles.pictureProfil}>
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
          />
        </View>
        <View>
        {this.renderPseudo}
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
