import React from 'react';
import SkyLight from 'react-skylight';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class NavBar extends React.Component {
  render() {
    const myDialog = {
      height: '450px'
    }
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" id="logo-header" className="brand-logo ubuntu"><font color="#FFCF09">Im</font>pronto</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="list-Item ubuntu"><a href="/events">Events</a></li>
              <li className="list-Item ubuntu"><a href="#howItWorks">How it Works</a></li>
              <li className="list-Item ubuntu"><a href="/support">Support</a></li>
              <li className="list-Item ubuntu"><a href="/addevent">Add Event</a></li>
              <li>
                <button
                  className="waves-effect waves-light btn"
                  onClick={ () => this.refs.simpleDialog.show() }>Log In
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <SkyLight dialogStyles={myDialog} hideOnOverlayClicked ref="simpleDialog" title="">
          <Blaze template="LogInModal" />
        </SkyLight>
      </div>
    );
  }
}
