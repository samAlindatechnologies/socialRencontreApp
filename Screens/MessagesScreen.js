import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class MessagesScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.swipeCards}>
          <Text>Message!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swipeCards: {
    width: 200,
    height: 400,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
