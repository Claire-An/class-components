import styles from './notFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Страница не найдена</p>
    </div>
  );
};

export default NotFoundPage;
