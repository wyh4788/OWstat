// @flow
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import styles from './styles';

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
      <View style={styles.statsContainer}>
        <ScrollView style={styles.statsView}>
          <Text>Userdata</Text>
          <Text>{this.props.userStats.us ? 'Data Loaded' : 'Loading...'}</Text>
        </ScrollView>
      </View>
    );
  }
}
