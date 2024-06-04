import React, { useState } from 'react';
import { getNew } from '../../../redux/productsRedux.js';
import { useSelector } from 'react-redux';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import styles from './Promoted.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';

const Promoted = () => {
  const promotedProducts = useSelector(state => getNew(state).slice(0, 5));
  const [currentPromoted, setCurrentPromoted] = useState(0);

  const maxVisibleDotsBefore = 2;
  const maxVisibleDotsAfter = 2;
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

  const swipeRight = () => {
    if (currentPromoted > 0) {
      setCurrentPromoted(currentPromoted - 1);
    }
  };

  const swipeLeft = () => {
    if (currentPromoted < promotedProducts.length - 1) {
      setCurrentPromoted(currentPromoted + 1);
    }
  };

  return (
    <div className='container pt-4'>
      <div className='row'>
        <div
          className='
            col-12
            col-md-4
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
                d-none
                d-md-block
                ${styles.deals}
              `}
            >
              HOT DEALS
            </div>
            <div
              className={`
                bg-dark
                m-0
                py-3
                py-md-0
                col-12
                col-md-4
                d-flex
                flex-row
                align-items-center
                justify-content-around
                ${styles.dots}
              `}
            >
              {dots}
            </div>
          </div>
          <Swipeable leftAction={swipeLeft} rightAction={swipeRight}>
            <div
              className='
                h-100
                p-0
                m-0'
            >
              <PromotedProductBox {...promotedProducts[currentPromoted]} />
            </div>
          </Swipeable>
        </div>

        <div
          className='
            col-12
            col-md-8
            row
            d-flex
            flex-row
            p-0
            m-0
            pl-0
            pl-md-4
            pt-4
            pt-md-0'
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
                'col-6 pt-0 fs-3 m-0 d-flex justify-content-center align-items-center text-center ' +
                styles.leftRight
              }
            >
              <h1>&lt;</h1>
            </div>
            <div
              className={
                'col-6 pt-0 fs-3 m-0 d-flex justify-content-center align-items-center text-center ' +
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
