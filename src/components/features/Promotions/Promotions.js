import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Promotions.module.scss';

const card = (image, title, discount) => {
  return <div></div>;
};

const Promotions = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={clsx('row', styles.box)}>
        <div className='col-12 col-md-6 my-2 my-md-0'>
          <div className={clsx(styles.promotion, styles.promotionPrimary)}>
            <img
              src={`${process.env.PUBLIC_URL + '/images/sofas/sofa-2.webp'}`}
              alt='bed'
            />
            <div className={styles.shadow}></div>
            <div className={styles.message}>
              <h2>Guest room</h2>
              <h1>Sofa</h1>
              <div className={styles.box}>
                <h2>-20%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='row'>
            <div
              className={clsx(
                'col-12',
                'my-2',
                'my-md-0',
                'mb-md-2',
                styles.promotion,
                styles.promotionSecondary
              )}
            >
              <img
                src={`${process.env.PUBLIC_URL + '/images/sofas/sofa-2.webp'}`}
                alt='bed'
              />

              <div className={styles.shadow}></div>
              <div className={styles.message}>
                <h3>
                  <b>Office</b> Chair
                </h3>
                <h6>Collection</h6>
                <h2>$200.00</h2>
              </div>
            </div>
            <div
              className={clsx(
                'col-12',
                'my-2',
                'my-md-0',
                'mt-md-2',
                styles.promotion,
                styles.promotionTertiary
              )}
            >
              <img
                src={`${process.env.PUBLIC_URL + '/images/sofas/sofa-2.webp'}`}
                alt='bed'
              />

              <div className={styles.message}>
                <h5>
                  <b>Special</b> Collection
                </h5>
                <p>Save up 45% of furniture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotions.propTypes = {
  children: PropTypes.node,
};

export default Promotions;
