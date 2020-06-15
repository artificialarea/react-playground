import React from 'react';
import './Accordion.css';

// src: https://courses.thinkful.com/react-v1/checkpoint/10#assignment
// alt solution: https://github.com/tomatau/state-drills/tree/accordion/src/accordion


class Accordion extends React.Component {
  state = {
    currentLi: null,
    isExposed: false,
  }

  static defaultProps = {
    sections: [],
    isExposed: false,
  }

  handleButtonClick = (index) => {
    this.setState({
      currentLi: index,
      isExposed: !this.state.isExposed, // which toggles boolean
    })
  }

  renderLis() {
    return this.props.sections.map((section, index) => {
      return (
        <li key={index} >
          <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
          <p>{this.state.currentLi === index  && this.state.isExposed ? section.content : ""}</p>
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

/*
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLiked: false, name: "Mickey Mouse" };
    }

    _toggleLikeState = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        const { name, isLiked } = this.state;
        console.log(name);
        return (
            <div className="parent">
                <ChangeMeButton name={name} onToggleClick={() => this._toggleLikeState()} />
                <span>{ isLiked ? "yay!": "nay!" }</span>
            </div>
        );
    }
}
*/