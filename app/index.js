import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'containers/index'
import Dashboard from 'containers/dashboard'
import NotFound from 'containers/not-found'

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Dashboard } />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>
), document.getElementById('app'))
