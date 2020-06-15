import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language, // [fn1]
  setLang: () => {
    // ^^^ puting an updater function in place
    // to serve as placeholder for GreatGrandChild... to give it shape.
    // in programming, this concept is appropriately called a "contract"

    // later, via the value set by Context.Provider (line 25 >> line 18)
    // the updater function 'setLang' 
    // will be re-defined by 'handleSetLang' in App.js (line 12)
  }
})

export default LanguageContext


// [footnotes]
// [fn1]
// in Web Dev Console type 'window.navigator.language' to print what language the current browswer is set to.