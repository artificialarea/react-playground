import React from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError' 

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Here are some currency values</h1>
        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US"/>
        </CurrencyError>
        <CurrencyError>
          USA: <Currency value={21} locale="en-US" currency="USD"/>
        </CurrencyError>
        <p>The currency values displayed are subject to change without notice.</p>
      </div>
    )
  }
}