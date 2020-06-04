import React from 'react';
import scratch from './scratch-cat.gif'

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={scratch} alt="cat" style={{ zIndex: -1,  width: '50px', position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}