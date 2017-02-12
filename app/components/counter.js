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
      userStats: {},
    };
  }

  componentDidMount() {
    this.props.fetchUserData('DoctorCai-1480');
  }

  render() {
    // console.log(this.props.userStats);
    return (
<<<<<<< HEAD
      <View>
        <Text style={{ paddingTop: 100 }}>Userdata</Text>
        <Text>{JSON.stringify(this.props.userStats)}</Text>
=======
      <View style={{ paddingTop: 60 }}>
        <Text>{number}</Text>
        <Button
          title="Increment"
          onPress={this.props.incrementNum}
        />
>>>>>>> parent of a1fc9f5... Add feature: add multiply button
      </View>
    );
  }
}
