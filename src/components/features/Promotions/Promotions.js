import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Promotions.module.scss';

const Promotions = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={clsx('row', styles.box)}>
        <div className='col-6 '>
          <div className={clsx(styles.promotionPrimary)}>
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
        <div className='col-6 '>
          <div className={clsx('row', styles.promotionSecondary)}></div>
          <div className={clsx('row', styles.promotionSecondary)}></div>
        </div>
      </div>
    </div>
  </div>
);

Promotions.propTypes = {
  children: PropTypes.node,
};

export default Promotions;
