import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Promotions.module.scss';

const Promotions = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={clsx('row', styles.box)}>
        <div className='col-6 '></div>
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
