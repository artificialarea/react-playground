import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // req. npm install
import './index.css';

// import App from './App'; // [v1—5] exercises
// import App from './paltrows-power-toes/App'; // [v6] RouteRouter exercise
// import App from './govuk-api-demonym/App'; // [v7] API+Promises exercise
// import App from './lang-context/App'; // [v8] Context exercise
// import App from './MouseTracker/MouseTrackerApp'; // [v9] Render Props (MouseTracker)
import App from './registrationForm/RegistrationFormApp'; // [v10] Form Validation

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
// [v9] Render Props (MouseTracker)
// per: https://reactjs.org/docs/render-props.html
//
// [v10] Forms + Validation (RegistrationForm)
// per: https://courses.thinkful.com/react-v1/checkpoint/17
//
//////////////////////////////////////////////////////////

