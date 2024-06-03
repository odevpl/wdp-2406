import React, { useState } from 'react';
import { getNew } from '../../../redux/productsRedux.js';
import { useSelector } from 'react-redux';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import styles from './Promoted.module.scss';

const Promoted = () => {
  const promotedProducts = useSelector(state => getNew(state).slice(0, 5));
  const [currentPromoted, setCurrentPromoted] = useState(0);

  const maxVisibleDotsBefore = 1;
  const maxVisibleDotsAfter = 3;
  const firstVisibleDot = Math.max(currentPromoted - maxVisibleDotsBefore, 0);
  const lastVisibleDot = Math.min(
    currentPromoted + maxVisibleDotsAfter,
    promotedProducts.length - 1
  );

  const dots = [];
  for (let i = 0; i < promotedProducts.length; i++) {
    if (firstVisibleDot <= i && i <= lastVisibleDot) {
      dots.push(
        <li key={`dot-${i}`}>
          <a
            onClick={() => setCurrentPromoted(i)}
            className={i === currentPromoted ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div
          className='
            col-4
            d-flex
            flex-column
            p-0
            m-0'
        >
          <div
            className='
              d-flex
              row
              align-items-center
              bg-dark
              py-2
              m-0'
          >
            <div
              className={`
                bg-dark
                col-8
                fw-bold
                ${styles.deals}
              `}
            >
              HOT DEALS
            </div>
            <div
              className={`
                bg-dark
                col-4
                d-flex
                flex-row
                align-items-center
                justify-content-around
                m-0
                ${styles.dots}
              `}
            >
              {dots}
            </div>
          </div>
          <div
            className='
              h-100
              p-0
              m-0'
          >
            <PromotedProductBox {...promotedProducts[currentPromoted]} />
          </div>
        </div>

        <div
          className='
            col-8
            row
            d-flex
            flex-row
            p-0
            m-0
            pl-4'
        >
          <div
            className='
              col-12
              w-100
              position-relative
              p-0
              m-0'
          >
            <img
              className={styles.img_cover}
              src={process.env.PUBLIC_URL + '/images/beds/bed-2.jpg'}
              alt='banner'
            />
            <div className={styles.middleShadow}></div>
            <div className={styles.shop}>
              <span>SHOP NOW</span>
            </div>
            <div className={styles.bannerText}>
              <p>
                <span className={styles.shadow}>INDOOR</span>
                <span className={styles.noshadow}>FURNITURE</span>
              </p>
              <p className={styles.promo}>SAVE UP TO 50% OF ALL FURNITURE</p>
            </div>
          </div>
          <div
            className='
              col-12
              row
              d-flex
              flex-row
              p-0
              m-0'
          >
            <div
              className={
                'col-6 pt-1 fs-4 m-0 d-flex justify-content-center align-items-center text-center ' +
                styles.leftRight
              }
            >
              <h1>&lt;</h1>
            </div>
            <div
              className={
                'col-6 pt-1 fs-4 m-0 d-flex justify-content-center align-items-center text-center ' +
                styles.leftRight
              }
            >
              <h1>&gt;</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
