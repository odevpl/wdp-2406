import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

const Menu = ({ menuItems, className, doNotCollapse }) => {
  const [selectedCategory, setSelectedCategory] = useState(menuItems[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const mobile = useSelector(state => state.viewport.type) === 'mobile';

  const handleMenuClick = name => {
    setSelectedCategory(name);
    if (mobile) setIsExpanded(false);
  };

  const menuitem = object1 => {
    const { name, key } = object1;
    return (
      <li
        key={key}
        onClick={e => {
          e.preventDefault();
          handleMenuClick(name);
        }}
        className={name === selectedCategory ? styles.active : ''}
      >
        <a href='#' key={name}>
          {name}
        </a>
      </li>
    );
  };
  return (
    <div className={clsx(styles.root)}>
      <div className={''}>
        <button
          className={clsx(
            styles.menuToggler,
            !mobile || doNotCollapse ? styles.desktop : ''
          )}
          onClick={() => {
            if (mobile) setIsExpanded(!isExpanded);
          }}
        >
          <FontAwesomeIcon icon={faBars} className={styles.hamburger} />
        </button>
      </div>
      <div
        className={clsx(
          styles.menu,

          isExpanded || !mobile ? styles.expanded : '',
          !mobile || doNotCollapse ? styles.desktop : '',
          className
        )}
      >
        <ul className={clsx('d-sm-flex', styles.menuList)}>
          {menuItems.map(item => menuitem({ name: item, key: item }))}
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.array,
  className: PropTypes.string || PropTypes.list || PropTypes.object,
  doNotCollapse: PropTypes.bool,
  children: PropTypes.node,
};

export default Menu;
