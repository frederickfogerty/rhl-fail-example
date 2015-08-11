import React from 'react'
import { Router, Route } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import routes from './routes'
import { reduxRouteComponent } from 'redux-react-router'
import {Provider} from 'react-redux'
import {store} from './createStore'

const routeComponent = reduxRouteComponent(store);
export default (<Provider store={store}>
  {() =>
    <Router history={history}>
      <Route component={routeComponent}>
        {routes}
      </Route>
    </Router>
  }
</Provider>)
