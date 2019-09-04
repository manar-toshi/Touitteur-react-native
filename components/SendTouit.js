import React, { Component } from 'react';
import { Keyboard,keyboardType,TextInput , StyleSheet, View ,TouchableHighlight,Text, Alert} from 'react-native';
import {httpSendMessage} from "../api/TouitAPI";


export default class SendTouit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message:''
        }
    }
   
    sendTouit = (event) => {
        const { name, message } = this.state;
        event.preventDefault();
        httpSendMessage(name, message, (response) => {
            if (response.hasOwnProperty("success")) {
                alert("Votre message à bien été envoyé !");
            } else if (response.hasOwnProperty("error")) {
                alert("Une erreur est survenue :\n" + response.error);
            } else {
                alert("Une erreur inconnue est survenue !\nVeuillez réessayer.");
            }
        });
        this.setState({ message: "" });
    };
    
  render() {
    return (
    <View style={styles.container} >
        
    <TextInput
    style={styles.textinput}
    placeholder="Nom"
    onChangeText={(name) => this.setState({ name })}
    maxLength={16}
    keyboardType='default'
    value={this.state.name} 
    returnKeyType = { "next" }
    onSubmitEditing={() => { this.secondTextInput.focus(); }}
    blurOnSubmit={false}
   />
    <TextInput
    ref={(input) => {this.secondTextInput = input; }}
    style={styles.textinput}
    placeholder="Message"
    maxLength={256}
    keyboardType='default'
    onChangeText={(message) => this.setState({ message })}
    onSubmitEditing={this.sendTouit}
    blurOnSubmit={true}
    value={this.state.message}
    returnKeyType = { "send" }
    />
            
    <TouchableHighlight 
    style={styles.button} 
    blurOnSubmit={false}
    onPress={this.sendTouit}
     >
    <Text style={styles.buttonText}>Envoyer</Text>
    </TouchableHighlight>
    </View>
    );
      }
    }

const styles = StyleSheet.create({
    container: {
    
      backgroundColor: 'skyblue',
      marginBottom: 5,
      justifyContent: 'center',
      padding: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
      },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
      textinput:{
          backgroundColor: 'white',
          height: 40,
          borderColor: 'black',
          borderWidth: 1, 
          paddingLeft: 2,
          borderRadius: 10,
          marginBottom: 10
      }
    

  });
    