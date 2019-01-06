import React, { Component } from 'react';
import FixedTransparentNavbar from '../components/fixedTransparentNavbar';
import DashboardSection from '../components/dashboardSection';

class DashboardPage extends Component {
  render() {
    return (
        <div className="flexible-content">
            <FixedTransparentNavbar />
            <DashboardSection />
        </div>
    );
  }
}

export default DashboardPage;
