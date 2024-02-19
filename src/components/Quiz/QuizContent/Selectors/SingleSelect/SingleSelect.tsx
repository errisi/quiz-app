import { FC } from 'react';
import styles from './SingleSelect.module.scss';
import { Question } from '../../../../../types/Question';

type Props = {
  question: Question;
  goForward: (answer: string) => void;
};

export const SingleSelect: FC<Props> = ({ question, goForward }) => (
  <div className={styles.select}>
    {question.options.map((option) => (
      <button
        key={option.value}
        onClick={() => goForward(option.value)}
        aria-label='next'
        type='button'
        className={styles.select__item}
      >
        <p className={styles.select__item__text}>{option.value}</p>
      </button>
    ))}
  </div>
);
