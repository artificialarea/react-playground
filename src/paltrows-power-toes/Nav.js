import React, { Component } from 'react'
import Content from './Content'
import { Link } from 'react-router-dom' // [f1]
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'> {/* [f1] */}
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/workouts'>
          Workouts
        </Link>
      </Content>
    )
  }
}


// FOOTNOTES /////////////////////////////////////

// [f1]: Replacing <a href>s with <Link />
// we're not performing complete page loads anymore. React is only updating which components are rendered, even though the web address at the top of the browser is updating the path.