import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ActivityIndicator,
} from "react-native";
import Logo from "../images/yxxyV1.png";
import { Actions } from "react-native-router-flux";
import { LinearGradient } from "expo-linear-gradient";

const switchtoAuth = () => {
  Actions.replace("Auth");
  //   navigation.navigate("AuthLoading");
};

export default class LoadingScreen extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount() {
    const { LogoAnime, LogoText } = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
      setTimeout(switchtoAuth, 1500);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#e36387", "#f2aaaa", "#a6dcef", "#ddf3f5"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />

        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image style={styles.image} source={Logo} />

          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
              size="large"
              color="white"
            />
          ) : null}
        </Animated.View>
        <Animated.View
          style={{
            opacity: this.state.LogoText,
            justifyContent: "flex-end",
            marginBottom: 50,
          }}
        >
          <Text style={styles.logoText}>YxxY</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ddf3f5",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  logoText: {
    color: "#f2aaaa",
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 29.1,
    fontWeight: "300",
    justifyContent: "flex-end",
  },
});
