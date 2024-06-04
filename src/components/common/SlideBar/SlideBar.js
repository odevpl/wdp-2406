import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getViewport } from '../../../redux/viewportRedux';

import styles from './SlideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const SlideBar = ({ items, activeId, handleClick, viewportAmounts }) => {
  const viewport = useSelector(getViewport);

  let amountOfItems = 6;
  amountOfItems = viewportAmounts ? viewportAmounts[viewport] : 6;

  const activeItemIndex = items.findIndex(item => item.id === activeId);

  const initialFirstItemIndex = Math.max(
    activeItemIndex - Math.floor(amountOfItems / 2),
    0
  );

  const [currentFirstItemIndex, setCurrentFirstItemIndex] = useState(
    initialFirstItemIndex
  );
  const [fade, setFade] = useState(styles.fadeIn);

  const fadeSlideChange = id => {
    setFade(styles.fadeOut);
    setTimeout(() => {
      setCurrentFirstItemIndex(id);
      setFade(styles.fadeIn);
    }, 500);
  };

  const moveRight = () => {
    const nextFirstItemIndex = Math.min(
      currentFirstItemIndex + amountOfItems,
      items.length - amountOfItems
    );
    fadeSlideChange(nextFirstItemIndex);
  };

  const moveLeft = () => {
    const nextFirstItemIndex = Math.max(currentFirstItemIndex - amountOfItems, 0);
    fadeSlideChange(nextFirstItemIndex);
  };

  const lastItemIndex = Math.min(
    currentFirstItemIndex + amountOfItems,
    items.length - 1
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <button
            className=''
            onClick={e => {
              e.preventDefault();
              moveLeft();
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={clsx(styles.slide, styles.fade, fade)}>
            {items.slice(currentFirstItemIndex, lastItemIndex).map(item => (
              <div
                key={item.id}
                className={clsx(
                  styles.brandIcon,
                  activeId === item.id ? styles.active : ''
                )}
                onClick={e => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
              >
                <div className={styles.overlay}></div>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
          <button
            className=''
            onClick={e => {
              e.preventDefault();
              moveRight();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

SlideBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  activeId: PropTypes.string,
  handleClick: PropTypes.func,
  viewportAmounts: PropTypes.object,
};

export default SlideBar;
