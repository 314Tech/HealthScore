import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { AlbumDetail } from '../common';

class AlbumList extends Component {

  state = { albums: [], isConnected: false }
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      console.log(response.data);
      this.setState({ isConnected: true });
      this.setState({ albums: response.data });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ isConnected: false });
    });
  }

  renderAlbums() {
    if (this.state.isConnected) {
      return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />);
    }
    return <Text>No Item Found</Text>;
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export { AlbumList };
