import React from 'react'
import LanguageContext from './LanguageContext'

// console.log(LanguageContext) // The two most important properties, which are React components, are Provider and Consumer. 

export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {/* {function renderProp() { */}
      {(value) => {
        console.log(value)
        return (
          <>
            <button
              disabled={value.lang === 'en-GB'}>
              British{' '}
              <span role='img' aria-label='en-GB'>🇬🇧</span>
            </button>
            {' '}
            <button
              disabled={value.lang === 'en-US'}>
              American{' '}
              <span role='img' aria-label='en-US'>🇺🇸</span>
            </button>
            {' '}
            <button
              disabled={value.lang === 'ko'}>
              Korean{' '}
              <span role='img' aria-label='ko'>🇰🇷</span>
            </button>
          </>
        )
      }}
    </LanguageContext.Consumer>
  );
}