import React from 'react';

class RussianRoulette extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      content: 'The Deer Hunter',
    };

    this.state.chamber = props.bulletInChamber
    // ^^^^^^^^^^^^^
    // props.bulletInChamber value from defaultProps,
    // <App /> prop value being ignored. Why?
  }

  static defaultProps = {
    bulletInChamber: 8,
  }

  toBeOrNotToBe() {
    const randomChamber = Math.ceil(Math.random() * 8)
    console.log(`spinning stoped at chamber ${randomChamber}`)
    
    if (randomChamber === this.state.chamber) {
      this.setState({
        content: 'BANG!!!! You\'re dead.',
      })
    } else {
      this.setState({
        content: 'Phew! You\'re safe!',
        chamber: randomChamber
      })
    }
    console.log(`"${this.state.content}"`)
  }

  handleTrigger = () => {
    console.log('bullet in chamber ' + this.state.chamber)
    
    this.setState({ 
      spinningTheChamber: true, 
      content: 'spinning the chamber and pulling the trigger! ...'
    })
    
    this.timer = setTimeout(() => {
      this.toBeOrNotToBe()
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  
  render() {
    return (
      <div>
        <p className="status">{this.state.content}</p>
        <button
          onClick={this.handleTrigger}
        >
          Spin Chamber and Pull the Trigger!
        </button>
      </div>
    )
  }
}

export default RussianRoulette;