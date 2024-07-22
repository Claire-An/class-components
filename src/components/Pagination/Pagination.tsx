import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import styles from './Pagination.module.scss';

interface PaginationProps {
  leftDisable: boolean;
  rightDisable: boolean;
  current?: number;
  total?: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const Pagination = (props: PaginationProps) => {
  const {
    current = null,
    total = null,
    leftDisable,
    rightDisable,
    onNextClick,
    onPrevClick,
  } = props;
  const { theme } = useContext(ThemeContext);

  const handleNextClick = () => {
    onNextClick();
  };
  const handlePrevClick = () => {
    onPrevClick();
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={handlePrevClick}
        disabled={leftDisable}
      >
        {'<'}
      </button>
      {current && total && (
        <span
          className={[
            styles.pages,
            theme === 'dark' ? styles.pagesDark : '',
          ].join(' ')}
        >
          {current} / {total}
        </span>
      )}
      <button
        className={styles.arrow}
        onClick={handleNextClick}
        disabled={rightDisable}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
