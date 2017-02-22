// @flow
import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
    };
  }


  render() {
    const number = this.props.userStats.counter;
    return (
      <View style={{ paddingTop: 60 }}>
        <Text>{number}</Text>
        <Button
          title="Increment"
          onPress={this.props.incrementNum}
        />
        <Button
          title="Multiply"
          onPress={this.props.multiplyNum}
        />
      </View>
    );
  }

}
