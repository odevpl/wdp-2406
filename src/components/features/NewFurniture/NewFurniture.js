import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

import { useSelector } from 'react-redux';
import { getViewport } from '../../../redux/viewportRedux';

const NewFurniture = props => {
  const { categories, products } = props;

  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const viewport = useSelector(getViewport);

  if (viewport === 'mobile' && itemsPerPage !== 1) {
    setItemsPerPage(1);
  } else if (viewport === 'tablet' && itemsPerPage !== 4) {
    setItemsPerPage(4);
  } else if (viewport === 'desktop' && itemsPerPage !== 8) {
    setItemsPerPage(8);
  }

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / itemsPerPage);
  const lastPage = pagesCount - 1;

  const handleSwipeLeft = () => {
    if (activePage === lastPage) return;

    if (activePage < lastPage) {
      const newPage = activePage + 1;
      handlePageChange(newPage);
    }
  };

  const handleSwipeRight = () => {
    if (activePage === 0) return;
    else {
      handlePageChange(activePage - 1);
    }
  };

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-md-end flex-column flex-md-row'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts
              .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
              .map(item => (
                <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
