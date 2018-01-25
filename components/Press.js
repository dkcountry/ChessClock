import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {Clock} from './Clock.js';


export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { player1: false, player2: false }
  }

  onPress1 = () => {
    if ((this.state.player1 === false) & (this.state.player2 === false)) {
      this.setState({
        player2: true
      });
    } else if (this.state.player1 === true) {
      this.setState({
        player1: false,
        player2: true
      });
    }
  }

  onPress2 = () => {
    if ((this.state.player1 === false) & (this.state.player2 === false)) {
      this.setState({
        player1: true
      });
    } else if (this.state.player2 === true) {
      this.setState({
        player1: true,
        player2: false
      });
    }
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress1}
        >
          <View style={[styles.countContainer]}>
            <Clock turn={this.state.player1}/>
          </View>
        </TouchableHighlight>
        
      <View style={styles.spaceContainer} />

        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress2}
        >
          <View style={[styles.countContainer]}>
            <Clock turn={this.state.player2}/>
          </View>
        </TouchableHighlight>
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  spaceContainer: {
    alignItems: 'center',
    padding: 100
  },
})

