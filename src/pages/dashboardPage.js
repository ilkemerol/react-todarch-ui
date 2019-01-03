import React, { Component } from 'react';
import FixedTransparentNavbar from '../components/fixedTransparentNavbar';
import MainSection from '../components/mainSection';

class DashboardPage extends Component {
  render() {
    return (
        <div className="flexible-content">
            <FixedTransparentNavbar />
            <MainSection />
        </div>
    );
  }
}

export default DashboardPage;
