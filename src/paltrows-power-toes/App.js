import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import WorkoutsPage from './WorkoutsPage'
import NotFoundPage from './NotFoundPage'
import './App.css'

// [v6] React Router
// per: https://courses.thinkful.com/react-v1/checkpoint/14#setting-up-react-router
// src: https://github.com/tomatau/paltrows-power-toes

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/workouts' component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
