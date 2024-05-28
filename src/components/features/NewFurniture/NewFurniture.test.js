import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue('desktop');

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture />);
    expect(component).toBeTruthy();
  });
});
