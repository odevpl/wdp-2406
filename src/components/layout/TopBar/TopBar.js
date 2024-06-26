import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={`
          col-8
          col-sm-6
          text-left
          ${styles.topOptions}
        `}
        >
          <ul>
            <li>
              <a href='#'>
                USD
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                English
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='#'>
                Help
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`
            col-4
            col-sm-6
            text-right
            ${styles.topMenu}
          `}
        >
          <ul>
            <li className={`ml-0`}>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <span
                  className='
                    d-none
                    d-sm-inline
                  '
                >
                  Login
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <span
                  className='
                    d-none
                    d-sm-inline
                '
                >
                  Register
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
