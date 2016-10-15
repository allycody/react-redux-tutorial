import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import MenuContainer from './containers/MenuContainer';
import PlateContainer from './containers/PlateContainer';
import './index.css';

//todo: set MenuContainer and PlateContainer as children of "/" as "/menu" and "/plate", respectively
//todo: set MenuContainer as the default child route (or *IndexPath*) of "/"

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
      	<IndexRoute component={AppContainer}/>
      	<Route path="menu" component={MenuContainer} />
      	<Route path="plate" component={PlateContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
