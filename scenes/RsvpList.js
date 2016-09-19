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
    yesCount: PropTypes.number.isRequired,
  }

  componentWillMount() {
    getRsvps(this.props.eventId)
      .then(people => this.setState({ people }));
  }

  render() {
    const { people } = this.state;
    const { yesCount } = this.props;
    const numHosts = people.filter(person => person.member.event_context.host === true).length;

    const attendeeList = (isHost) => people
      .filter(person => person.member.event_context.host === isHost)
      .map(person =>
        <View key={person.member.id} style={styles.attendeeContainer}>
          {!!person.member.photo
            ? <Image // if we have a photo property and it's not empty, display the image
                style={styles.attendeeThumb}
                source={{ uri: person.member.photo.thumb_link }}
              />
            : <Image // otherwise display the anonymous avatar
                style={styles.attendeeThumb}
                source={require('../assets/images/noPhoto.png')}
              />
          }
          <View style={{ flex: 1 }}>
            <Text style={styles.attendeeName}>{person.member.name} {person.guests ? `(+${person.guests})` : ''}</Text>
            {isHost ? <Text style={styles.attendeeBio}>EVENT HOST</Text> : null}
            {!isHost && person.member.bio
              ? <Text numberOfLines={1} style={styles.attendeeBio}>{person.member.bio}</Text>
              : null
            }
          </View>
        </View>
      );

    return (
      <View style={styles.container}>
        <ScrollView style={styles.eventList}>
          <Text style={styles.header}>{this.props.eventName}</Text>
          <Text style={styles.headerTwo}>{`${numHosts} HOSTING`}</Text>
          <View style={styles.attendeeOuter}>{attendeeList(true)}</View>
          <Text style={styles.headerTwo}>{`${yesCount - numHosts} GOING`}</Text>
          <View style={styles.attendeeOuter}>{attendeeList(false)}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  attendeeOuter: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  attendeeContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#bbb',
    paddingHorizontal: 10,
  },
  attendeeThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 8,
    marginVertical: 4,
  },
  attendeeName: {
    fontSize: 16,
  },
  attendeeBio: {
    fontSize: 13,
    color: '#888',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  headerTwo: {
    color: '#777',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 14,
    marginBottom: 2,
  },
});
