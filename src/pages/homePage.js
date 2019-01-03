import React, { Component } from 'react';
import FixedTransparentNavbar from '../components/fixedTransparentNavbar';
import FullPageIntro from '../components/fullPageIntro';
import MainSection from '../components/mainSection';
import FlipCard from '../components/cardSection';

class HomePage extends Component {
  render() {
    return (
      <div className="flexible-content">
          <FixedTransparentNavbar />
          <FullPageIntro />
          <MainSection />
          <FlipCard />
        </div>
    );
  }
}

export default HomePage;
