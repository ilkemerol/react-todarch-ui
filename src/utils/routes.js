import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage';
import DashboardPage from '../pages/dashboardPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    );
  }
}

export default Routes;