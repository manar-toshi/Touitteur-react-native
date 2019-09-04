import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    render() {
        return (<View style = {
                { backgroundColor: 'powderblue', paddingTop: 10, paddingBottom: 10, marginBottom: 5 } } >
          <Text style = {
                { color: 'black', fontSize: 50, textAlign: 'center', textAlignVertical: 'bottom' } } > Touitteur </Text>
                </View>

        );
    }
}
