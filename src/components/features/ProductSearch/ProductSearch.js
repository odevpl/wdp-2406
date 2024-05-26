import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './ProductSearch.module.scss';
import { getAll } from '../../../redux/categoriesRedux';

const ProductSearch = () => {
  let categories = [];
  categories = useSelector(getAll);

  const [searchCategory, setSearchCategory] = React.useState('');

  let categoryDisplay = searchCategory;
  if (!searchCategory) {
    categoryDisplay = 'Select a category';
  }

  return (
    <form action='' className={clsx(styles.root, 'row py-2')}>
      <div
        className={clsx(styles.category, 'col-12', 'col-sm-6', 'order-2', 'order-sm-1')}
      >
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div
          className={styles.category_select}
          name=''
          id=''
          onClick={() => setSearchCategory('')}
        >
          {categoryDisplay}
        </div>
        <ul className={styles.category_dropdown}>
          {categories.map(category => (
            <li
              key={category.id}
              onClick={() => {
                if (searchCategory === category.name) {
                  setSearchCategory('');
                } else {
                  setSearchCategory(category.name);
                }
              }}
            >
              <FontAwesomeIcon className={styles.icon} icon={faListUl} />
              <div className={styles.category_item}>{category.name}</div>
            </li>
          ))}
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div
        className={clsx(
          styles.searchField,
          'col-12',
          'col-sm-6',
          'order-1',
          'order-sm-2'
        )}
      >
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
