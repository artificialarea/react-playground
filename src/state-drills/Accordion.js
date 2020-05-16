import React from 'react';
import './Accordion.css';

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
        <h1>Accordion</h1>
        <hr />
        <ul>
          {/* {!!this.props.sections.length && this.renderLis()} */}
          {this.props.sections.length ? this.renderLis() : <li/>}
        </ul>
      </div>
    )
  }
}

export default Accordion;