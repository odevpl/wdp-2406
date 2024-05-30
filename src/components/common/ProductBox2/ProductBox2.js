'use client';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox2.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {
  toggleFavoriteProduct,
  toggleCompareProduct,
} from '../../../redux/productsRedux';
import StarsRating from '../../features/StarsRating/StarsRating';

const ProductBox = ({
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
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarsRating stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={isFavoriteActive}
            onClick={handleToggleFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={isCompareActive}
            onClick={handleToggleCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : ''}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
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

export default ProductBox;
