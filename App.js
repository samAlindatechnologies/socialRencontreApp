import React, { Component } from "react";
import AppContainer from "./Component/Root";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";

// const store = createStore();

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
      // </Provider>
    );
  }
}
