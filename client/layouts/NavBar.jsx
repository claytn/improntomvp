import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
      

  <nav class="navbar navbar-light bg-faded">
  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
    &#9776;
  </button>
  <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
    <a class="navbar-brand" href="#">Impronto</a>
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/events">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/howitworks">How It Works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/support">Support</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addevent">Add Event</a>
      </li>
      <li className="nav-item">
        <AccountsUI />
      </li>

    </ul>
  </div>
</nav>
      </div>
    );
  }
}
