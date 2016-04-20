import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SideNavBar from '../layouts/SideNavBar';
import EventSingle from './EventSingle.jsx';
Events = new Mongo.Collection('events');
export default class EventsPageWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        events: Meteor.subscribe("displayEvents")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.events.stop();
  }

  events() {
    // create find() queries based on tag, day, numofppl when button is pressed
    // Events.find( { type: 'Fitness' } );
    return Events.find().fetch();
  }

  render() {
    return(
      <div className="events-container">
        <div className="side-nav-container">
          <SideNavBar />
        </div>
        <div className="events-container">
          <ul className="events">
            {this.events().map( (event)=> {
              return <EventSingle key={event._id} event={event} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}
