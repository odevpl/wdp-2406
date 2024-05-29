import React from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BrandsBar = () => {
  const brands = useSelector(state => state.brands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row align-items-center justify-content-between'>
            <button>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {brands.map(brand => (
              <div key={brand.id} className={styles.brandIcon}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
