import { FC } from 'react';
import { Question } from '../../../../../types/Question';
import styles from './SingleSelectImage.module.scss';

type Props = {
  question: Question;
  handleGoForward: (answer: string) => void;
};

export const SingleSelectImage: FC<Props> = ({ question, handleGoForward }) => (
  <div className={styles.select}>
    {question.options.map((option) => (
      <button
        onClick={() => handleGoForward(option.value)}
        aria-label=''
        type='button'
        className={styles.select__item}
      >
        {!!option.icon && (
          <img className={styles.select__item__icon} src={option.icon} alt='' />
        )}
        <p className={styles.select__item__text}>{option.value}</p>
      </button>
    ))}
  </div>
);
