import React from 'react'
import './App.css'
import CountrySelector from './CountrySelector'
import Demonym from './Demonym'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null,
    };
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data); 
        const countries = Object.keys(data)
          .map(key => (
            data[key].item[0]
          ))
        // console.log(countries); // dunno why the country list is not alphabetized like it is in inital data array? 

        this.setState({
          countries // aka 'countries': countries
        })
      })
      .catch(err => {
        console.log(err.message);
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected // aka selected:selected
    });
  }

  render() {

    const demon = this.state.selected
      ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
      : <div className="demonym demonym_app__placeholder">Select a country above</div>

    const error = this.state.error
      ? <div className="demonym demonym_app__error">{this.state.error}</div>  
      : '';

    return (
      <div className="App">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
        />
        {demon}
      </div>
    )
  }
}