# MeetupRN

I made this iOS React Native app for a talk at the ReactJS Charlotte meetup group: [React Native Up & Running](http://www.meetup.com/ReactJS-Charlotte/events/233610860/). It's a simple app--three components. It taps into Meetup's public API to display past and upcoming ReactJS Charlotte events, and the user can tap on an event to see event hosts and those who RSVP'd with a "yes."

## Components

* index.io.js: Where it all starts. This houses the NavigatorIOS component, which helps us navigate through our app.
* EventList: Lists the events and related data.
* RsvpList: Lists event hosts and RSVP'd attendees.
* api.js (helper): Takes care of fetching the data from the Meetup API.

## Commits (for following along/seeing progress)

1. 9354567: Initial commit (after initializing a new, blank React Native app).
1. 5fecde1: Adding ScrollView.
1. 028b779: Hit Meetup API to get list of ReactJS events and display.
1. f5802cd: Add NavigatorIOS for routing/navigation bar and get Event attendees names and photos.
1. 6ea2cf6: Adding styles and more content.
1. bde2b50: Additional styles.
1. 31e70e1: Make iOS status bar text color white instead of black.
1. 4c8087e: Fixing Xcode issues and running on device.
1. 5e10214: Added appicon iconset for home screen icon.

## React Native Components Used

* [Text](https://facebook.github.io/react-native/docs/text.html)
* [View](https://facebook.github.io/react-native/docs/view.html)
* [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html)
* [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html)
* [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html)
* [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html)
* [StatusBar](https://facebook.github.io/react-native/docs/statusbar.html)

## Other Stuff Used

* [moment.js](http://momentjs.com/)
* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (built into JS now)

React out to Brandon Fancher [here](www.meetup.com/ReactJS-Charlotte/) if you have any questions or would like to connect.
