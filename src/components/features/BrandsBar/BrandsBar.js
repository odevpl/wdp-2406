import React, { useState, useEffect } from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const BrandsBar = () => {
  const brands = useSelector(state => state.brands);
  const [activeBrand, setActiveBrand] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [visibleBrands, setVisibleBrands] = useState([]);
  const brandsLength = brands.length;

  const getViewportWidth = () =>
    document.documentElement.clientWidth || window.innerWidth;

  const numberOfVisibleBrands = wide =>
    Math.min(brandsLength, Math.max(1, Math.floor((wide - 220) / 150)));

  const updateVisibleBrands = (startIndex, count) => {
    const end = startIndex + count;
    let visible = [];
    for (let i = startIndex; i < end; i++) {
      visible.push(brands[i % brandsLength]);
    }
    setVisibleBrands(visible);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = getViewportWidth();
      setWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const count = numberOfVisibleBrands(width);
    updateVisibleBrands(activeBrand, count);
  }, [width, activeBrand, brands, numberOfVisibleBrands, updateVisibleBrands]);

  const handleRightArrowClick = () => {
    setActiveBrand(prevActiveBrand => (prevActiveBrand + 1) % brands.length);
  };

  const handleLeftArrowClick = () => {
    setActiveBrand(
      prevActiveBrand => (prevActiveBrand - 1 + brands.length) % brands.length
    );
  };

  return (
    <Swipeable leftAction={handleRightArrowClick} rightAction={handleLeftArrowClick}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row align-items-center justify-content-between'>
              <button onClick={handleLeftArrowClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              {visibleBrands.map(brand => (
                <div key={brand.id} className={styles.brandIcon}>
                  <img src={brand.image} alt={brand.name} />
                </div>
              ))}
              <button onClick={handleRightArrowClick}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default BrandsBar;
