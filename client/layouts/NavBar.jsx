import React from 'react';
import SkyLight from 'react-skylight';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/events">events</a></li>
              <li><a href="#howItWorks">how it works</a></li>
              <li><a href="/support">support</a></li>
              <li><a href="/addevent">add event</a></li>
              <li><button className="waves-effect waves-light btn" onClick={()=> this.refs.simpleDialog.show()}>Log In</button></li>
            </ul>
          </div>
        </nav>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Impronto">
          <Blaze template="LogInModal" />
        </SkyLight>
      </div>
    );
  }
}
