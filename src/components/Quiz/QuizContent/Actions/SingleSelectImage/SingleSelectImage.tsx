import { FC } from 'react';
import { Question } from '../../../../../types/Question';
import styles from './SingleSelectImage.module.scss';

type Props = {
  question: Question;
  handleGoForward: () => void;
};

export const SingleSelectImage: FC<Props> = ({ question, handleGoForward }) => (
  <div className={styles.select}>
    {question.options.map((option) => (
      <button
        onClick={handleGoForward}
        aria-label=''
        type='button'
        className={styles.select__item}
      >
        <p className={styles.select__item__text}>{option}</p>
      </button>
    ))}
  </div>
);
