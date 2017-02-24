// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  Text,
  Image,
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
    } else {
      const {
        avatar,
        level,
        games,
        losses,
        wins,
        ties,
        comprank,
        win_rate
      } = stats.competitive.overall_stats

      return (
        <View style={styles.statsContainer}>
          <ScrollView contentContainerStyle={styles.statsView}>
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            />
            <Text>Level: {level}</Text>
            <Text>Rank: {comprank}</Text>
          </ScrollView>
        </View>
      );
    }
  }
}
