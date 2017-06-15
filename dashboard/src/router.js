import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ReportDailySupervisions from "./routes/ReportDailySupervisions.js";

import ChartsDemo from "./routes/ChartsDemo.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/reportDailySupervisions" component={ReportDailySupervisions} />
      <Route path="/ChartsDemo" component={ChartsDemo} />
    </Router>
  );
}

export default RouterConfig;
