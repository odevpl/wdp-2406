import React from 'react';
import { shallow } from 'enzyme';
import PromotedProductBox from './PromotedProductBox';
import * as reactRedux from 'react-redux';

describe('Component PromotedProductBox', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should render without crashing', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    const component = shallow(<PromotedProductBox />);
    expect(component).toBeTruthy();
  });
});
