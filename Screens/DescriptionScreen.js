// import React, { Component } from "react";
// import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";

// export default class Description extends Component {
//   render() {
//     return (
//       /* Modal pour afficher la desciption  */

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           console.log("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <TouchableOpacity
//               style={{ marginTop: 90 }}
//               onPress={() => {
//                 this.setModalVisible(!modalVisible);
//               }}
//             >
//               <Ionicons
//                 name={"ios-arrow-dropdown-circle"}
//                 size={40}
//                 color={"gray"}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     marginBottom: 50,
//   },
//   modalView: {
//     height: "100%",
//     width: 500,
//     backgroundColor: "white",
//     borderRadius: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 200,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     // elevation: 10
//   },
// });
//boss