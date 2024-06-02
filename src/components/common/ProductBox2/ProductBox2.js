'use client';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox2.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {
  toggleFavoriteProduct,
  toggleCompareProduct,
} from '../../../redux/productsRedux';
import Button from '../Button/Button';
import StarsRating from '../../features/StarsRating/StarsRating';

const ProductBox2 = ({
  id,
  name,
  price,
  promo,
  stars,
  userStars,
  image,
  isFavorite,
  isCompare,
  oldPrice,
}) => {
  const isFavoriteActive = clsx({ [styles.buttonActive]: isFavorite });
  const isCompareActive = clsx({ [styles.buttonActive]: isCompare });

  const dispatch = useDispatch();
  const handleToggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(id));
  };

  const handleToggleCompare = e => {
    e.preventDefault();
    dispatch(toggleCompareProduct(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h5>{name}</h5>
          <StarsRating stars={stars} userStars={userStars} id={id} />

          <div className={styles.price}>
            <div className={styles.circleshadow}></div>
            <Button noHover variant='small'>
              ${price}.00
            </Button>
            {oldPrice ? <span className={styles.oldPrice}>${oldPrice}.00</span> : ''}
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button
              variant='outline'
              className={clsx(styles.button, isFavoriteActive)}
              onClick={handleToggleFavorite}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              <div className={styles.tooltip}>Favorite</div>
            </Button>
            <Button
              variant='outline'
              className={clsx(styles.button, isCompareActive, styles.compareButton)}
              onClick={handleToggleCompare}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              <div className={styles.tooltip}>Compare</div>
            </Button>

            <Button variant='outline' className={styles.button}>
              <FontAwesomeIcon icon={faEye}>Quick View</FontAwesomeIcon>
              <div className={styles.tooltip}>Quick View</div>
            </Button>
            <Button variant='outline' className={styles.button}>
              <FontAwesomeIcon icon={faShoppingBasket}>Add to Cart</FontAwesomeIcon>
              <div className={styles.tooltip}>Add to Cart</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox2.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default ProductBox2;
