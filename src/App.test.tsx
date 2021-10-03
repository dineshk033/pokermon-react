import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrrapper = shallow(<App/>);
 console.log(wrrapper)
  expect(wrrapper).toMatchSnapshot();
});
