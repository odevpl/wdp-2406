import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareStickyBar from '../../features/CompareStickyBar/CompareStickyBar';
import BrandsBar from '../../features/BrandsBar/BrandsBar';
import Promoted from '../../features/Promoted/Promoted';

import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';
import Promotions from '../../features/Promotions/Promotions';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <FurnitureGallery />
    <BrandsBar />
    <Feedback />
    <CompareStickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
