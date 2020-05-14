import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Counter from './Counter';

describe('<Counter />', () => {

  it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Counter />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('render UI without crashing', () => {
    expect(
      renderer.create(<Counter />).toJSON()
    ).toMatchSnapshot();
  });

});