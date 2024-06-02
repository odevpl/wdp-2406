import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import styles from './Promotions.module.scss';

const getPromotions = ({ promotions }) => promotions;

const promotion1 = promotion => (
  <div className={clsx(styles.promotion, styles.promotionPrimary)}>
    <img src={promotion.image} alt='bed' />
    <div className={styles.shadow}></div>
    <div className={styles.message}>
      <h2>{promotion.text1}</h2>
      <h1>{promotion.text2}</h1>
      <div className={styles.box}>
        <h2>{promotion.text3}</h2>
      </div>
    </div>
  </div>
);

const promotion2 = promotion => (
  <div className={clsx(styles.promotion, styles.promotionSecondary)}>
    <img src={promotion.image} alt='bed' />

    <div className={styles.shadow}></div>
    <div className={styles.message}>
      <h3>
        <b>{promotion.text1}</b> {promotion.text2}
      </h3>
      <h6>{promotion.text3}</h6>
      <h2>{promotion.text4}</h2>
    </div>
  </div>
);

const promotion3 = promotion => (
  <div className={clsx(styles.promotion, styles.promotionTertiary)}>
    <img src={promotion.image} alt='bed' />

    <div className={styles.message}>
      <h5>
        <b>{promotion.text1}</b> {promotion.text2}
      </h5>
      <p>{promotion.text3}</p>
    </div>
  </div>
);

const Promotions = () => {
  const promotions = useSelector(getPromotions);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('row', styles.box)}>
          <div className='col-12 col-md-6 my-2 my-md-0'>
            {promotion1(promotions[0])}
          </div>
          <div className='col-12 col-md-6'>
            <div className='row'>
              <div className={clsx('col-12', 'my-2', 'my-md-0', 'mb-md-2')}>
                {promotion2(promotions[1])}
              </div>
              <div className={clsx('col-12', 'my-2', 'my-md-0', 'mt-md-2')}>
                {promotion3(promotions[2])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotions.propTypes = {
  children: PropTypes.node,
};

export default Promotions;
