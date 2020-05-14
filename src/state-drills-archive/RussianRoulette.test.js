import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import RussianRoulette from './RussianRoulette';

describe('<RussianRoulette />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RussianRoulette />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<RussianRoulette />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

});