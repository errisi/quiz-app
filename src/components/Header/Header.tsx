/* eslint-disable operator-linebreak */
import { FC } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppSelector } from '../../store/hooks';

export const Header: FC = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromParams = searchParams.get('page') || '1';

  const page = Number(pageFromParams);

  const { questions } = useAppSelector((state) => state.Questions);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoForward = () => {
    setSearchParams(`?page=${page + 1 <= questions.length ? page + 1 : page}`);
  };

  return (
    <div className={styles.quiz__header}>
      <div className={styles.quiz__header__top}>
        <button
          aria-label='nav__button'
          type='button'
          onClick={handleGoBack}
          disabled={
            location.pathname !== '/quiz/' ||
            (location.pathname === '/quiz/' && page <= 2)
          }
          className={styles.quiz__header__top__button}
        >
          <img
            src='/back-button.svg'
            alt=''
            className={styles.quiz__header__top__button__icon}
          />
        </button>
        {location.pathname === '/quiz/' && (
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
          onClick={handleGoForward}
          className={styles.quiz__header__top__button}
        >
          <img
            src='/button.svg'
            alt=''
            className={styles.quiz__header__top__button__icon}
          />
        </button>
      </div>

      {location.pathname === '/quiz/' && (
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
