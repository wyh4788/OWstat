// @flow

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Stats from './stats/stats';
import Settings from './settings/settings';

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
      />
      <Scene
        key="hero-stats"
        title="Hero Stats"
        component={Stats}
      />
      <Scene
        key="setting"
        title="Settings"
        component={Settings}
      />
    </Scene>
  </Router>
);

export default NavigationRouter;
