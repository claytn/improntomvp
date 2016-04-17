import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }

  render() {
    return(
      <li>
        {this.props.event.text}
        <button className="btn-cancel" onClick={this.deleteEvent.bind(this)}>&times;</button>
      </li>
    )
  }
}
