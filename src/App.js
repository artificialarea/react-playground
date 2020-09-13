import React from 'react';
import './App.css';
import Splitz from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './messages/Messages.js';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RussianRoulette from './state-drills/RussianRoulette';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';
import STORE from './state-drills/accordion-store';

//////////////////////////////////////////////////////////

// [v1] Component Composition, 
// per: https://courses.thinkful.com/react-v1/checkpoint/6

// [v2] Default Props and Class Components,
// per: https://courses.thinkful.com/react-v1/checkpoint/7

// [v3] Intro to Testing,
// per: https://courses.thinkful.com/react-v1/checkpoint/8

// [v4] React State,
// per: https://courses.thinkful.com/react-v1/checkpoint/9

// [v5] Event Handlers and Conditional Rendering,
// per: https://courses.thinkful.com/react-v1/checkpoint/10

// [v6] React Router
// per: https://courses.thinkful.com/react-v1/checkpoint/14#setting-up-react-router
// src: https://github.com/tomatau/paltrows-power-toes

// [v7] API Requests
// per: https://courses.thinkful.com/react-v1/checkpoint/13

//////////////////////////////////////////////////////////

// FOR <SPLITZ /> ////////////////////////////////////////
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

// FOR <TABS /> /////////////////////////////////////////
// to accept as a prop
const tabsProp = [
  { name: 'First tabzzz',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];



function App() {
  return (
    <main className='App'>
      <div className="containAccordion">
        <Accordion sections={STORE.sections} />
      </div>

      <div className="containTabs">
        <Tabs tabs={tabsProp} />
      </div>

      <div className="containRussianRoulette">
        <RussianRoulette  
          bulletInChamber={2}
        />
      </div>

      <div className="containBomb">
        <Bomb />
      </div>

      <div className="containHelloWorld">
        <HelloWorld />
      </div>

      <div className="TheDate">
        <div className="containTheDate">
          <TheDate />
        </div>
      </div>

      <div className="containCounter">
        <Counter 
          count={123}
          steps={2}
        />
      </div>

      <div className="containMessages">
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </div>

      <div className="containSplitz">
        <Splitz className='left' flexBasis={3}>
          This is the content for the left 'Split'. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia muthafucka?<p />
          
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
  );
}

export default App;
