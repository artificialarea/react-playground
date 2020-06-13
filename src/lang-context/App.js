import React, { Component } from "react"
import Child from './Child'
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: window.navigator.language
    };
  }

  handleSetLang = (lang) => {
    this.setState({ lang })
  };

  render() {

    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang, // forGreatGrandChild, implementing updater callback function using state. Dunno what it all means, tho. Just blindly following orders.
    }

    return (
      <LanguageContext.Provider
        value={contextValue}
      >
        <div className='AppLang'>
          <LangControls 
            onSetLang={this.handleSetLang}/>
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}