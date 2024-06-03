import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircledText.module.scss';

const CircledText = props => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle_content}>
        <div className={styles.value}>{props.quantity}</div>
        <div className={styles.timeUnit}>{props.timeUnit}</div>
      </div>
    </div>
  );
};

CircledText.propTypes = {
  quantity: PropTypes.string.isRequired,
  timeUnit: PropTypes.string.isRequired,
};

export default CircledText;
