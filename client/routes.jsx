import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import HomePageWrapper from './HomePage/HomePageWrapper.jsx';
import EventsPageWrapper from './EventsPage/EventsPageWrapper';
import TestEventsPageWrapper from './EventsPage/TestEventsPageWrapper.jsx';
import EventDetail from './EventsPage/EventDetail.jsx';
import SupportPageWrapper from './SupportPage/SupportPageWrapper.jsx';
import HowItWorks from './HowItWorksPage/HowItWorks.jsx';
import EventsForm from './EventsPage/EventsForm.jsx'


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

FlowRouter.route('/testevents', {
  action() {
    mount(MainLayout, {
      content: (<TestEventsPageWrapper />)
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
