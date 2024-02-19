/* eslint-disable operator-linebreak */
import { FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppSelector } from '../../store/hooks';

export const Header: FC = () => {
  const location = useLocation();

  const { page: pageFromParams } = useParams();

  const page = Number(pageFromParams || '1');

  const { questions } = useAppSelector((state) => state.Questions);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.quiz__header}>
      <div className={styles.quiz__header__top}>
        <button
          aria-label='nav__button'
          type='button'
          onClick={handleGoBack}
          disabled={
            location.pathname.split('/')[1] !== 'quiz' ||
            (location.pathname.split('/')[1] === 'quiz' && page <= 2)
          }
          className={styles.quiz__header__top__button}
        >
          <img
            src='./back-button.svg'
            alt=''
            className={styles.quiz__header__top__button__icon}
          />
        </button>
        {location.pathname.split('/')[1] === 'quiz' && (
          <div className={styles.quiz__header__top__pages}>
            <span className={styles.quiz__header__top__pages__page}>
              {page}
            </span>
            <span className={styles.quiz__header__top__pages__max_page}>
              /{questions.length}
            </span>
          </div>
        )}
        <button
          aria-label='nav__button'
          type='button'
          className={styles.quiz__header__top__button}
        >
          <img
            src='./button.svg'
            alt=''
            className={styles.quiz__header__top__button__icon}
          />
        </button>
      </div>

      {location.pathname.split('/')[1] === 'quiz' && (
        <div className={styles.quiz__progress__wrapper}>
          <div className={styles.quiz__progress}>
            <div
              className={styles.quiz__progress__value}
              style={{ width: `${(page / questions.length) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
