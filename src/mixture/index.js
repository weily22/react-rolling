/**
 * @Author: Weily
 * @Date: 2019/4/9
 * @Description:
 * @Last Modified by: Weily
 * @Last Modified time: 2019/4/9
*/
import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import routes from './route';
import { createBrowserHistory } from 'history';
import App from './../components/App'
import Demo from './../components/Demo'
import NotFound from './../components/NotFound'

const history = createBrowserHistory();
const rootElement = document.getElementById('app');

// render((<Router routes={routes} history={history}/>), rootElement);
render((<Router history={history}>
  <Route path="/" exact component={App} />
  <Route path="/demo" exact component={Demo} />
  <Route path="/not" component={NotFound} />
</Router>), rootElement);



