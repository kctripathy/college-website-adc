import React from 'react';
import ReactDOM from 'react-dom';
import dontenv from 'dotenv';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

import ErrorBoundary from './components/commons/ErrorBoundary';
import MainApp from './components/pages/Main';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


Date.prototype.toShortFormat = function () {
  var month_names = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];

  var day = this.getDate();
  var month_index = this.getMonth();
  var year = this.getFullYear();

  return "" + day + "-" + month_names[month_index] + "-" + year.toString().substring(2, 4);
}


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <MainApp />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

