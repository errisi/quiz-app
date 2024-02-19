import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './QuizPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as QuestionsActions from '../../store/reducers/Questions';
import * as AnswersActions from '../../store/reducers/Answers';
import * as LocaleActions from '../../store/reducers/Locale';
import { QuizContent } from '../../components/Quiz/QuizContent/QuizContent';

export const QuizPage = () => {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();

  const { questions, loading, error } = useAppSelector(
    (state) => state.Questions,
  );

  const { answers } = useAppSelector((state) => state.Answers);

  const { lang } = useAppSelector((state) => state.Locale);

  const { page: pageFromParams } = useParams();

  const page = Number(pageFromParams || '1');

  const navigate = useNavigate();

  const currentQuestion = questions[page - 1];

  useEffect(() => {
    dispatch(QuestionsActions.init(lang));
    i18n.changeLanguage(lang);
  }, [dispatch, i18n, lang]);

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

  const goForward = (answer: string) => {
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
      navigate(`../../quiz/${page + 1}`);

      return;
    }

    navigate('../../loader/');
  };

  const isContentReady = questions.length > 0 && !loading && !error;

  return (
    <>
      {loading && <h1>Loading</h1>}

      {error && <h1>Error: {error} </h1>}

      {isContentReady && (
        <div className={styles.quiz}>
          <QuizContent question={currentQuestion} goForward={goForward} />
        </div>
      )}
    </>
  );
};
