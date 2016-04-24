import React from 'react';

export default class EventsForm extends React.Component {

  addEvent(e) {
    e.preventDefault();
    var text = this.refs.event.value.trim();
    var time = this.refs.time.value.trim();
    var loc = this.refs.loc.value.trim();
    var des = this.refs.des.value.trim();
    var day = this.refs.day.value.trim();
    var type = this.refs.type.value.trim();
    var nop = this.refs.nop.value.trim();
    var price = this.refs.price.value.trim();
    if (text, time) {
      Meteor.call('addEvent', text, time, loc, des, day, type, nop, price, (error, data)=> {
        if (error) {
          Bert.alert('Please log in before submitting an event', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.event.value = "";
          this.refs.time.value = "";
          this.refs.loc.value = "";
          this.refs.des.value = "";
          this.refs.day.value = "";
          this.refs.type.value = "";
          this.refs.nop.value = "";
          this.refs.price.value = "";
        }
      });
    }
  }

  render() {
    return(
      <div className="col-md-6 col-md-offset3 event-div">
        <form className="new-event">
          <div className="form-group">
            <input type="text" ref="event" className="form-control" id="addEventName" placeholder="Name of event" />
            <input type="text" ref="day" className="form-control" id="addEventDay" placeholder="Day of event" />
            <input type="text" ref="type" className="form-control" id="addEventType" placeholder="Type of event" />
            <input type="text" ref="nop" className="form-control" id="addEventNumOfPpl" placeholder="Num of ppl allowed at event" />
            <input type="text" ref="time" className="form-control" id="addEventTime" placeholder="Time of event" />
            <input type="text" ref="loc" className="form-control" id="addEventLoc" placeholder="Location of event" />
            <input type="text" ref="des" className="form-control" id="addEventDes" placeholder="Description of event" />
            <input type="text" ref="price" className="form-control" id="addEventPrice" placeholder="Price of event" />
            <button className="btn btn-default" onClick={this.addEvent.bind(this)}>Add Event</button>
          </div>
        </form>
      </div>
    );
  }
}
