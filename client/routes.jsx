import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import HomePageWrapper from './HomePage/HomePageWrapper.jsx';
import EventsPageWrapper from './EventsPage/EventsPageWrapper';
import EventDetail from './EventsPage/EventDetail.jsx';
import SupportPageWrapper from './SupportPage/SupportPageWrapper.jsx';
import HowItWorks from './HowItWorksPage/HowItWorks.jsx';
import EventsForm from './EventsPage/EventsForm.jsx';
import RSVP from './RSVPPage/RSVP.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<HomePageWrapper />)
    })
  }
});


FlowRouter.route('/events', {
  action() {
    mount(MainLayout, {

      content: (<EventsPageWrapper />)
    })
  }
});

FlowRouter.route('/events/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<EventDetail id={params.id} />)
    })
  }
});

FlowRouter.route('/support', {
  action() {
    mount(MainLayout, {
      content: (<SupportPageWrapper />)
    })
  }
});

FlowRouter.route('/howitworks', {
  action() {
    mount(MainLayout, {
      content: (<HowItWorks />)
    })
  }
});

FlowRouter.route('/addevent', {
  action() {
    mount(MainLayout, {
      content: (<EventsForm />)
    })
  }
});

FlowRouter.route('/rsvp/:event/:name',{
  action(params){
    mount(MainLayout, {
      content: (<RSVP event={params.event} name={params.name}/>)
    });
    Meteor.call('sendRSVPEmail',params.name,params.event);
  }
});
