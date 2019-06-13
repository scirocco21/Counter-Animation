/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import  Counter from 'react-native-counter'

export default class App extends Component {
  render() {
   
    return (
      <View style={styles.container}>
        <Counter
          end={21}                        // REQUIRED End of the counter
          start={21}                     // Beginning of the counter
          time={2750}                   // Duration (in ms) of the counter
          digits={2}                    // Number of digits after the comma
          easing="circOut"              // Easing function name
          onComplete={() => console.log("counter finished")}                 // Callback when the counter is completed
          style={{fontSize: 50}}      // Custom style
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
