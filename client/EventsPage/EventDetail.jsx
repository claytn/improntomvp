import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class EventDetail extends TrackerReact(React.Component) {
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

  event() {
    return Events.findOne(this.props.id);
  }

  render() {
    let ev = this.event();

    if (!ev) {
      return (<div>Loading..</div>);
    }

    return(
      <div>
        <h1>{ev.text}</h1>
      </div>
    )
  }
}
