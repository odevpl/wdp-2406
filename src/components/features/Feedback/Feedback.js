import React from 'react';
import styles from './Feedback.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedbacks = useSelector(state => state.feedbacks);

  const feedbackCount = 3;
  const feedbackActive = 0;

  const dots = [];
  for (let i = 0; i < feedbackCount; i++) {
    dots.push(
      <li key={i}>
        <a className={i === feedbackActive && styles.active}>{i}</a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end flex-column flex-md-row'>
            <div className={'col ' + styles.heading}>
              <h1>CLIENT FEEDBACK</h1>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        {feedbacks.map(feedback => (
          <div key={feedback.id} className={styles.feedbackBox}>
            <div className={styles.quote}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <p className={styles.feedbackText}>{feedback.text}</p>
            <div className={'row justify-content-center flex-row ' + styles.clientBox}>
              <div className={styles.imageBox}>
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.clientDescription}>
                <span className={styles.bold}>{feedback.name}</span>
                <br></br>
                <span>{feedback.occupation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
