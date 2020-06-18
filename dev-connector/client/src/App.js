import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from 'react-redux';
import store from './store';

import { Fragment } from "react";

const App = () => (
  <Provider store ={store}>
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <section className="container">
        <Switch>

        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
  
);
export default App;
