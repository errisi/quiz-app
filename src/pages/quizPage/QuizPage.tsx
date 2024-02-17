/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './QuizPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as QuestionsActions from '../../features/Questions';
import { QuizContent } from '../../components/Quiz/QuizContent/QuizContent';

export const QuizPage = () => {
  const dispatch = useAppDispatch();

  const { questions, loading, error } = useAppSelector(
    (state) => state.Questions,
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromParams = searchParams.get('page') || '1';

  const page = Number(pageFromParams);

  const navigate = useNavigate();

  const handleGoForward = () => {
    if (page !== questions.length) {
      setSearchParams(
        `?page=${page + 1 <= questions.length ? page + 1 : page}`,
      );

      return;
    }

    navigate('../loader/');
  };

  const currentQuestion = questions[page - 1];

  useEffect(() => {
    dispatch(QuestionsActions.init());
  }, []);

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
