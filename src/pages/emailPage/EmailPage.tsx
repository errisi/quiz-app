import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmailPage.module.scss';
import { Button } from '../../components/Button/Button';

export const EmailPage = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.email_page}>
      <div className={styles.email_page__content}>
        <div className={styles.email_page__content__text}>
          <h1 className={styles.email_page__content__text__title}>
            Email Page
          </h1>
          <p className={styles.email_page__content__text__hint}>
            Enter your email to get full access
          </p>
        </div>

        <input
          value={query}
          onChange={handleQueryChange}
          className={styles.input}
          placeholder='Your email'
        />

        <p className={styles.email_page__content__agreement}>
          By continuing I agree with{' '}
          <span className={styles.email_page__content__agreement_span}>
            Privacy policy
          </span>{' '}
          and{' '}
          <span className={styles.email_page__content__agreement_span}>
            Terms of use.
          </span>
        </p>
      </div>

      <Button onClick={() => navigate('../success')}>Next</Button>
    </div>
  );
};
