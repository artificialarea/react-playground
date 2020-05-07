import React from 'react';
import Splitz from './composition/Split';
import './App.css';

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
      {/* <Splitz />
      <Splitz /> */}
      <Splitz className='left' flexBasis={3}>
        This is the content for the left 'Split'. Lorem ipsum muthafucka.<p />
      </Splitz>
      <Splitz className='right' flexBasis={2}>
        This is the content for the right 'Split'. Duis autem, innit?
      </Splitz>

    </main>
  );
}

export default App;
