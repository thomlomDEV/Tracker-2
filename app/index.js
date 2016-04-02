import 'assets/robots.txt?output=robots.txt'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'containers/index'
import Dashboard from 'containers/dashboard'
import Stocks from 'containers/dashboard/stocks'
import Buy from 'containers/dashboard/buy'
import Pending from 'containers/dashboard/pending'
import Insights from 'containers/dashboard/insights'
import Settings from 'containers/dashboard/settings'
import History from 'containers/dashboard/history'
import NotFound from 'containers/not-found'

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <Route component={ Dashboard }>
        <IndexRoute component={ Stocks } />
        <Route path="/buy" component={ Buy } />
        <Route path="/pending" component={ Pending } />
        <Route path="/insights" component={ Insights } />
        <Route path="/settings" component={ Settings } />
        <Route path="/history" component={ History } />
      </Route>

      <Route path="*" component={ NotFound } />
    </Route>
  </Router>
), document.getElementById('app'))
