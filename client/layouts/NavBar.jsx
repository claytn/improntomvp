import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-light navbar-fixed-top">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand ubuntu white" id="logoHeader" href="/"><span className="yellow">Im</span>pronto</a>
            <ul className="nav navbar-nav" id="navList">
              <li className="nav-item listItem">
                <a className="nav-link" href="/events">Events</a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link" href="/howitworks">How It Works</a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link" href="/support">Support</a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link" href="/addevent">Add Event</a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link" href="#"><AccountsUI /></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
