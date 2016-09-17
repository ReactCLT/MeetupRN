import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';
import EventList from './scenes/EventList';


class MeetupRN extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: EventList,
          title: 'Events',
        }}
        style={{ 'flex': 1 }}
      />
    );
  }
}

AppRegistry.registerComponent('MeetupRN', () => MeetupRN);
