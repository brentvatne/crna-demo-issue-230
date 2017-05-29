import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Container, Button, Text } from 'native-base';

export default class App extends React.Component {
  state = {
    ready: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ready: true});
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
