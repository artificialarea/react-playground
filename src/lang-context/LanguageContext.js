import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language // [fn1]
})

export default LanguageContext


// [footnotes]
// [fn1]
// in Web Dev Console type 'window.navigator.language' to print what language the current browswer is set to.