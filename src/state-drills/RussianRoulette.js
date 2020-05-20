import React from 'react';

// src: https://courses.thinkful.com/react-v1/checkpoint/9#assignment
// alt solution: https://github.com/tomatau/state-drills/blob/master/src/state-drills/RouletteGun.js

class RussianRoulette extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };

    const { bulletInChamber } = this.props
    console.log(`bullet in chamber: ${bulletInChamber}`)

  }

  static defaultProps = {
    bulletInChamber: 8,
  }

  handleTrigger = () => {
    this.setState({ 
      spinningTheChamber: true, 
    })
    
    this.timer = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      console.log(`spinning stops at chamber: ${randomChamber}`)
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  renderDisplay() {

    const { chamber, spinningTheChamber } = this.state
    // ^^^^^^ destructuring object 
    // equivalent to:
    // const chamber = this.state.chamber;
    // const spinningTheChamber = this.state.spinningTheChamber;

    const { bulletInChamber } = this.props
    // console.log(`bullet in chamber:  ${bulletInChamber}`)

    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!! Yer dead.'
    } else if (chamber === null) {
      return 'Scene from The Deer Hunter'
    } else {
      return 'Phew! You\'re safe!'
    }
  }
  
  render() {
    return (
      <div className="RouletteGun">
        <p className="status">{this.renderDisplay()}</p>
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