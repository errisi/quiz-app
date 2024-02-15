import { useCallback, useState } from 'react';
import styles from './QuizPage.module.scss';

export const QuizPage = () => {
  const [page, setPage] = useState(1);
  const MaxPage = 5;

  const handleGoBack = useCallback(() => {
    setPage((c) => (c - 1 >= 0 ? c - 1 : c));
  }, [setPage]);

  const handleGoForward = useCallback(() => {
    setPage((c) => (c + 1 <= MaxPage ? c + 1 : c));
  }, [setPage]);

  const selectItems = [
    '1',
    '2',
    '123123123123',
    'asdasfdjhsagfdddddddddddddddddddddsdkfghsdfgkj',
  ];

  return (
    <div className={styles.quiz}>
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
            <span className={styles.quiz__header__top__pages__page}>
              {page}
            </span>
            <span className={styles.quiz__header__top__pages__max_page}>
              /{MaxPage}
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
              style={{ width: `${(page / MaxPage) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className={styles.quiz__content}>
        <div className={styles.quiz__content__description}>
          <h1 className={styles.quiz__content__description__title}>
            What is your preferred language?
          </h1>
          <p className={styles.quiz__content__description__hint}>
            Choose language
          </p>
        </div>

        <div className={styles.quiz__content__actions}>
          <div className={styles.select}>
            {selectItems.map((item) => (
              <div className={styles.select__item}>
                <p className={styles.select__item__text}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
