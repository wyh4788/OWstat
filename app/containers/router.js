// @flow

import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Stats from './stats/stats';
import Settings from './settings/settings';

const TabIcon = props => (
  <Text style={{ color: props.selected ? 'red' : 'black' }}>
    {props.title}
  </Text>
);

export const NavigationRouter = () => (
  <Router>
    <Scene
      key="tabs"
      tabs
    >
      <Scene
        key="user-stats"
        title="My Stats"
        component={Stats}
        icon={TabIcon}
      />
      <Scene
        key="other-user-stats"
        title="User Stats"
        component={Stats}
        icon={TabIcon}
      />
      <Scene
        key="setting"
        title="Settings"
        component={Settings}
        icon={TabIcon}
      />
    </Scene>
  </Router>
);

export default NavigationRouter;
