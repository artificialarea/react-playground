import React from 'react'
import './CountrySelector.css'

export default class CountrySelector extends React.Component {

  changeSelection(value) {
    if (value === "None") {
      this.props.changeHander(null);
    } else {
      const country = this.props.countries.find(country => country.name === value);
      this.props.changeHandler(country);
      console.log(country);
    }
  }

  render() {

    const options = this.props.countries
      .map((country, i) => 
        <option value={country.name} key={i}>{country.name}</option>
      );

    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a Country:</label>
          <select 
            id="country" 
            name="country" 
            onChange={(event) => this.changeSelection(event.target.value)}>
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

CountrySelector.defaultProps = {
  countries: []
};