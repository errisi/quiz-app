import { FC } from 'react';
import styles from './QuizHeader.module.scss';

type Props = {
  handleGoBack: () => void;
  handleGoForward: () => void;
  page: number;
  maxPage: number;
};

export const QuizHeader: FC<Props> = ({
  handleGoBack,
  handleGoForward,
  page,
  maxPage,
}) => (
  <div className={styles.quiz__header}>
    <div className={styles.quiz__header__top}>
      <button
        aria-label='nav__button'
        type='button'
        onClick={handleGoBack}
        className={styles.quiz__header__top__button}
      >
        <img
          src='back-button.svg'
          alt=''
          className={styles.quiz__header__top__button__icon}
        />
      </button>
      <div className={styles.quiz__header__top__pages}>
        <span className={styles.quiz__header__top__pages__page}>{page}</span>
        <span className={styles.quiz__header__top__pages__max_page}>
          /{maxPage}
        </span>
      </div>
      <button
        aria-label='nav__button'
        type='button'
        onClick={handleGoForward}
        className={styles.quiz__header__top__button}
      >
        <img
          src='button.svg'
          alt=''
          className={styles.quiz__header__top__button__icon}
        />
      </button>
    </div>

    <div className={styles.quiz__progress__wrapper}>
      <div className={styles.quiz__progress}>
        <div
          className={styles.quiz__progress__value}
          style={{ width: `${(page / maxPage) * 100}%` }}
        />
      </div>
    </div>
  </div>
);
