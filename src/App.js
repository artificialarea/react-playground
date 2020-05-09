import React from 'react';
import './App.css';
import Splitz from './composition/Split';
import Tooltip from './composition/Tooltip';

//////////////////////////////////////////////////////////
//
// [v1] Component Composition exercise, 
// per: https://courses.thinkful.com/react-v1/checkpoint/6
//
// [v2] Default Props and Class Components exercise,
// per: https://courses.thinkful.com/react-v1/checkpoint/7
//
//////////////////////////////////////////////////////////

// make 2 tooltips here (and another inside the App directly)
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    IPSUM
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    OFFICIIS
  </Tooltip>
)


function App() {
  return (
    <main className='App'>
      <Splitz className='left' flexBasis={3}>
        This is the content for the left 'Split'. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia muthafucka?<p />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message (inline)'>
          Necessitatibus?
        </Tooltip><p />
      </Splitz>
      <Splitz className='right' flexBasis={2}>
        This is the content for the right 'Split'. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.Duis autem, innit?&nbsp;
      </Splitz>
    </main>
  );
}

export default App
