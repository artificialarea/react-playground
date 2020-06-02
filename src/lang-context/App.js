import React, { Component } from "react"
import Child from './Child'
import LangControls from './LangControls'

export default class App extends Component {
  render() {
    return (
      <div className='AppLang'>
        <LangControls />
        <Child />
      </div>
    );
  }
}