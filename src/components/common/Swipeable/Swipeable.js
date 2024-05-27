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
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };
  const handleTouchMove = e => {
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

      console.log('deltaX', deltaX);
      console.log('absDeltaY', absDeltaY);

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

  //Mouse events handlers

  const handleMouseDown = e => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const handleMouseMove = e => {
    if (touchStartX.current !== null) {
      touchEndX.current = e.clientX;
      touchEndY.current = e.clientY;
    }
  };

  const handleMouseUp = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const threshold = 50;
      const deltaX = touchStartX.current - touchEndX.current;

      if (deltaX > threshold) {
        leftAction && leftAction();
      } else if (deltaX < -threshold) {
        rightAction && rightAction();
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleTouchEnd} //{handleMouseUp}
      onMouseLeave={handleTouchEnd} //{handleMouseUp}
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
