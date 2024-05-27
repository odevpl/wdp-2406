import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

const NewFurniture = props => {
  const { categories, products } = props;

  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);
  const lastPage = pagesCount - 1;

  const handleSwipeLeft = () => {
    console.log('INSIDE SWIPE LEFT');
    //console.log('STATE', this.state);
    //const { activeCategory, activePage } = this.state;
    console.log('activePage before', activePage);
    //console.log('LAST PAGE',calculateLastPage());

    //const lastPage = this.calculateLastPage();

    if (activePage === lastPage) return;

    if (activePage < lastPage) {
      console.log('INSIDE IF');

      const newPage = activePage + 1;
      console.log('NEW PAGE', newPage);
      handlePageChange(newPage);
    }
    console.log('activePage after', activePage);
  };

  const handleSwipeRight = () => {
    console.log('INSIDE SWIPE RIGHT');
    //console.log('STATE', this.state);
    //const { activePage } = this.state;
    console.log('activePage before', activePage);

    if (activePage === 0) return;
    //if (this.state.activePage < this.state.lastPage)
    else {
      handlePageChange(activePage - 1);
    }

    console.log('activePage after', activePage);
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
            <div className='row no-gutters align-items-end'>
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
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-3'>
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
