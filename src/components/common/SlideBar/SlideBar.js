import React from 'react';
import styles from './SlideBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const SlideBar = ({ items, activeId }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <button className=''>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={clsx(styles.slide, '')}>
            {items.map(item => (
              <div
                key={item.id}
                className={clsx(
                  styles.brandIcon,
                  activeId === item.id ? styles.active : ''
                )}
              >
                <overlay className={styles.overlay}></overlay>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
          <button className=''>
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
};

export default SlideBar;
