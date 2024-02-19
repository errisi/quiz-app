import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import exportFromJSON from 'export-from-json';
import * as AnswersActions from '../../store/reducers/Answers';
import { Button } from '../../components/Button/Button';
import styles from './SuccessPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const SuccessPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRetakeQuiz = () => {
    dispatch(AnswersActions.set([]));
    navigate('../quiz/');
  };

  const { answers } = useAppSelector((state) => state.Answers);

  const onExport = () => {
    const fileName = 'answers';
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: answers, fileName, exportType });
  };

  return (
    <div className={styles.success}>
      <div className={styles.success__content}>
        <div className={styles.success__content__text}>
          <h1 className={styles.success__content__text__title}>
            {t('success.title')}
          </h1>
          <p className={styles.success__content__text__hint}>
            {t('success.hint')}
          </p>
        </div>
        <img
          src='/success-mark.svg'
          alt='success-mark'
          className={styles.success__content__mark}
        />
      </div>

      <div className={styles.success__actions}>
        <button
          type='button'
          onClick={onExport}
          className={styles.success__actions__download}
        >
          <img src='./download-icon.svg' alt='download-icon' />
          {t('success.download')}
        </button>
        <Button onClick={handleRetakeQuiz}>{t('button.retake')}</Button>
      </div>
    </div>
  );
};
