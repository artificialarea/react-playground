import React from 'react';

class Bomb extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      boom: '"BOOM!!!!"',
      count: 1,
      tick: '"tick"',
      tock: '"tock"',
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1
      this.setState(
        { count: newCount }
      )
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const counter = this.state.count
    let sound = counter % 2 === 0 ? this.state.tock : this.state.tick

    if (counter >= 10 ) {
      sound = this.state.boom
      this.componentWillUnmount()
    }

    return (
      <div>
        <p className="counter">{counter}</p>
        <p className="sound">{sound}</p>
      </div>
    )
  }
}

export default Bomb;
