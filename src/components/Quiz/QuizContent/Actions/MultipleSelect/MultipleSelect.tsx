import { FC, useState } from 'react';
import { Question } from '../../../../../types/Question';
import styles from './MultipleSelect.module.scss';
import { Button } from '../../../../Button/Button';

type Props = {
  question: Question;
  handleGoForward: () => void;
};

export const MultipleSelect: FC<Props> = ({ question, handleGoForward }) => {
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
      <div className={styles.select}>
        {question.options.map((option) => (
          <button
            onClick={() => handleToggleCheckbox(option)}
            aria-label=''
            type='button'
            className={
              selectedOptions.includes(option)
                ? styles.select__item_active
                : styles.select__item
            }
          >
            <div className={styles.select__item__content}>
              <p className={styles.select__item__content__text}>{option}</p>
              <div
                className={
                  selectedOptions.includes(option)
                    ? styles.select__item__content__checkbox_checked
                    : styles.select__item__content__checkbox
                }
              >
                <div
                  className={
                    styles.select__item__content__checkbox_checked__mark
                  }
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      <Button onClick={handleGoForward} disabled={!selectedOptions.length}>
        Next
      </Button>
    </div>
  );
};
