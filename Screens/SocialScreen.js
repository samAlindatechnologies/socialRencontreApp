import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import pictureProfil from "../images/femme.jpg";
import popo from "../images/poyo.jpg";
import sam from "../images/SAM.jpg";
import Description from "./DescriptionScreen";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const cards = [
  { id: "1", name: "Tomato", image: pictureProfil, age: 35 },
  { id: "2", name: "Caro", image: popo },
  { id: "3", name: "Marc", image: sam },
  { id: "4", name: "Nina", image: pictureProfil },
  { id: "5", name: "Zora", image: pictureProfil },
  { id: "6", name: "Nina", image: pictureProfil },
];

export default class SocialScreen extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      modalVisible: false,
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-30deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }
  renderUsers = () => {
    return cards
      .map((item, i) => {
        if (i < this.state.currentIndex) {
          return null;
        } else if (i == this.state.currentIndex) {
          return (
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id}
              style={[
                this.rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.likeOpacity,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>

              <Animated.View
                style={{
                  opacity: this.dislikeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>

              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
                source={item.image}
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={item.id}
              style={[
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: 0,
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>

              <Animated.View
                style={{
                  opacity: 0,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>

              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                  // position: "absolute",
                }}
                source={item.image}
              />
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  handleYup() {
    console.log(`Yup  `);
  }
  handleNope() {
    console.log(`Nope `);
  }
  affiche() {
    console.log(`ca affiche`);
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ height: 60 }}></View>
          <View
            style={{ flex: 1 }}
            // renderNoMoreCards={() => }
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            useNativeDriver={true}
          >
            {cards ? this.renderUsers() : <NoMoreCards />}
          </View>
          <View style={{ height: 60 }}></View>
        </View>

        {/* Modal pour afficher la desciption  */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Hello</Text>
              <View style={styles.leaveModal}>
                <TouchableOpacity
                  // style={{ marginTop: 90 }}

                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Ionicons
                    name={"ios-arrow-dropdown-circle"}
                    size={140}
                    color={"gray"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Bouton valider ou refuser */}
        <View style={styles.button}>
          {/* Button Like  */}
          <TouchableOpacity
            style={styles.buttonLike}
            onPress={() => {
              this.handleNope();
            }}
          >
            <Ionicons name="ios-heart-dislike" size={45} color={"#F04F23"} />
          </TouchableOpacity>

          {/* Button Info  */}
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!modalVisible);
            }}
            style={styles.buttonInfo}
          >
            <Ionicons name="ios-information" size={25} color="white" />
          </TouchableOpacity>

          {/* Button Dislike  */}
          <TouchableOpacity
            style={styles.buttonLike}
            onPress={() => {
              this.handleYup();
            }}
          >
            <Ionicons name="ios-heart" size={45} color="#09F181" />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    height: 550,
    width: 350,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    height: "100%",
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 200,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalRemove: {
    justifyContent: "flex-end",
  },
  buttonLike: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  buttonInfo: {
    backgroundColor: "black",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    marginTop: 30,
    elevation: 24,
  },
  bottomCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  leaveModal: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
