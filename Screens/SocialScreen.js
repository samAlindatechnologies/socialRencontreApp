import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity
} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import { Ionicons } from '@expo/vector-icons'
import pictureProfil from "../images/femme.jpg";
import popo from "../images/poyo.jpg";

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No mmre cards</Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: "Tomato", image: pictureProfil , age: 35},
        { name: "Caro", image: popo },
        { name: "Marc", image: pictureProfil },
        { name: "Nina", image: pictureProfil },
        { name: "Zora", image: pictureProfil },
        { name: "Nina", image: pictureProfil },
      ],
      modalVisible: false
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  handleYup(card) {
    console.log(`Yup for ${card.name}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.name}`);
  }




  render() {
    // const totos = this.props.cards;
    const { modalVisible } = this.state;
    return (
      <>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => (
            <>
             <View style={styles.card}>
              <View>
                <Image
                  style={styles.image}
                  source={cardData.image} 
                /> 

              </View>
              <View style={styles.bottomCard}>
                <Text>{cardData.name}</Text>
                <Text>{cardData.age}</Text>
                  <TouchableOpacity  
                    onPress={() => { this.props.navigation.navigate("Description")}}
                   style={styles.buttonInfo}
                  >
                    <Ionicons 
                      name="ios-information" 
                      size={35} 
                      color="white" />
                  </TouchableOpacity>
              </View>  
            </View>
          </>
          )}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          useNativeDriver={true}
        />
    

      {/* Modal pour afficher la desciption  */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.")
          }} 
          > 
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <TouchableOpacity
               style={{marginTop: 90}}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                 <Ionicons
            name={"ios-arrow-dropdown-circle"}
            size={40}
            color={"gray"}
            />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      {/* Bouton valider ou refuser */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonLike}>
          <Ionicons 
          name="ios-heart-dislike" 
          size={35}
          color={"#F04F23"} 
           />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLike}>
            <Ionicons 
            name="ios-heart" 
            size={35} 
            color="#09F181"
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 500,
    width: 400,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // position: "relative",
    // width: 375, 
    // height: 400,
    // flex: 1,
    aspectRatio: 1.5, 
    resizeMode: "contain",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50
  },
  modalView: {
    height:"100%",
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 200
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }, 
  modalRemove: {
    justifyContent: "flex-end"
  },
  buttonLike: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  buttonInfo: {
    backgroundColor: "black",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,
    borderRadius:50,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  bottomCard: {
    justifyContent: "center",
    alignItems: "center",
  }
});


