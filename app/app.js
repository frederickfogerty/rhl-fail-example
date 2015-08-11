import React from 'react'
import { Router, Route } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import routes from './routes'
import { reduxRouteComponent } from 'redux-react-router'
import {Provider} from 'react-redux'
import {store} from './createStore'

export default (<Provider store={store}>
  {() =>
    <Router history={history}>
      <Route component={reduxRouteComponent(store)}>
        {routes}
      </Route>
    </Router>
  }
</Provider>)