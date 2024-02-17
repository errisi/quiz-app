import { FC, useState } from 'react';
import { Question } from '../../../../../types/Question';
import styles from './BubbleSelect.module.scss';
import { Button } from '../../../../Button/Button';

type Props = {
  question: Question;
  handleGoForward: () => void;
};

export const BubbleSelect: FC<Props> = ({ question, handleGoForward }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleToggleCheckbox = (option: string) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option],
    );
  };

  return (
    <div className={styles.actions__wrapper}>
      <div className={styles.select__wrapper}>
        <div className={styles.select}>
          {question.options.map((option) => (
            <button
              onClick={() => handleToggleCheckbox(option.value)}
              aria-label=''
              type='button'
              className={
                selectedOptions.includes(option.value)
                  ? styles.select__item_active
                  : styles.select__item
              }
            >
              {!!option.icon && (
                <img
                  className={styles.select__item__icon}
                  src={option.icon}
                  alt=''
                />
              )}
              <p className={styles.select__item__text}>{option.value}</p>
            </button>
          ))}
        </div>
      </div>

      <Button onClick={handleGoForward} disabled={!selectedOptions.length}>
        Next
      </Button>
    </div>
  );
};
