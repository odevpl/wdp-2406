import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import Dropdown from 'react-bootstrap/Dropdown';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('Home');
  const [isExpanded, setIsExpanded] = useState(false);
  const menuItems = ['Home', 'Furniture', 'Chair', 'Table', 'Sofa', 'Bedroom', 'Blog'];
  const menuitem = object1 => {
    const { name, key } = object1;
    return (
      <li
        key={key}
        onClick={e => {
          e.preventDefault();
          if (name === selectedCategory && !isExpanded) {
            setIsExpanded(true);
          } else if (name === selectedCategory && isExpanded) {
            setIsExpanded(false);
          } else {
            setSelectedCategory(name);
            setIsExpanded(false);
          }
        }}
        className={name === selectedCategory ? styles.active : ''}
      >
        <a href='#' key={name}>
          <div className={styles.hamburger}>
            <FontAwesomeIcon icon={faBars} />{' '}
          </div>

          {name}
        </a>
      </li>
    );
  };
  return (
    <div className={clsx(styles.root)}>
      <div className={styles.container}>
        <div className='row align-items-center justify-content-center m-0'>
          <div className={clsx('col-12', 'col-lg-5', 'order-2', 'order-lg-1')}>
            <ProductSearch />
          </div>

          <div
            className={clsx(
              'col-12',
              'col-lg-7',
              'order-1',
              'order-lg-2',
              'p-0',
              'px-sm-4',
              styles.menu,
              isExpanded ? styles.expand : ''
            )}
          >
            <ul className={clsx('d-sm-flex', styles.menuList)}>
              {menuItems.map(item => menuitem({ name: item, key: item }))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
