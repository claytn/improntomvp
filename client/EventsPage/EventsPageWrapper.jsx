import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EventSingle from './EventSingle.jsx';
Events = new Mongo.Collection('events');

export default class EventsPageWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        events: Meteor.subscribe("displayEvents")
      },
      filter: ''
    }
  }

  componentWillUnmount() {
    this.state.subscription.events.stop();
  }

  handleChange(e) {
    this.setState({filter: e.target.value});
  }

  // handle a user signing up for an event

  events() {
    let filter = this.state.filter;
    switch (filter) {
      case 'Sunday':
        return Events.find( {day: 'Sunday'} );
        break;
      case 'Monday':
        return Events.find( {day: 'Monday'} );
        break;
      case 'Tuesday':
        return Events.find( {day: 'Tuesday'} );
        break;
      case 'Wednesday':
        return Events.find( {day: 'Wednesday'} );
        break;
      case 'Thursday':
        return Events.find( {day: 'Thursday'} );
        break;
      case 'Friday':
        return Events.find( {day: 'Friday'} );
        break;
      case 'Saturday':
        return Events.find( {day: 'Saturday'} );
        break;
      case 'Fitness':
        return Events.find( {type: 'Fitness'} );
        break;
      case 'FoodAndDrink':
        return Events.find( {type: 'FoodAndDrink'} );
        break;
      case 'Beauty':
        return Events.find( {type: 'Beauty'} );
        break;
      case 'Games':
        return Events.find( {type: 'Games'} );
        break;
      case 'Movies':
        return Events.find( {type: 'Movies'} );
        break;
      case 'Art':
        return Events.find( {type: 'Art'} );
        break;
      case 'Shows':
        return Events.find( {type: 'Shows'} );
        break;
      case 'fourfive':
        return Events.find( {nop: '4-5'} );
        break;
      case 'sixeight':
        return Events.find( {nop: '6-8'} );
        break;
      case 'Free':
        return Events.find( {price: 'Free'} );
      case 'Paid':
        return Events.find( {price: 'Paid'} );
      default:
        return Events.find().fetch();
    }
  }

  render() {
    return(
      <div id="event-page-container" className="col">
        <div className="side-nav-container">
          <p className="side-nav-item-text text-xs-center activity-filter">filter</p>
          <p className="side-nav-item-text text-xs-center">Day</p>
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <button type="button" value="All" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>All</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Sunday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Sunday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Monday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Monday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Tuesday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Tuesday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Wednesday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Wednesday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Thursday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Thursday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Friday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Friday</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Saturday" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Saturday</button>
            </li>
          </ul>
          <p className="side-nav-item-text text-xs-center">Type</p>
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <button type="button" value="All" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>All</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Fitness" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Fitness</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="FoodAndDrink" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Food & Drink</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Beauty" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Beauty</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Games" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Games</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Movies" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Movies</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Art" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Art</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Shows" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Shows</button>
            </li>
          </ul>
          <p className="side-nav-item-text text-xs-center">People</p>
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <button type="button" value="All" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>All</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="fourfive" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>4-5</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="sixeight" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>6-8</button>
            </li>
          </ul>
          <p className="side-nav-item-text text-xs-center">Price</p>
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <button type="button" value="All" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>All</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Paid" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Paid</button>
            </li>
            <li className="side-nav-item">
              <button type="button" value="Free" className="btn btn-default btn-sm btn-filter" onClick={this.handleChange.bind(this)}>Free</button>
            </li>
          </ul>
        </div>
        <div className="events-container">
          <ul className="events">
            {this.events().map( (event)=> {
              return <EventSingle key={event._id} event={event} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}
