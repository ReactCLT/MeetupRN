const eventsUri = 'https://api.meetup.com/ReactJS-Charlotte/events?&sign=true&photo-host=public&page=20&status=cancelled,upcoming,past,proposed,suggested,draft'

export const getEvents = () => fetch(eventsUri).then(res => res.json());
