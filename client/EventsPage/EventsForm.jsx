import React from 'react';

export default class EventsForm extends React.Component {

  addEvent(e) {
    e.preventDefault();
    var text = this.refs.event.value.trim();
    if (text) {
      Meteor.call('addEvent', text, (error, data)=> {
        if (error) {
          Bert.alert('Please log in before submitting an event', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.event.value = "";
        }
      });
    }
  }

  render() {
    return(
      <form className="new-event" onSubmit={this.addEvent.bind(this)}>
        <input type="text" ref="event" placeholder="Add Event Here" />
      </form>
    );
  }
}
