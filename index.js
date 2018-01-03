// Imports

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }} >
    < Header headerText={'Health Score'} />
    <AlbumList />
  </View>
);

// Render the component
AppRegistry.registerComponent('HealthScore', () => App);
