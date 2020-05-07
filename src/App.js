import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
      {/* <Split />
      <br />
      <Split /> */}
      <Split>
        This is the content for the left 'Split'. Lorem ipsum muthafucka.
      </Split>
      <Split>
        This is the content for the right 'Split'. Duis autem, innit?
      </Split>

    </main>
  );
}

export default App;
