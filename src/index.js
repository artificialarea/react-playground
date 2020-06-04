import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // req. npm install
import './index.css';

// import App from './App'; // [v1—5] exercises
// import App from './paltrows-power-toes/App'; // [v6] RouteRouter exercise
// import App from './govuk-api-demonym/App'; // [v7] API+Promises exercise
import App from './lang-context/App'; // [v8] Context.Consumer & [v10] Context.Provider exercises 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);


//////////////////////////////////////////////////////////
//
// [v6] React Router
// per: https://courses.thinkful.com/react-v1/checkpoint/14#setting-up-react-router
// src: https://github.com/tomatau/paltrows-power-toes
//
// [v7] API Requests
// per: https://courses.thinkful.com/react-v1/checkpoint/13
//
// [v8] Creating and Reading Context
// per: https://courses.thinkful.com/react-v1/checkpoint/15
//
//
//
//
// [v10] Updating Context
// per: https://courses.thinkful.com/react-v1/checkpoint/16
//
//////////////////////////////////////////////////////////

