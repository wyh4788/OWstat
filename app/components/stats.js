// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
    };
  }

  componentDidMount() {
    this.props.fetchInfo('DoctorCai-1480');
  }

  render() {
    return (
      <View style={{ paddingTop: 60 }}>
        <Text>UserData</Text>
        <Text>{JSON.stringify(this.props.userStats)}</Text>
      </View>
    );
  }

}
