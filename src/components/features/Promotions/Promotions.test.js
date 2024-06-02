import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';

jest.mock('react-redux', () => ({
  useSelector: () => [
    {
      image: 'bed.jpg',
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
      text4: 'text4',
    },
    {
      image: 'bed.jpg',
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
      text4: 'text4',
    },
    {
      image: 'bed.jpg',
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
      text4: 'text4',
    },
  ],
}));

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promotions />);
    expect(component).toBeTruthy();
  });
});
