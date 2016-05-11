import React from 'react';

export default class EventSingle extends React.Component {

  deleteEvent() {
    Meteor.call('deleteEvent', this.props.event);
  }
  render() {
    return(
      <li className="collection-item">
        <div className="row">
          <div className="col s12">
            <div className="image-container col s2"><img src="http://placehold.it/80x80" className="circle"/></div>
              <div className="info-container col s8">
                <h5 className="event-title">{this.props.event.text}</h5>
                <p className="event-des">
                  <span className="label label-pill label-default"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment().format('LLLL')}<br /><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.event.loc}</span>
                </p>
                <p className="event-des">{this.props.event.des}</p>
                <p className="badge event-des">{this.props.event.type} | {this.props.event.nop} | {this.props.event.price}</p>
              </div>
              <div className="button-container col s2">
                <button className="waves-effect waves-light btn red lighten-1">RSVP</button>
              </div>
          </div>
        </div>
      </li>
    )
  }
}

//
// <li className="event-item">
//   <div className="row">
//     <div className="col s10">
//       <div className="image-container col s2">
//         <img src="http://placehold.it/150x203" />
//       </div>
//       <div className="info-container col s8">
//         <p>{this.props.event.text}</p>
//         <p>{this.props.event.des}</p>
//         <h5>
//           <span className="label label-pill label-default"><i className="fa fa-clock-o" aria-hidden="true"></i> {moment().format('LLLL')} | <i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.event.loc}</span>
//         </h5>
//         <h5>
//           <span className="badge">{this.props.event.type}</span>
//           <span className="badge">{this.props.event.nop}</span>
//           <span className="badge">{this.props.event.price}</span>
//         </h5>
//       </div>
//       <div className="button-container col s2">
//         <button className="waves-effect waves-light btn red lighten-1">RSVP</button>
//       </div>
//     </div>
//   </div>
// </li>
