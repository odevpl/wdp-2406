import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';

const Menu = ({
  menuItems,
  selectedItemId,
  setSelectedItemId,
  className,
  doNotCollapse,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mobile = useSelector(state => state.viewport.type) === 'mobile';

  const menuItem = item => {
    return (
      <li
        key={item.id}
        onClick={e => {
          e.preventDefault();
          setSelectedItemId(item.id);
          console.log('selectedItemId', selectedItemId);
          if (mobile) setIsExpanded(false);
        }}
        className={item.id === selectedItemId ? styles.active : ''}
      >
        <a href='#'>{item.name}</a>
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
          {menuItems.map(item => menuItem(item)) // eslint-disable-line
          }
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  // menuItems is an array of objects with the following structure: { id: string, name: string }
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  selectedItemId: PropTypes.string,
  setSelectedItemId: PropTypes.func,
  className: PropTypes.string || PropTypes.list || PropTypes.object,
  doNotCollapse: PropTypes.bool,
  children: PropTypes.node,
};

export default Menu;
