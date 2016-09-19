import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StatusBar,
  View,
} from 'react-native';
import EventList from './scenes/EventList';


class MeetupRN extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
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
      </View>
    );
  }
}

AppRegistry.registerComponent('MeetupRN', () => MeetupRN);
