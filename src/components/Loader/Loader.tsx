import { FC, useEffect, useState } from 'react';
import styles from './Loader.module.scss';

type Props = {
  duration?: number;
};

export const Loader: FC<Props> = ({ duration = 5 }) => {
  const [percentage, setPercentage] = useState(0);

  const strokeWidth = 12;
  const square = 252;
  const radius = (square - strokeWidth) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  useEffect(() => {
    const totalIncrements = 100;
    const incrementsPerSecond = totalIncrements / duration;
    const roundedIncrementsPerSecond = Math.ceil(incrementsPerSecond);

    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage += 1;
      setPercentage(Math.min(currentPercentage, 100));
      if (currentPercentage >= 100) {
        clearInterval(interval);
      }
    }, 1000 / roundedIncrementsPerSecond);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <svg width={square} height={square} viewBox={`0 0 ${square} ${square}`}>
      <circle
        cx={square / 2}
        cy={square / 2}
        strokeWidth={strokeWidth}
        r={radius}
        className={styles.circle__background}
      />
      <circle
        cx={square / 2}
        cy={square / 2}
        strokeWidth={strokeWidth}
        r={radius}
        className={styles.circle__progress}
        style={{
          transition: 'all 0.4s ease-out',
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text className={styles.circle__text}>
        <tspan
          x='50%'
          y='50%'
          dy='0.3em'
          textAnchor='middle'
          className={styles.circle__text}
        >
          {`${percentage}%`}
        </tspan>
      </text>
    </svg>
  );
};
