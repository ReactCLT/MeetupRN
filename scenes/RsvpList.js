import React, { Component, PropTypes } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getRsvps } from '../helpers/api';


export default class RsvpList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  static propTypes = {
    eventId: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  componentWillMount() {
    getRsvps(this.props.eventId)
      .then(people => this.setState({ people }));
  }

  render() {
    const { people } = this.state;
    const attendeeList = people.map(person =>
      <View key={person.member.id}>
        {!!person.member.photo // if we have a photo property and it's not empty, display the image
          ? <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: person.member.photo.thumb_link }}
            />
          : null
        }
        <Text>{person.member.name}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.eventName}
        </Text>
        <ScrollView style={styles.eventList}>
          {attendeeList}
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
  attendeeList: {
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
