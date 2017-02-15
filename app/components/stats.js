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
    this.props.fetchUserData('DoctorCai-1480');
  }

  render() {
    return (
      <View>
        <Text style={{ paddingTop: 100 }}>Userdata</Text>
        <Text>{JSON.stringify(this.props.userStats)}</Text>
      </View>
    );
  }
}
