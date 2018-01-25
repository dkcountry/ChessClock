import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from "react-native";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";

const styles = StyleSheet.create({
	container: {
		flex: -5,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		color: '#999999',
		fontSize: 25,
	}
})


export class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
            time: moment("05:00", "mm:ss"),
		};
	}
  
  componentDidMount() {
    setTimeout(() => {
        if (this.props.turn === true) {
			this.setState({
                time: moment(this.state.time.diff(moment("00:01","mm:ss")))
            });
        }
		}, 1000);
  }
  
  componentDidUpdate() {
    setTimeout(() => {
        if (this.props.turn === true) {
			this.setState({
                time: moment(this.state.time.diff(moment("00:01","mm:ss")))
            });
        }
		}, 1000);
  }

	render() {
		return (
				<Text style={styles.timeText}>
					{this.state.time.format("mm:ss")}
				</Text>
		)
	}
}