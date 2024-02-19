import { FC } from 'react';
import { Question } from '../../../../../types/Question';
import styles from './SingleSelectImage.module.scss';

type Props = {
  question: Question;
  goForward: (answer: string) => void;
};

export const SingleSelectImage: FC<Props> = ({ question, goForward }) => (
  <div className={styles.select}>
    {question.options.map((option) => (
      <button
        key={option.value}
        onClick={() => goForward(option.value)}
        aria-label='next'
        type='button'
        className={styles.select__item}
      >
        {!!option.icon && (
          <img
            className={styles.select__item__icon}
            src={option.icon}
            alt='icon'
          />
        )}
        <p className={styles.select__item__text}>{option.value}</p>
      </button>
    ))}
  </div>
);
