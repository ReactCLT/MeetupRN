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
          title: 'ReactJS Events',
        }}
        style={{ 'flex': 1 }}
        barTintColor='#ed1c40'
        titleTextColor='white'
        tintColor='white'
      />
    );
  }
}

AppRegistry.registerComponent('MeetupRN', () => MeetupRN);
