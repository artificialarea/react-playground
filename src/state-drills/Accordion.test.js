import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './Accordion';

describe('<Accordion />', () => {

  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accordion />, div)
    ReactDOM.unmountComponentAtNode(div)
  });
});