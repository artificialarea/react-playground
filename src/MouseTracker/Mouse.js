import React from 'react';
import Cat from './Cat'

// The <Mouse> component encapsulates the behavior we need 
// to serve as a Render Prop to be reused elsewhere
export default class Mouse extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {/* <Cat mouse={this.state}/> */}
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}