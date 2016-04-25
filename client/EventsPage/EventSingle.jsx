import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  render() {
    return(
      <li className="event-item">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-2">
              <img src="http://placehold.it/150x203" />
            </div>
            <div className="col-md-8">
              <p>{this.props.event.text}</p>
              <p>{this.props.event.des}</p>
              <h5>
                <span className="label label-pill label-default"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment().format('LLLL')} | <i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.event.loc}</span>
              </h5>

              <h5>
                <span className="label label-pill label-warning">{this.props.event.type}</span>
                <span className="label label-pill label-primary">{this.props.event.nop}</span>
                <span className="label label-pill label-info">{this.props.event.price}</span>
              </h5>

            </div>
            <div className="col-md-2">
              <button type="button" className="btn btn-success btn-sm">Reserve a spot</button>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
