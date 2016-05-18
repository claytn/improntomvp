import React, { Component, PropTypes } from 'react';

export default class RSVP extends Component {
  render() {
    return(<div>
    <div id="mainContainer" className="container-fluid">
      <div className="mainContent">
        <div className="row need-space introContainer">
          <div className="titleSize">
            <h4 className="muli taglineTwo center-align">
              <font color="#FFFFFF"><strong>Thank you {this.props.name} for using impronto! We can't wait to see you at {this.props.event}</strong></font>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" className="container-fluid">

        <p className="muli right"> Icons designed by <a href="http://www.freepik.com/">Freepik</a></p>

    </div>
  </div>
    );
  }
};

RSVP.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
};
