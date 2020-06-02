import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {

  // this gives us a new instance property: this.context
  static contextType = LanguageContext;

  render() {
    // const copy = languageSpecificCopy['en-US'] || {}  // [fn1]
    const copy = languageSpecificCopy[this.context.lang] || {}  
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild


// [footnotes]

// [fn1] || {} syntax 
// We're using an "or an empty object" logic when creating the copy constant with the syntax || {}. This is similar to defaultProps but languageSpecificCopy isn't a prop so we can't use defaultProps. Meaning, if we attempt to select a key inside the languageSpecificCopy object that doesn't exist, it could return undefined. If copy === undefined then when we attempt to do copy.title and copy.body, our app could throw errors as that could equate to undefined.title and undefined.body which won't work. The || {} is giving us a safety net to avoid dealing with undefined and instead use an empty object in the worst case; {}.title and {}.body won't throw errors if the key doesn't exist in languageSpecificCopy.