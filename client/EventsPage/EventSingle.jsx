import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  //{this.props.event.text}
  render() {
    return(
      <li className="event-item">
        <div className="row">
          <div className="col-md-4 col-md-offset-4" id="event-container">
            {this.props.event.text}
            <br />
            {this.props.event.time}
            <br />
            {this.props.event.loc}
            <br />
            {this.props.event.des}
          </div>
          <button className="btn btn-danger" onClick={this.deleteEvent.bind(this)}>&times;</button>
        </div>
      </li>
    )
  }
}
