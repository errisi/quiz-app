import { FC } from 'react';
import styles from './SingleSelect.module.scss';
import { Question } from '../../../../../types/Question';

type Props = {
  question: Question;
  handleGoForward: (answer: string) => void;
};

export const SingleSelect: FC<Props> = ({ question, handleGoForward }) => (
  <div className={styles.select}>
    {question.options.map((option) => (
      <button
        onClick={() => handleGoForward(option.value)}
        aria-label=''
        type='button'
        className={styles.select__item}
      >
        <p className={styles.select__item__text}>{option.value}</p>
      </button>
    ))}
  </div>
);
