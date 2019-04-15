import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './../App'
import Demo from './../Demo'
import NotFound from './../NotFound'

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/demo/" component={Demo} />
        <Route path="/not/" component={NotFound} />
      </div>
    </Router>
  )
}

export default AppRouter;
