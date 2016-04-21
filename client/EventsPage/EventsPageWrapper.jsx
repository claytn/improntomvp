import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SideNavBar from '../layouts/SideNavBar';
import EventSingle from './EventSingle.jsx';
Events = new Mongo.Collection('events');
export default class EventsPageWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        events: Meteor.subscribe("displayEvents")

      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.events.stop();
  }

  events() {
    // let filter = SideNavBar.state.filter;
    // switch (filter) {
    //   case 'Sunday':
    //     return Events.find( {day: 'Sunday'} );
    //     break;
    //   case 'Monday':
    //     return Events.find( {day: 'Monday'} );
    //     break;
    //   case 'Tuesday':
    //     return Events.find( {day: 'Tuesday'} );
    //     break;
    //   case 'Wednesday':
    //     return Events.find( {day: 'Wednesday'} );
    //     break;
    //   case 'Thursday':
    //     return Events.find( {day: 'Thursday'} );
    //     break;
    //   case 'Friday':
    //     return Events.find( {day: 'Friday'} );
    //     break;
    //   case 'Saturday':
    //     return Events.find( {day: 'Saturday'} );
    //     break;
    //   case 'Fitness':
    //     return Events.find( {type: 'Fitness'} );
    //     break;
    //   case 'FoodAndDrink':
    //     return Events.find( {type: 'FoodAndDrink'} );
    //     break;
    //   case 'Beauty':
    //     return Events.find( {type: 'Beauty'} );
    //     break;
    //   case 'Games':
    //     return Events.find( {type: 'Games'} );
    //     break;
    //   case 'Movies':
    //     return Events.find( {type: 'Movies'} );
    //     break;
    //   case 'Art':
    //     return Events.find( {type: 'Art'} );
    //     break;
    //   case 'Shows':
    //     return Events.find( {type: 'Shows'} );
    //     break;
    //   case 'fourfive':
    //     return Events.find( {nop: '4-5'} );
    //     break;
    //   case 'sixeight':
    //     return Events.find( {nop: '6-8'} );
    //     break;
    //   default:
    //     return Events.find().fetch();
    // }
    return Events.find().fetch();
  }

  render() {
    return(
      <div className="events-container">
        <div className="side-nav-container">
          <SideNavBar />
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
