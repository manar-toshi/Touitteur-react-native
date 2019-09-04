import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import SendTouit from './components/SendTouit';
import Header from './components/Header';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';

export default class App extends React.Component {

    render() {
      return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView >
     <Header/>
     <SendTouit/>
     <TouitContainer/>
     <Trending/>
     </ScrollView>
   </SafeAreaView>

      );

    }
}
