import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    // console.log('props in constructor', props)
    super(props);
    this.state = {
      count: 0,
    }
  }

  static defaultProps = {
    steps: 1,
  }

  // General Rule:
  // When adding an event listener function to a React class, use an arrow function to make sure that this is referring to the class instance.
  handleButtonClick = () =>  {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    const numAdd = this.props.steps
    const newCount = this.state.count + numAdd;
    this.setState({
      count: newCount
    })
    console.log(this.state.count);
  }

  

  render() {
    return (
      <div>
        <p> The current count: {this.state.count}</p>
        <button 
          onClick={this.handleButtonClick}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter;