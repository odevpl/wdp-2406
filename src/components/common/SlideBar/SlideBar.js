import React from 'react';
import styles from './SlideBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const SlideBar = () => {
  const brands = useSelector(state => state.brands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <button className=''>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={clsx(styles.slide, '')}>
            {brands.map(brand => (
              <div key={brand.id} className={styles.brandIcon}>
                <img src={brand.image} alt={brand.name} />
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

export default SlideBar;
