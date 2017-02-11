// @flow

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Stats extends Component {
  render() {
    const number = this.props.userStats.counter;
    return (
      <View style={{ paddingTop: 60 }}>
        <Text>{number}</Text>
        <Button
          title="Increment"
          onPress={this.props.incrementNum}
        />
      </View>
    );
  }
}
