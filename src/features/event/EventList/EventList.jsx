import React, { Component } from 'react'
import EventListItem from './EventListIem'

class EventList extends Component {
  render() {
    const {events} = this.props
    return (
      <div>
        <h1>Event List</h1>
        {events.map((event) => (
          <EventListItem key = {event.id} theEvent = {event} />
        ))}
      </div>
    )
  }
}

export default EventList
