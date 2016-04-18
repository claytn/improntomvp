import React from 'react';

export default class EventsForm extends React.Component {

  addEvent(e) {
    e.preventDefault();
    var text = this.refs.event.value.trim();
    var time = this.refs.time.value.trim();
    var loc = this.refs.loc.value.trim();
    var des = this.refs.des.value.trim();
    if (text, time) {
      Meteor.call('addEvent', text, time, loc, des, (error, data)=> {
        if (error) {
          Bert.alert('Please log in before submitting an event', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.event.value = "";
          this.refs.time.value = "";
          this.refs.loc.value = "";
          this.refs.des.value = "";
        }
      });
    }
  }

  render() {
    return(
      <div>
        <form className="new-event">
          <div className="form-group">
            <input type="text" ref="event" className="form-control" id="addEventName" placeholder="name of event" />
            <input type="text" ref="time" className="form-control" id="addEventTime" placeholder="time of event" />
            <input type="text" ref="loc" className="form-control" id="addEventLoc" placeholder="location of event" />
            <input type="text" ref="des" className="form-control" id="addEventDes" placeholder="description of event" />
            <button className="btn btn-default" onClick={this.addEvent.bind(this)}>Add Event</button>
          </div>
        </form>
      </div>
    );
  }
}
