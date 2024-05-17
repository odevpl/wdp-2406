import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureBox.module.scss';
import { useState } from 'react';

const FeatureBox = ({ icon, link, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToAnchor = targetId => {
    var element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!link) link = '';

  return (
    <div
      className={styles.root + (isHovered ? ' ' + styles.active : '')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => scrollToAnchor(link)}
    >
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  link: PropTypes.string,
};

export default FeatureBox;
