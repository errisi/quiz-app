import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};
export const Button: FC<Props> = ({ children, onClick, disabled }) => (
  <button
    type='button'
    aria-label='button'
    onClick={onClick}
    className={styles.button}
    disabled={disabled}
  >
    {children}
  </button>
);
