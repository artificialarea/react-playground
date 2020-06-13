import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language, // [fn1]
  setLang: () => {
    // ^^^ puting an updater function in place
    // to serve as placeholder for GreatGrandChild
    // in programming, this concept is appropriately called a "contract"
  },
})

console.log("LanguageContext lang: " + window.navigator.language + " ...so why on page load is lang initially returning as 'undefined' elsewhere? (thus, the need for || {} as a safety net)");

export default LanguageContext


// [footnotes]
// [fn1]
// in Web Dev Console type 'window.navigator.language' to print what language the current browswer is set to.