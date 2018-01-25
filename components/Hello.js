import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export class ViewColoredBoxesWithText extends Component {
    constructor(props) {
        super(props);
        this.state = { color1: 'blue', color2: 'red' };
        this.changeColors = this.changeColors.bind(this);
      }
      
      changeColors(newName) {
          if (this.state.color1 === 'blue') {
            this.setState({
                color1: 'green',
                color2: 'yellow'
            });
          } else {
            this.setState({
                color1: 'blue',
                color2: 'red'
            });
          }
        }

    render() {
      return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 10,
                }}>
                <View style={{backgroundColor: this.state.color1, flex: 1.5}} />
                <View style={{backgroundColor: this.state.color2, flex: 1.5}} />
            </View>

            <Button
            onPress={this.changeColors}
            title="Change Color"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"/>
        </View>
      );
    }
  }


