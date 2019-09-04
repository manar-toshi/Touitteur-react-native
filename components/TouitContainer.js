import React, { Component } from 'react';
import { TouchableHighlight, View, Text, ScrollView, StyleSheet } from 'react-native';
import Touit from './Touit';
import { httpGetMessages } from "../api/TouitAPI";

export default class TouitContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            touits: [],
            lastTimestamp: 0,
            nbtouit: 10
        }
    }

    componentDidMount() {

        this.apiInterval = setInterval(this.refreshTouitList, 2000);
        this.refreshTouitList();
    }

    componentWillUnmount() {
        clearInterval(this.apiInterval);
    }

    refreshTouitList = () => {
        httpGetMessages(this.state.lastTimestamp, (response) => {
            this.setState({
                touits: [...response.messages.reverse(), ...this.state.touits],
                lastTimestamp: response.ts,
            });
        });
    }
    afficherplusanciens = () => {

        this.setState({ nbtouit: this.state.nbtouit + 10 });

    }
    afficherplusrecent = () => {

        this.setState({ nbtouit: this.state.nbtouit - 10 });

    }

    render() {

        var affichtouit = this.state.touits.slice(this.state.nbtouit - 10, this.state.nbtouit);
        const view = this.state.nbtouit > 10;
        const view2 = this.state.nbtouit + 0 > this.state.touits.length;
        return ( 
            <View style ={{backgroundColor: 'steelblue'}}>
                {
                    view ? <TouchableHighlight style= { styles.button}
                    onPress={ this.afficherplusrecent } >
                        <Text style = { styles.buttonText } > afficher plus recent </Text>
                        </TouchableHighlight>
                        : null
                }
                { affichtouit.map((touit, index) => {
                    return ( <Touit key={ index } {...touit } />)
                })}
                {view2
                ? null
                : <TouchableHighlight style= { styles.button}
                    onPress={ this.afficherplusanciens} >
                        <Text style = { styles.buttonText } > afficher plus anciens </Text>
                        </TouchableHighlight>}
            </View>
        
        );
    }
}

const styles = StyleSheet.create({

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
        margin: 5,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }

});
