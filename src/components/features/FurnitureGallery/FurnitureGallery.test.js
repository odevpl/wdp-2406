import React from 'react';
import { shallow } from 'enzyme';
import FurnitureGallery from './FurnitureGallery';

import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue([]);

describe('Component FurnitureGallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<FurnitureGallery />);
    expect(component).toBeTruthy();
  });
});
