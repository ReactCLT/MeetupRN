import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const tempList = ['one', 'two', 'three', 'four', 'five'];

class MeetupRN extends Component {
  render() {
    const attendeeList = tempList.map((item, index) => {
      return (
        <View key={`${item}-${index}`} style={{ 'height': 150 }}>
          <Text>{item}</Text>
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
