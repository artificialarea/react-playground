import React from 'react';
import ReactDOM from 'react-dom'; // added for Thinkful test
import { render } from '@testing-library/react';
import App from './App';

// default boilerplate
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Apparently this test below is now handled elsewhere (where?) 
// as a Test suite?

// test case via Thinkful
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});