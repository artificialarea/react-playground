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
  }

  render() {
    console.log(this.state);
    return <div>{this.state.datetime.toLocaleString()}</div>
  }
}

export default TheDate;