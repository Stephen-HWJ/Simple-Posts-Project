import React from "react";
import {
  Button,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";
import { bindActionCreators } from "redux";
import { addPost } from "../redux/postsActions";
import { connect } from "react-redux";

class AddButton extends React.Component {
  state = {
    modalVisible: false,
    title: "title",
    body: "body",
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.props.addPost(json);
        this.setState({
          title: "title",
          body: "body",
        });
      });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.titleText}
                placeholder={"Title"}
                onChangeText={(text) => {
                  this.setState({ title: text });
                }}
              ></TextInput>

              <TextInput
                style={styles.modalText}
                multiline
                onChangeText={(text) => this.setState({ body: text })}
                placeholder={"Body"}
              ></TextInput>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                  this.addPost();
                }}
              >
                <Text style={styles.textStyle}>Add!</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Button title="Add Post" onPress={() => this.setModalVisible(true)} />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => dispatch({ type: "ADD_POST", postInfo: post }),
  };
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    marginBottom: 15,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 100,
  },
});

export default connect(null, mapDispatchToProps)(AddButton);
