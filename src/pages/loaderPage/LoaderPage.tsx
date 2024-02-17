import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import styles from './LoaderPage.module.scss';

export const LoaderPage = () => {
  const navigate = useNavigate();

  const action = () => {
    navigate('../email/');
  };

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader}>
        <Loader action={action} />
        <p className={styles.loader__description}>
          Finding collections for you...
        </p>
      </div>
    </div>
  );
};
