import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-light bg-faded navbar-fixed-top">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/howitworks">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addevent">Add Event</a>
            </li>
            <li className="nav-item">
              <AccountsUI />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
