import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  render() {
    return(
      <li className="event-item">
        <div className="event-single-container">
          <div className="event-picture-div">
            <img className="event-picture" src="http://placehold.it/150x203" />
          </div>
          <div className="event-information">
            <p>{this.props.event.text}</p>
            <p>{this.props.event.des}</p>
            <h5>
              <span className="label label-pill label-default"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment().format('LLLL')} | <i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.event.loc}</span>
            </h5>

            <h5>
              <span className="label label-pill label-warning needs-tab">{this.props.event.type}</span>
              <span className="label label-pill label-primary needs-tab">{this.props.event.nop}</span>
              <span className="label label-pill label-info needs-tab">{this.props.event.price}</span>
            </h5>
          </div>
          <div className="event-buttons">
            <button type="button" className="btn btn-success btn-sm btn-reserve">Reserve a spot</button>
          </div>
        </div>
      </li>
    )
  }
}
