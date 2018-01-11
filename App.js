import React, { Component } from 'react';
import firebase from 'firebase';
import { ScrollView, View } from 'react-native';
import { LoginForm, AlbumList } from './src/components/views';
import { Button, CardSection, Header, Spinner } from './src/components/common';
// Create a component
class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDeYNMXMVYbxFMo_OsVkKHRChc9Pt7iiLE',
      authDomain: 'health-score-e2149.firebaseapp.com',
      databaseURL: 'https://health-score-e2149.firebaseio.com',
      projectId: 'health-score-e2149',
      storageBucket: 'health-score-e2149.appspot.com',
      messagingSenderId: '866707380105'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <ScrollView >
            <Header headerText={'Health Score'} />
            <AlbumList />
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>
              </CardSection>
          </ScrollView>

        );
      case false:
        return (
          <View>
            <Header headerText={'Authentication'} />
            <LoginForm />
          </View>
        );
      default:
        return <Spinner size={'large'} />
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

// Render the component
export default App;
