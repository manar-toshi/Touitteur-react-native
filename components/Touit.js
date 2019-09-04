import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Touit extends React.Component{
    render(){
        const {name,message } = this.props;
        return(
            <View style={styles.container} >
                    <Text style={{color:'red',fontSize: 24, textAlign:'left'}}>{message}</Text>
                    <Text style={{color:'gray',fontSize: 16, textAlign:'right'}}>{name}</Text>
            </View>
        );
        }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      margin:5,
      justifyContent: 'center',
      padding: 10,
      borderWidth: 1,
      borderRadius: 10
    }
});