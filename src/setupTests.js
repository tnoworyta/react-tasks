import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.buildSetup = (TestComponent, props = {}) => (override = {}) =>
  shallow(<TestComponent { ...props } { ...override } />);
