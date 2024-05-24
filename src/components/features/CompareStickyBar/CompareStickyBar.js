import React from 'react';
import styles from './CompareStickyBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCompares, toggleCompareProduct } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const CompareStickyBar = () => {
  const dispatch = useDispatch();

  const getCompareProducts = useSelector(state => getCompares(state));

  const handleRemoveCompare = (e, product) => {
    e.preventDefault();
    dispatch(toggleCompareProduct(product.id));
  };

  if (getCompareProducts.length === 0) {
    return null;
  } else
    return (
      <div className={styles.container}>
        {getCompareProducts.map(product => (
          <div
            key={product.id}
            className={styles.compareImg}
            onClick={e => handleRemoveCompare(e, product)}
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <Button className={styles.removeBtn}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        ))}
        <Button className={styles.compareBtn}>Compare</Button>
      </div>
    );
};

export default CompareStickyBar;
