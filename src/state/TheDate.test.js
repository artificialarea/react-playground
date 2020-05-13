import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe('<TheDate />', () => {

    it('render without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<TheDate />, div)
      ReactDOM.unmountComponentAtNode(div);
    });

    // 'it.skip' work-in-progress
    // we know this test in it's current form won't work as the snapshots of the ever-changing time will never match, so telling jest to 'skip' the snapshot for now...
    it.skip('renders UI without crashing', () => {
      expect(
        renderer.create(<TheDate />).toJSON()
      ).toMatchSnapshot()
    });

});