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
    this.state = { player1: false, player2: false, status: 'initial' }
  }

  onPress1 = () => {
    if (this.state.status === 'initial') {
      this.setState({
        status: "running"
      });
    }
    if ((this.state['player1'] === false) & (this.state.player2 === false)) {
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
    if (this.state.status === 'initial') {
      this.setState({
        status: "running"
      });
    }
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

  reset = () => {
    this.setState({
      player1: false,
      player2: false,
      status: 'initial'
    });
  }

  pause = () => {
    this.setState({
      player1: false,
      player2: false,
    });
  }

 render() {
    return (
      <View style={styles.container}>
      
      <View
                style={{
                    flexDirection: 'column',
                    height: 100,
                    padding: 10,
                }}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress1}
        >
          <View style={[styles.countContainer]}>
            <Clock 
              turn={this.state.player1} 
              status={this.state.status}
            />
          </View>
        </TouchableHighlight>
        
        <View style={styles.spaceContainer} />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress2}
        >
          <View style={[styles.countContainer]}>
            <Clock 
              turn={this.state.player2}
              status={this.state.status}
            />
          </View>
        </TouchableHighlight>

        </View>
        
        <View style={styles.spaceContainer2} />

        <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 10,
                }}>
        <TouchableHighlight
          style={styles.menuButton}
          onPress={this.pause}
        >
          <View style={[styles.countContainer]}>
            <Text style={{color: 'white'}}>
              Pause
            </Text>
          </View>
        </TouchableHighlight>

        <View style={{padding: 10}} />

        <TouchableHighlight
          style={styles.menuButton}
          onPress={this.reset}
        >
          <View style={[styles.countContainer]}>
            <Text style={{color: 'white'}}>
              Reset
            </Text>
          </View>
        </TouchableHighlight>
          </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: -15,
    backgroundColor: "skyblue",
    width: 100,
    height: 50,
    padding: 5
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
  spaceContainer2: {
    alignItems: 'center',
    padding: 25
  },
})

