/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './QuizPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as QuestionsActions from '../../features/Questions';
import * as AnswersActions from '../../features/Answers';
import * as LocaleActions from '../../features/Locale';
import { QuizContent } from '../../components/Quiz/QuizContent/QuizContent';

export const QuizPage = () => {
  const dispatch = useAppDispatch();

  const { questions, loading, error } = useAppSelector(
    (state) => state.Questions,
  );

  const { answers } = useAppSelector((state) => state.Answers);

  const { lang } = useAppSelector((state) => state.Locale);

  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromParams = searchParams.get('page') || '1';

  const page = Number(pageFromParams);

  const navigate = useNavigate();

  const currentQuestion = questions[page - 1];

  useEffect(() => {
    dispatch(QuestionsActions.init(lang));
  }, [lang]);

  useEffect(() => {
    if (answers[0] && page === 2) {
      switch (answers[0].answer) {
        case 'Enlish':
          dispatch(LocaleActions.set('en'));
          break;

        case 'French':
          dispatch(LocaleActions.set('fr'));
          break;

        case 'German':
          dispatch(LocaleActions.set('de'));
          break;

        case 'Spanish':
          dispatch(LocaleActions.set('es'));
          break;

        default:
          dispatch(LocaleActions.set('en'));
      }
    }
  }, [answers]);

  useEffect(() => {
    if (answers && currentQuestion) {
      if (answers.find((a) => a.title === currentQuestion.title)) {
        const newAnswers = answers.filter(
          (a) => a.title !== currentQuestion.title,
        );

        dispatch(AnswersActions.set(newAnswers));
      }
    }
  }, [page]);

  const handleGoForward = (answer: string) => {
    dispatch(
      AnswersActions.set([
        ...answers,
        {
          title: currentQuestion.title,
          type: currentQuestion.type,
          answer,
        },
      ]),
    );

    if (page !== questions.length) {
      setSearchParams(
        `?page=${page + 1 <= questions.length ? page + 1 : page}`,
      );

      return;
    }

    navigate('../loader/');
  };

  return (
    <>
      {loading && <h1>Loading</h1>}

      {error && <h1>Error: {error} </h1>}

      {questions.length > 0 && !loading && !error && (
        <div className={styles.quiz}>
          <QuizContent
            question={currentQuestion}
            handleGoForward={handleGoForward}
          />
        </div>
      )}
    </>
  );
};
