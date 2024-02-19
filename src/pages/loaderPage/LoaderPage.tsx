import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../components/Loader/Loader';
import styles from './LoaderPage.module.scss';

export const LoaderPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const onFinish = () => {
    navigate('../email/');
  };

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader}>
        <Loader onFinish={onFinish} />
        <p className={styles.loader__description}>{t('loader.hint')}</p>
      </div>
    </div>
  );
};
