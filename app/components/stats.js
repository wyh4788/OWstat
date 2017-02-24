// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
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
    const { stats, heroes, achievements } = this.props.userStats;

    if (!stats) {
      return (
        <View style={styles.statsContainer}>
          <ActivityIndicator style={styles.spinner} size="large" />
        </View>
      );
    }


    return (
      <View style={styles.statsContainer}>
        <ScrollView style={styles.statsView}>
          <Text>Userdata Loaded</Text>
        </ScrollView>
      </View>
    );
  }
}
