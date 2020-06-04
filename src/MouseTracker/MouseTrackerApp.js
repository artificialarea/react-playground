import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

// src: https://reactjs.org/docs/render-props.html

export default class App extends React.Component {
 
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        {/* Render Prop */}
        <Mouse render={mouse => (  // a bit uncertain what 'mouse' param/props refers to, tho...
          <Cat mouse={mouse} />
        )}/>
      </>
    );
  }
}