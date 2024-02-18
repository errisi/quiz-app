import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './EmailPage.module.scss';
import { Button } from '../../components/Button/Button';

export const EmailPage = () => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const formatAgreementWithSpan = (text: string, className: string) => {
    return text.replace(
      /\b(Privacy policy|Terms of use)\b/gi,
      `<span class="${className}">$1</span>`,
    );
  };

  const formattedAgreement = formatAgreementWithSpan(
    t('email.agreement'),
    styles.email_page__content__agreement_span,
  );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.email_page}>
      <div className={styles.email_page__content}>
        <div className={styles.email_page__content__text}>
          <h1 className={styles.email_page__content__text__title}>
            {t('email.title')}
          </h1>
          <p className={styles.email_page__content__text__hint}>
            {t('email.hint')}
          </p>
        </div>

        <input
          value={query}
          onChange={handleQueryChange}
          className={styles.input}
          placeholder={t('email.placeholder')}
        />

        <p
          className={styles.email_page__content__agreement}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: formattedAgreement }}
        />
      </div>

      <Button onClick={() => navigate('../success')}>{t('button.next')}</Button>
    </div>
  );
};
