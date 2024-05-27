import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  //Refs to store touch/mouse events
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  //Touch events handlers

  const handleTouchStart = e => {
    e.preventDefault();
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };
  const handleTouchMove = e => {
    e.preventDefault();
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      touchStartY.current !== null &&
      touchEndY.current !== null
    ) {
      const threshold = 50;
      const deltaX = touchStartX.current - touchEndX.current;
      const absDeltaY = Math.abs(touchStartY.current - touchEndY.current);

      if (absDeltaY > Math.abs(deltaX)) {
        //NOT CORRECT SWIPE
      } else if (deltaX > threshold) {
        leftAction && leftAction();
      } else if (deltaX < -threshold) {
        rightAction && rightAction();
      }

      // RESET VALUES AFTER SWIPE
      touchStartX.current = null;
      touchEndX.current = null;
      touchStartY.current = null;
      touchEndY.current = null;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }} // TO PREVENT DEFAULT ACTIONS ON TOUCH EVENTS
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node.isRequired,
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
};

export default Swipeable;
