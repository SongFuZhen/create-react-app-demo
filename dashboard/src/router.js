import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ReportDailySupervisions from "./routes/ReportDailySupervisions.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/reportDailySupervisions" component={ReportDailySupervisions} />
    </Router>
  );
}

export default RouterConfig;
