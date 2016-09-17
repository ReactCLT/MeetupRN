import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RsvpList from './RsvpList';
import { getEvents } from '../helpers/api';


export default class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.goToEvent = this.goToEvent.bind(this);
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  componentWillMount() {
    getEvents().then(events => this.setState({ events }));
  }

  goToEvent(event) {
    this.props.navigator.push({
      component: RsvpList,
      title: 'Attendees',
      passProps: {
        eventId: event.id,
        eventName: event.name,
      },
    });
  }

  render() {
    const { events } = this.state;
    const eventList = events.map(item => {
      return (
        <TouchableOpacity key={item.id} onPress={() => this.goToEvent(item)}>
          <View style={{ 'height': 150 }}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MeetupRN!
        </Text>
        <ScrollView style={styles.eventList}>
          {eventList}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#F5FCFF',
  },
  eventList: {
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
