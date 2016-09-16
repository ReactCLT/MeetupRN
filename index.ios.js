import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { getEvents } from './helpers/api';


class MeetupRN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    getEvents().then(events => this.setState({ events }));
  }

  render() {
    const { events } = this.state;
    const attendeeList = events.map(item => {
      return (
        <View key={item.id} style={{ 'height': 150 }}>
          <Text>{item.name}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MeetupRN!
        </Text>
        <ScrollView style={styles.attendeeList}>
          {attendeeList}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  attendeeList: {
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MeetupRN', () => MeetupRN);
