import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "./SettingsScreen";
import MessagesScreen from "./MessagesScreen";
import SocialScreen from "./SocialScreen";

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <Tab.Navigator
          initialRouteName="SocialScreen"
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "grey",
          }}
        >
          <Tab.Screen
            name="Settings"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  style={{ marginTop: 10 }}
                  name={"ios-person"}
                  size={size}
                  color={color}
                />
              ),
            }}
            component={SettingsScreen}
          />
          <Tab.Screen
            name="SocialScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  style={{ marginTop: 10 }}
                  name={"ios-people"}
                  size={size}
                  color={color}
                />
              ),
            }}
            component={SocialScreen}
          />
          <Tab.Screen
            name="MessagesScreen"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  style={{ marginTop: 10 }}
                  name={"ios-chatbubbles"}
                  size={size}
                  color={color}
                />
              ),
            }}
            component={MessagesScreen}
          />
        </Tab.Navigator>
        {/* </View> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100%",
  //   width: "100%",
  // },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
