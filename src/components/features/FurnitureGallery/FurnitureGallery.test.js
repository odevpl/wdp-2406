import React from 'react';
import { shallow } from 'enzyme';
import FurnitureGallery from './FurnitureGallery';

import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue([
  {
    id: 'product1',
    name: 'productname1',
  },
  {
    id: 'product2',
    name: 'productname2',
  },
]);

describe('Component FurnitureGallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<FurnitureGallery />);
    expect(component).toBeTruthy();
  });
});
