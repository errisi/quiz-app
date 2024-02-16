/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import styles from './QuizPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as QuestionsActions from '../../features/Questions';
import { QuizHeader } from '../../components/Quiz/QuizHeader/QuizHeader';
import { QuizContent } from '../../components/Quiz/QuizContent/QuizContent';

export const QuizPage = () => {
  const dispatch = useAppDispatch();

  const { questions, loading, error } = useAppSelector(
    (state) => state.Questions,
  );

  const [page, setPage] = useState(1);
  const currentQuestion = questions[page - 1];

  const handleGoBack = useCallback(() => {
    setPage((c) => (c - 1 > 0 ? c - 1 : c));
  }, [setPage]);

  const handleGoForward = useCallback(() => {
    setPage((c) => (c + 1 <= questions.length ? c + 1 : c));
  }, [questions.length]);

  useEffect(() => {
    dispatch(QuestionsActions.init());
  }, []);

  return (
    <>
      {loading && <h1>Loading</h1>}

      {error && <h1>Error: {error} </h1>}

      {questions.length > 0 && !loading && !error && (
        <div className={styles.quiz}>
          <QuizHeader
            handleGoBack={handleGoBack}
            handleGoForward={handleGoForward}
            page={page}
            maxPage={questions.length}
          />

          <QuizContent
            question={currentQuestion}
            handleGoForward={handleGoForward}
          />
        </div>
      )}
    </>
  );
};
