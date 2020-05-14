import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Bomb from './Bomb';

describe('<Bomb />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Bomb />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<Bomb />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });

});