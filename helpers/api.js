const eventsUri = 'https://api.meetup.com/ReactJS-Charlotte/events?&sign=true&photo-host=public&page=20&status=cancelled,upcoming,past,proposed,suggested,draft'
const rsvpUri = eventId => `https://api.meetup.com/ReactJS-Charlotte/events/${eventId}/rsvps?&sign=true&photo-host=secure&response=yes`;

const photoHeaders = { 'X-Meta-Photo-Host': 'secure' };

export const getEvents = () => fetch(eventsUri).then(res => res.json());
export const getRsvps = eventId => fetch(rsvpUri(eventId), { headers: photoHeaders }).then(res => res.json());
