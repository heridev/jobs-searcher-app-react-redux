import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import JobPageList from './jobs/jobPageList';
import JobPageDetails from './jobs/jobPageDetails';
import HomePage from './home/homePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="jobs" component={JobPageList} />
    <Route path="jobs/:id" component={JobPageDetails} />
  </Route>
);
