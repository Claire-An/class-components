import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import styles from './notFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper}>
      <p
        className={[
          styles.title,
          theme === 'dark' ? styles.titleDark : '',
        ].join(' ')}
      >
        Страница не найдена
      </p>
    </div>
  );
};

export default NotFoundPage;
