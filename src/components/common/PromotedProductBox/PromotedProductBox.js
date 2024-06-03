'use client';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedProductBox.module.scss';
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
import CircledText from '../CircledText/CircledText';

const PromotedProductBox = ({
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
  //TEMPORATY STATE FOR CircledText ITEMS
  const timerState = [
    {
      quantity: '10',
      timeUnit: 'DAYS',
    },
    {
      quantity: '23',
      timeUnit: 'HRS',
    },
    {
      quantity: '26',
      timeUnit: 'MINS',
    },
    {
      quantity: '37',
      timeUnit: 'SECS',
    },
  ];

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

  const times = [];
  for (let i = 0; i < timerState.length; i++) {
    times.push([i, timerState[i]]);
  }

  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.buttonsUp}>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
          &nbsp;&nbsp;ADD TO CART
        </div>
        <div className={'w-100 ' + styles.buttonsDown}>
          {times.map(time => (
            <li key={time[0]} className={styles.noDot}>
              <CircledText quantity={time[1].quantity} timeUnit={time[1].timeUnit} />
            </li>
          ))}
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

PromotedProductBox.propTypes = {
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

export default PromotedProductBox;
