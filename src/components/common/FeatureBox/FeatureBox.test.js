import React from 'react';
import { shallow } from 'enzyme';
import FeatureBox from './FeatureBox';
import { render, fireEvent } from '@testing-library/react';

describe('Component FeatureBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBox />);
    expect(component).toBeTruthy();
  });

  it('should not call scrollIntoView when clicked without a target', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;
    const { container } = render(<FeatureBox />);
    const featureBox = container.firstChild;

    fireEvent.click(featureBox);
    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });

  it('should call scrollIntoView when target element is found', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;
    const targetElement = document.createElement('div');
    targetElement.id = 'section1';
    document.body.appendChild(targetElement);
    const { container } = render(<FeatureBox target='section1' />);
    const featureBox = container.firstChild;

    fireEvent.click(featureBox);
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });

    document.body.removeChild(targetElement);
  });

  it('should add active class when hovered over and remove it when mouse leaves', () => {
    const { container } = render(<FeatureBox />);
    const featureBox = container.firstChild;

    fireEvent.mouseEnter(featureBox);
    expect(featureBox.classList.contains('active')).toBe(true);

    fireEvent.mouseLeave(featureBox);
    expect(featureBox.classList.contains('active')).toBe(false);
  });
});
