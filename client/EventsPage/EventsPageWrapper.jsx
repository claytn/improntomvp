import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import EventsForm from './EventsForm.jsx';
import EventSingle from './EventSingle.jsx';

Events = new Mongo.Collection("events");

export default class EventsPageWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        events: Meteor.subscribe("userEvents")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.events.stop();
  }

  events() {
    return Events.find().fetch();
  }

  render() {
    return(
      <div>
        <EventsForm />
        <ul className="events">
          {this.events().map( (event)=> {
            return <EventSingle key={event._id} event={event} />
          })}
        </ul>
      </div>
    );
  }
}
