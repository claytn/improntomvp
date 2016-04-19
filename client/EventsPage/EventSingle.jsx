import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  render() {
    return(
      // <li className="event-item">
      //   <div className="row">
      //     <div className="col-md-8 col-md-offset-2" id="event-container">
      //       <div className="col-md-3">
      //         <img src="http://placehold.it/150x203" />
      //       </div>
      //       <div className="col-md-7">
      //         <div className="">
      //           <p>{this.props.event.text}</p>
      //           <p>{this.props.event.day}</p>
      //           <p><span className="label label-warning">{this.props.event.type}</span></p>
      //           <p><span className="label label-warning">{this.props.event.nop}</span></p>
      //           <p><span className="label label-warning">{this.props.event.time}</span></p>
      //           <p><span className="label label-warning">{this.props.event.loc}</span></p>
      //           <p>{this.props.event.des}</p>
      //         </div>
      //       </div>
      //       <div className="col-md-2">
      //         <button type="button" className="btn btn-primary btn-sm">Reserve a spot</button>
      //       </div>
      //     </div>
      //     <button className="btn btn-danger" onClick={this.deleteEvent.bind(this)}>&times;</button>
      //   </div>
      // </li>
      <li className="event-item">
        <div className="event-single-container">
          <div className="event-picture">
            <img src="http://placehold.it/150x203" />
          </div>
          <div className="event-information">
            <p>{this.props.event.text}</p>
            <p>{this.props.event.day}</p>
           <p><span className="label label-warning">{this.props.event.type}</span></p>
           <p><span className="label label-warning">{this.props.event.nop}</span></p>
           <p><span className="label label-warning">{this.props.event.time}</span></p>
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
