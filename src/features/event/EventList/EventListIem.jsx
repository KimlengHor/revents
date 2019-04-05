import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListIem extends Component {
  render() {
    const { theEvent, onEventOpen, deleteEvent } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={theEvent.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{theEvent.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{theEvent.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {theEvent.date} |
            <Icon name="marker" /> {theEvent.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {theEvent.attendees &&
              theEvent.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} theAttendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{theEvent.description}</span>
          <Button
            onClick={deleteEvent(theEvent.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />

          <Button
            onClick={onEventOpen(theEvent)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListIem;
