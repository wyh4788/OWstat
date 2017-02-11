// @flow

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userStats: 0,
    };
  }

  render() {
    console.log(this.props.userStats);
    const number = this.props.userStats;
    return (
      <View style={{ paddingTop: 60 }}>
        <Text>{number}</Text>
        <Button
          title="Increment"
          onpress={this.props.incrementNum}
        />
      </View>
    );
  }
}
