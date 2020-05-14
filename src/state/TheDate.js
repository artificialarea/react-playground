import React from 'react';

class TheDate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      datetime: new Date(),
      foo: 'foo',
      hello: 'Hello, world!',
      list: [1, 2, 3],
      obj: { nested: 'object', yes: true },
    }
    // console.log('constructor');
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // this.state.datetime = new Date() // doesn't work, as React needs to be notified about the update. If we directly mutate the component state the React won't know about the change. 
      // Enter the method, setState: the setState method takes an object argument, that the component will then merge with the exisiting state, without requiring to change the render (because the new object has the same key as the existing state).// Everytime setState is called, the React component will re-trigger render.
      this.setState({ datetime: new Date() });
    }, 1000); 
    // console.log('componentDidMount')
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    // console.log('render')
    return <div>{this.state.datetime.toLocaleString()}</div>
  }
}

export default TheDate;