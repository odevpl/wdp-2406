import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FurnitureGallery.module.scss';

import { useSelector } from 'react-redux';
import {
  getAll,
  getTopRated,
  getFeatured,
  getTopSellers,
  getSaleOff,
} from '../../../redux/productsRedux';

import ProductBox2 from '../../common/ProductBox2/ProductBox2';
import SlideBar from '../../common/SlideBar/SlideBar';
import Menu from '../../common/Menu/Menu';
import Button from '../../common/Button/Button';

const FurnitureGallery = props => {
  // const products = useSelector(getAll);

  const topRated = useSelector(getTopRated);
  const featured = useSelector(getFeatured);
  const topSeller = useSelector(getTopSellers);
  const saleOff = useSelector(getSaleOff);

  const promoCategories = [
    {
      id: 'featured',
      name: 'Featured',
      products: featured ? featured : [],
      activeProductId: featured ? featured[0].id : null,
    },
    {
      id: 'topRated',
      name: 'Top Rated',
      products: topRated ? topRated : [],
      activeProductId: topRated ? topRated[0].id : null,
    },
    {
      id: 'topSeller',
      name: 'Top Seller',
      products: topSeller ? topSeller : [],
      activeProductId: topSeller ? topSeller[0].id : null,
    },
    {
      id: 'saleOff',
      name: 'Sale Off',
      products: saleOff ? saleOff : [],
      activeProductId: saleOff ? saleOff[0].id : null,
    },
  ];

  const [activeCategory, setActiveCategory] = useState(
    promoCategories.find(category => category.id === 'featured')
  );
  const [activeProductId, setActiveProductId] = useState(topRated[0].id);

  const products = activeCategory.products;
  const product = products.find(product => product.id === activeProductId);

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
                menuItems={promoCategories.map(category => category.name)}
                className={clsx(styles.menu, styles.active)}
                doNotCollapse={true}
              />
            </div>
            <div>
              <ProductBox2 key={activeProductId} {...product} />
            </div>
            <SlideBar
              items={products}
              activeId={activeProductId}
              handleClick={setActiveProductId}
            />
          </div>
          <div className='col-12 col-md-6'>
            <div className={clsx(styles.promotion)}>
              <img
                src={`${process.env.PUBLIC_URL + '/images/sofas/sofa-2.webp'}`}
                alt='bed'
              />
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
