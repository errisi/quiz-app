import { FC } from 'react';
import { Question } from '../../../types/Question';
import styles from './QuizContent.module.scss';
import { SingleSelect } from './Actions/SingleSelect/SingleSelect';
import { SingleSelectImage } from './Actions/SingleSelectImage';
import { MultipleSelect } from './Actions/MultipleSelect/MultipleSelect';
import { BubbleSelect } from './Actions/Bubble/BubbleSelect';

type Props = {
  question: Question;
  handleGoForward: (answer: string) => void;
};

export const QuizContent: FC<Props> = ({ question, handleGoForward }) => {
  const formatTitle = (title: string) => {
    return title.replace(
      /\b(hate)\b/gi,
      `<span class="${styles.quiz__content__description__title_span}">$1</span>`,
    );
  };

  const titleWithSpan = formatTitle(question.title);

  return (
    <div className={styles.quiz__content}>
      <div className={styles.quiz__content__description}>
        <h1
          className={styles.quiz__content__description__title}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: titleWithSpan }}
        />
        <p className={styles.quiz__content__description__hint}>
          {question.hint}
        </p>
      </div>

      {question.type === 'single-select' && (
        <SingleSelect question={question} handleGoForward={handleGoForward} />
      )}

      {question.type === 'single-select-image' && (
        <SingleSelectImage
          question={question}
          handleGoForward={handleGoForward}
        />
      )}

      {question.type === 'multiple-select' && (
        <MultipleSelect question={question} handleGoForward={handleGoForward} />
      )}

      {question.type === 'bubble' && (
        <BubbleSelect question={question} handleGoForward={handleGoForward} />
      )}
    </div>
  );
};
