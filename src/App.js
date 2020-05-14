import React from 'react';
import './App.css';
import Splitz from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './messages/Messages.js';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

//////////////////////////////////////////////////////////
//
// [v1] Component Composition exercise, 
// per: https://courses.thinkful.com/react-v1/checkpoint/6
//
// [v2] Default Props and Class Components exercise,
// per: https://courses.thinkful.com/react-v1/checkpoint/7
//
// [v3] Intro to Testing,
// per: https://courses.thinkful.com/react-v1/checkpoint/8
//
// [v4] React State,
// per: https://courses.thinkful.com/react-v1/checkpoint/9
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

      <div className="containCounter">
        <Counter />
      </div>

      <div className="containTheDate">
        <TheDate />
      </div>

      <div className="containMessages">
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </div>

      <div className="containSplitz">
        <Splitz className='left' flexBasis={3}>
          This is the content for the left 'Split'. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia muthafucka?<p />
          {/* make another tooltip directly inside the App */}
          <Tooltip message='one more tooltip message (inline)'>
            Necessitatibus?
          </Tooltip><p />
        </Splitz>
        <Splitz className='right' flexBasis={2}>
          This is the content for the right 'Split'. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.Duis autem, innit?&nbsp;<p />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a><br />
        </Splitz>
      </div>
      
    </main>
    // <div>This does not belong here</div> // throw error for smoke test
  );
}

export default App
