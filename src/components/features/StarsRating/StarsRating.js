import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { updateUserStars } from '../../../redux/productsRedux';
import styles from './StarsRating.module.scss';
import Button from '../../common/Button/Button';

const StarsRating = ({ id, stars, userStars }) => {
  const dispatch = useDispatch();
  const [hoveredStars, setHoveredStars] = useState(0);
  const [localUserStars, setLocalUserStars] = useState(userStars);
  const [colorStar, setColorStar] = useState('averageRatingColor');

  useEffect(() => {
    if (localUserStars > 0 || hoveredStars > 0) {
      setColorStar('userRatingColor');
    } else {
      setColorStar('averageRatingColor');
    }
  }, [localUserStars, hoveredStars]);

  const updateStars = (e, userStars, id) => {
    e.preventDefault();
    const changeStars = { id, userStars };
    dispatch(updateUserStars(changeStars));
    setLocalUserStars(userStars);
  };

  const handleMouseOver = (e, i) => {
    e.preventDefault();
    if (hoveredStars !== i) setHoveredStars(i);
  };

  const handleMouseOut = e => {
    e.preventDefault();
    setHoveredStars(0);
  };

  const activeStars =
    hoveredStars > 0 ? hoveredStars : localUserStars > 0 ? localUserStars : stars;

  return (
    <div className={styles[`${colorStar}`]}>
      {[1, 2, 3, 4, 5].map(i => (
        <Button
          key={i}
          onClick={e => {
            updateStars(e, i, id);
          }}
          onMouseOver={e => {
            handleMouseOver(e, i);
          }}
          onMouseOut={handleMouseOut}
        >
          {i <= activeStars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </Button>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default StarsRating;
