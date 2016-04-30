import React from 'react';
import SkyLight from 'react-skylight';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-light navbar-fixed-top">
          <a className="navbar-brand ubuntu white" id="logoHeader" href="/"><span className="yellow">Im</span>pronto</a>
          <button className="navbar-toggler hidden-sm-up pull-right" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <ul className="nav navbar-nav" id="navList">
              <li className="nav-item listItem">
                <a className="nav-link white ubuntu" href="/events"><span className="boost">Events</span></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white ubuntu" href="#howItWorks"><span className="boost">How It Works</span></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white ubuntu" href="/support"><span className="boost">Support</span></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white ubuntu" href="/addevent"><span className="boost">Add Event</span></a>
              </li>
              <li className="nav-item">
                <button className="btn btn-secondary-outline" onClick={()=> this.refs.simpleDialog.show()}>Log In</button>
              </li>
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
