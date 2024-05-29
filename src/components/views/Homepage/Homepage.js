import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import BrandsBar from '../../features/BrandsBar/BrandsBar';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <BrandsBar />
    <CompareStickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
