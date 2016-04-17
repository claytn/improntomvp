import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import HomePageWrapper from './HomePage/HomePageWrapper.jsx';
import EventsPageWrapper from './EventsPage/EventsPageWrapper';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<HomePageWrapper/>)
    })
  }
});


FlowRouter.route('/events', {
  action() {
    mount(MainLayout, {
      content: (<EventsPageWrapper/>)
    })
  }
});
