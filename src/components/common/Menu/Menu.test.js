import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import * as reactRedux from 'react-redux';

describe('Component Menu', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render without crashing', () => {
    const dummySelector = jest.fn();
    useSelectorMock.mockReturnValue(dummySelector);
    const component = shallow(<Menu />);
    expect(component).toBeTruthy();
  });
});
