import React from 'react';
import './Accordion.css';

// src: https://courses.thinkful.com/react-v1/checkpoint/10#assignment
// alt solution: https://github.com/tomatau/state-drills/tree/accordion/src/accordion


class Accordion extends React.Component {
  state = {
    currentLi: null,
  }

  static defaultProps = {
    sections: [],
  }

  handleButtonClick = (index) => {
    this.setState({
      currentLi: index,
    })
  }

  renderLis() {
    return this.props.sections.map((section, index) => {
      return (
        <li key={index} >
          <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
          <p>{this.state.currentLi === index ? section.content : ""}</p>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>Accordion</h2>
        <ul>
          {/* {!!this.props.sections.length && this.renderLis()} */}
          {this.props.sections.length ? this.renderLis() : <li/>}
        </ul>
      </div>
    )
  }
}

export default Accordion;