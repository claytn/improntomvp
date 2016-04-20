import React from 'react';

export default class EventSingle extends React.Component {

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
            <h4>
            <span className="label label-default"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment().format('LLLL')} | <i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.event.loc}</span>
            <span className="label label-warning needs-tab">{this.props.event.type}</span>
            <span className="label label-primary needs-tab">{this.props.event.nop}</span>
            </h4>
            <p>{this.props.event.des}</p>
          </div>
          <div className="event-buttons">
            <button type="button" className="btn btn-success btn-sm btn-reserve">Reserve a spot</button>
            <button className="btn btn-danger" onClick={this.deleteEvent.bind(this)}>&times;</button>
          </div>
        </div>
      </li>
    )
  }
}
