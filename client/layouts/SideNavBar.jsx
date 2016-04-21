import React from 'react';

export default class SideNavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "All"
    };
  }

  handleChange(event) {
    this.setState({filter: event.target.value});
  }

  render() {
    return(
      <div>
        <h5 className="side-nav-item-text">activity filter</h5>
        <br />
        <h5 className="side-nav-item-text">day</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" value="All" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>All</button></li>
          <li className="side-nav-item"><button type="button" value="Sunday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Sun</button></li>
          <li className="side-nav-item"><button type="button" value="Monday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Mon</button></li>
          <li className="side-nav-item"><button type="button" value="Tuesday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Tues</button></li>
          <li className="side-nav-item"><button type="button" value="Wednesday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Wed</button></li>
          <li className="side-nav-item"><button type="button" value="Thursday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Thurs</button></li>
          <li className="side-nav-item"><button type="button" value="Friday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Fri</button></li>
          <li className="side-nav-item"><button type="button" value="Saturday" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Sat</button></li>
        </ul>
        <h5 className="side-nav-item-text">type</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" value="All" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>All</button></li>
          <li className="side-nav-item"><button type="button" value="Fitness" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Fitness</button></li>
          <li className="side-nav-item"><button type="button" value="FoodAndDrink" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Food & Drink</button></li>
          <li className="side-nav-item"><button type="button" value="Beauty" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Beauty</button></li>
          <li className="side-nav-item"><button type="button" value="Games" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Games</button></li>
          <li className="side-nav-item"><button type="button" value="Movies" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Movies</button></li>
          <li className="side-nav-item"><button type="button" value="Art" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Art</button></li>
          <li className="side-nav-item"><button type="button" value="Shows" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>Shows</button></li>
        </ul>
        <h5 className="side-nav-item-text">num of ppl</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" value="All" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>All</button></li>
          <li className="side-nav-item"><button type="button" value="fourfive" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>4-5</button></li>
          <li className="side-nav-item"><button type="button" value="sixeight" className="btn btn-default btn-xs" onClick={this.handleChange.bind(this)}>6-8</button></li>
        </ul>
      </div>
    );
  }
}
