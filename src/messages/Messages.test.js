import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';


describe('<Messages />', () => {

  // SMOKE TEST //////////////////////////////////////////////////////////

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // SNAPSHOT TESTS (with 'react-test-renderer') ///////////////////////

  it('renders the UI as expected', () => {
    // Render the component, as JSON
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/Messages.test.js.snap
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer.create(<Messages name="Messages" unread={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});