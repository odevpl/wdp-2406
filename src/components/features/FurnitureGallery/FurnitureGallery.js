import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FurnitureGallery.module.scss';

import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import ProductBox2 from '../../common/ProductBox2/ProductBox2';
import SlideBar from '../../common/SlideBar/SlideBar';
// import Swipeable from '../../common/Swipeable/Swipeable';
import Menu from '../../common/Menu/Menu';
import Button from '../../common/Button/Button';

const FurnitureGallery = props => {
  const products = useSelector(getAll);

  const [activeProductId, setActiveProductId] = useState('aenean-ru-bristique-3');

  const product = products.find(product => product.id === activeProductId);

  const menuItems = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];

  const brands = useSelector(state => state.brands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col-12', 'col-md-6', styles.gallery)}>
            <div className={styles.panelBar}>
              <div className={styles.heading}>
                <h3>Furniture Gallery</h3>
              </div>
            </div>
            <div>
              <Menu
                menuItems={menuItems}
                className={clsx(styles.menu, styles.active)}
                doNotCollapse={true}
              />
            </div>
            <div>
              <ProductBox2 key={activeProductId} {...product} />
            </div>
            <SlideBar items={products} activeId={activeProductId} />
          </div>
          <div className='col-12 col-md-6'>
            <div className={clsx(styles.promotion)}>
              <img
                src={`${process.env.PUBLIC_URL + '/images/sofas/sofa-2.webp'}`}
                alt='bed'
              />
              {/* <div className={styles.shadow}></div> */}
              <div className={styles.message}>
                <span className={styles.from}>from </span>
                <span className={styles.price}>$50.80</span>
                <h2 className={styles.item}>Bedroom Bed</h2>
                <Button className={styles.button}>shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FurnitureGallery.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  FurnitureGallery: PropTypes.arrayOf(
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

FurnitureGallery.defaultProps = {
  categories: [],
  products: [],
};

export default FurnitureGallery;
