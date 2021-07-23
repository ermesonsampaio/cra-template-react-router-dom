import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './pages/Home/index';
import { PageTwo } from './pages/Page2/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/page2" exact component={PageTwo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
