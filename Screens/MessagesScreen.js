import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import pictureProfil from "../images/femme.jpg";
import popo from "../images/poyo.jpg";
import sam from "../images/SAM.jpg";
// import { FlatList } from "react-native-gesture-hasndler";
const toto = [
  { id: "1", name: "Tomato", image: pictureProfil, age: 35 },
  { id: "2", name: "Caro", image: popo },
  { id: "3", name: "Marc", image: sam },
  { id: "4", name: "Nina", image: pictureProfil },
  { id: "5", name: "Zora", image: pictureProfil },
  { id: "6", name: "Nina", image: pictureProfil },
];

export default class MessagesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Vos Crushs</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {toto.map((to, i) => {
              return (
                <View style={styles.top}>
                  <TouchableOpacity style={{ flex: 2 }}>
                    <Image
                      style={{
                        flex: 1,
                        height: null,
                        width: null,
                        resizeMode: "cover",
                        borderRadius: 75 / 2,
                      }}
                      source={to.image}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: "flex",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    elevation: 4,
  },
  top: {
    width: 75,
    height: 75,
    margin: 10,
  },
  // swipeCards: {
  // width: 200,
  // height: 400,
  // backgroundColor: "white",
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 12,
  // },
  // shadowOpacity: 0.58,
  // shadowRadius: 16.0,
  // elevation: 24,
  // },
});
