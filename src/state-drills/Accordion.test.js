import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import STORE from './accordion-store'

import Accordion from './Accordion';

describe('<Accordion />', () => {

  it('renders without errors', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Accordion />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders empty li when section prop not supplied', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('component renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={STORE.sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens when a section is clicked', () => {
    const wrapper = shallow(<Accordion sections={STORE.sections} />);
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('component opens and closes sections with multiple clicks', () => {
    const wrapper = shallow(<Accordion sections={STORE.sections} />);
    
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    console.log('>>> WRAPPER <<<');
    console.log(wrapper.debug());

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});