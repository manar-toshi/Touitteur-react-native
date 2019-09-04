import React, { Component } from 'react';
import { FlatList, View , Text, ScrollView, StyleSheet} from 'react-native';
import Touit from './Touit';
import {httpGetTrending} from "../api/TouitAPI";

class Trending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
    }

    componentDidMount() {
        this.apiInterval = setInterval(this.refreshWords, 1000);
        this.refreshWords();
    }

    componentWillUnmount() {
        clearInterval(this.apiInterval);
    }

    refreshWords = () => {
        httpGetTrending((response) => {
            const words = [];
            for (let v in response) {
                words.push([v, response[v]])
            }
            this.setState({
                words: words
                    .sort((a, b) => b[0].length - a[0].length)
                    .sort((a, b) => b[1] - a[1])
            });
        });
    };

    render() {
        const { words } = this.state;
        return (
            <View style={styles.container} >
                <Text style={{fontSize:26}}>Trending</Text> 
   
                {words.map((word, index) => {
                    return (
                        <View style={styles.trendings} >
                    <Text key={index} style={{color:'black',fontSize: 12}}>#{word[0]}</Text>
            </View>
                       
                       )
                    })}
                
                </View>
                )
    }
    }
export default Trending

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
        padding: 3,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:5 
      },
        trendings: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        padding: 10,
        margin:5
    }
});