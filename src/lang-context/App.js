import React, { Component } from "react"
import Child from './Child'
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'

export default class App extends Component {

  state = {
    lang: window.navigator.langauage  // why by default doesn't it detect browser set to 'en-US'?
  };

  handleSetLang = (lang) => {
    this.setState({ lang })
  };

  render() {

    const contextValue = {
      lang: this.state.lang
    }

    return (
      <LanguageContext.Provider
        value={contextValue}>
        <div className='AppLang'>
          <LangControls 
            onSetLang={this.handleSetLang}/>
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}