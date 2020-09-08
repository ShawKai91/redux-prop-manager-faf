import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import HeaderWraper from './components/headerWrapper';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
        <HeaderWraper>
          <Route path='/' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
        </HeaderWraper>
      </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
