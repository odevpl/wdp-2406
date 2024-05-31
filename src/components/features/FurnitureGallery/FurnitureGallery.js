import React /*, { useState, useEffect }*/ from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FurnitureGallery.module.scss';
import ProductBox2 from '../../common/ProductBox2/ProductBox2';
// import Swipeable from '../../common/Swipeable/Swipeable';
import Menu from '../../common/Menu/Menu';

import SlideBar from '../../common/SlideBar/SlideBar';
import { useSelector } from 'react-redux';
// import { getViewport } from '../../../redux/viewportRedux';
import Button from '../../common/Button/Button';

const FurnitureGallery = props => {
  // create layout

  const product = useSelector(state => state.products[0]);

  // const [productState, setProductState] = useState({});

  // setProductState(product);

  // console.log('product', product);
  const menuItems = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];

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
              <ProductBox2 key={product.id} {...product} />
            </div>
            <SlideBar />
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
