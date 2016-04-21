import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">impronto</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="main-nav-item"><a href="/">Home</a></li>
                <li className="main-nav-item"><a href="/events">Events</a></li>
                <li className="main-nav-item"><a href="/howitworks">How It Works</a></li>
                <li className="main-nav-item"><a href="/support">Support</a></li>
                <li className="main-nav-item"><a href="/addevent">Add Event</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li id="accounts-ui"> <button className="btn btn-warning"><AccountsUI /></button></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
