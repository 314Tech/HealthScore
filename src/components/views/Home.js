import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common';
import AlbumList from './AlbumList';

// Create a component
class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header headerText={'Health Score'} />
        <AlbumList />
      </View>
    );
  }
}

// Render the component
export default Home;
