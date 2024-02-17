import { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
