import React from 'react';
import SectionOneWrapper from './SectionOne/SectionOneWrapper.jsx';
import SectionTwoWrapper from './SectionTwo/SectionTwoWrapper.jsx';
import SectionThreeWrapper from './SectionThree/SectionThreeWrapper.jsx';
import Footer from './Footer.jsx';

export default class HomePageWrapper extends React.Component {
  render() {
    return(
      <div>
        <h1>Impronto Home Page</h1>
        <SectionOneWrapper/>
        <SectionTwoWrapper/>
        <SectionThreeWrapper/>
        <Footer/>
      </div>
    );
  }
}
