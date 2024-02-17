import styles from './LoaderPage.module.scss';
import { Loader } from '../../components/Loader/Loader';

export const LoaderPage = () => (
  <div className={styles.loader__wrapper}>
    <div className={styles.loader}>
      <Loader />
      <p className={styles.loader__description}>
        Finding collections for you...
      </p>
    </div>
  </div>
);
