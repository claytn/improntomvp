import React from 'react';
import moment from 'meteor/momentjs:moment';

export default class EventSingle extends React.Component {

  // let time = moment().format('LLLL');

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  render() {
    return(
      /* All on one line
      label-default - grey
      label-primary - blue
      label-success - green
      label-info - baby blue
      label-warning - orange
      label-danger - red
        Idea: Maybe a container with seperate containers for each label
        Clock, Day, Month, Date # | Time in gray label
        Free in yellow label
        Type in pink label
        limited to max num of people in purple label
      */
      /*
        Description below the one line
      */
      /*
        Green button 'Reserve a spot' to the right of all of this
      */
      <li className="event-item">
        <div className="event-single-container">
          <div className="event-picture-div">
            <img className="event-picture" src="http://placehold.it/150x203" />
          </div>
          <div className="event-information">
            <p>{this.props.event.text}</p>

            <span className="label label-default"><span className="glyphicon glyphicon-time" aria-hidden="true"></span>{this.props.event.day} | {this.props.event.time}</span>
            <p><span className="label label-warning">{this.props.event.type}</span></p>
            <p><span className="label label-warning">{this.props.event.nop}</span></p>
            <p><span className="label label-warning"></span></p>
            <p><span className="label label-warning">{this.props.event.loc}</span></p>
            <p>{this.props.event.des}</p>
          </div>
          <div className="event-buttons">
            <button type="button" className="btn btn-primary btn-sm">Reserve a spot</button>
            <button className="btn btn-danger" onClick={this.deleteEvent.bind(this)}>&times;</button>
          </div>
        </div>
      </li>
    )
  }
}
