import { FC } from 'react';
import { Question } from '../../../types/Question';
import styles from './QuizContent.module.scss';
import { SingleSelect } from './Selectors/SingleSelect/SingleSelect';
import { MultipleSelect } from './Selectors/MultipleSelect/MultipleSelect';
import { BubbleSelect } from './Selectors/Bubble/BubbleSelect';
import { SingleSelectImage } from './Selectors/SingleSelectImage/SingleSelectImage';

type Props = {
  question: Question;
  goForward: (answer: string) => void;
};

export const QuizContent: FC<Props> = ({ question, goForward }) => {
  const formatTitle = (title: string) => {
    return title.replace(
      /\b(hate)\b/gi,
      `<span class="${styles.quiz__content__description__title_span}">$1</span>`,
    );
  };

  const titleWithSpan = formatTitle(question.title);

  const currentAction = () => {
    switch (question.type) {
      case 'single-select':
        return <SingleSelect question={question} goForward={goForward} />;
        break;

      case 'single-select-image':
        return <SingleSelectImage question={question} goForward={goForward} />;

      case 'multiple-select':
        return <MultipleSelect question={question} goForward={goForward} />;

      case 'bubble':
        return <BubbleSelect question={question} goForward={goForward} />;

      default:
        return <SingleSelectImage question={question} goForward={goForward} />;
    }
  };

  return (
    <div className={styles.quiz__content}>
      <div className={styles.quiz__content__description}>
        <h1
          className={styles.quiz__content__description__title}
          dangerouslySetInnerHTML={{ __html: titleWithSpan }}
        />
        <p className={styles.quiz__content__description__hint}>
          {question.hint}
        </p>
      </div>

      {currentAction()}
    </div>
  );
};
