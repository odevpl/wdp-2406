import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useEffect, useState } from 'react';
import { getViewport, changeViewport } from '../../../redux/viewportRedux';
import { useDispatch, useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  // const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const viewport = useSelector(getViewport);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const viewportBreakpoints = {
    mobile: 576,
    tablet: 768,
    desktop: 992,
    largeDesktop: 1200,
  };

  const selectViewport = currentWidth => {
    let newViewport = null;
    if (currentWidth >= viewportBreakpoints.desktop) {
      newViewport = 'desktop';
    } else if (
      viewportBreakpoints.desktop > currentWidth &&
      currentWidth >= viewportBreakpoints.tablet
    ) {
      newViewport = 'tablet';
    } else if (viewportBreakpoints.tablet > currentWidth) {
      newViewport = 'mobile';
    }
    return newViewport;
  };

  useEffect(() => {
    const handleResize = () => {
      const recalculatedViewport = selectViewport(window.innerWidth);
      if (viewport !== recalculatedViewport) {
        dispatch(changeViewport(recalculatedViewport));
      }
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, selectViewport, viewport]);

  return (
    <div className={''}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
