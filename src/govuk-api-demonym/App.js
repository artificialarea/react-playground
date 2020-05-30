import React from 'react'
import './App.css'
import CountrySelector from './CountrySelector'
import Demonym from './Demonym'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <Demonym name="Barbadian" country="Barbados"/>
      </div>
    )
  }
}