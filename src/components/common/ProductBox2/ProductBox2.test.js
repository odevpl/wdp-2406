import React from 'react';
import { shallow } from 'enzyme';
import ProductBox2 from './ProductBox2';
import * as reactRedux from 'react-redux';

describe('Component ProductBox2', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should render without crashing', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    const component = shallow(<ProductBox2 />);
    expect(component).toBeTruthy();
  });
});
