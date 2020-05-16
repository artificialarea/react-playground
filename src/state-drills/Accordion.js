import React from 'react';

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
      <ul>
        {this.props.sections.length && this.renderLis()}
      </ul>
    )
  }
}

export default Accordion;