// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';


const Stats = () => (
  <View style={{ paddingTop: 60 }}>
    <Text>Wang</Text>
    <Button
      title="Increment"
      onpress={store.dispatch({ type: 'ADD_ONE', increment: 1 })}
    />
  </View>
);

export default Stats;
