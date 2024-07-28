import { useCallback, useContext, useEffect, useState } from 'react';
import ButtonSearch from '../../components/buttonSearch/buttonSearch';
import CardList from '../../components/card/CardList';
import InputSearch from '../../components/inputSearch/inputSearch';
import { ThemeContext } from '../../providers/ThemeProvider';
import { getData } from '../../redux/api';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('textSearch') || '');
  const [valueSearch, setValueSearch] = useState(
    localStorage.getItem('textSearch') || '',
  );
  const [hasError, setHasError] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = getData.useGetDataApiQuery({
    page: currentPage,
    name: valueSearch,
  });
  const prefetchPage = getData.usePrefetch('getDataApi');

  const prefetchNext = useCallback(() => {
    prefetchPage({ page: currentPage + 1 });
  }, [prefetchPage, currentPage]);

  useEffect(() => {
    if (currentPage !== data?.info.pages) {
      prefetchNext();
    }
  }, [currentPage, prefetchNext, data?.info.pages]);

  if (isLoading) return <h1>Loading...</h1>;

  const handleInputChange = (val: string) => {
    setValue(val);
  };

  const handleButtonClick = async (): Promise<void> => {
    setValueSearch(value);
  };

  const handleButtonErrorClick = (): void => {
    setHasError(true);
  };

  const handleButtonTheme = (): void => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
  };

  if (hasError) {
    throw new Error('ErrorBoundary error');
  }

  return (
    <div
      className={[
        styles.wrapper,
        theme === 'dark' ? styles.wrapperDark : '',
      ].join(' ')}
    >
      <div className={styles.header}>
        <div className={styles.searchBlock}>
          <InputSearch onHandleChange={handleInputChange} textSearch={value} />
          <ButtonSearch onButtonClick={handleButtonClick} value={valueSearch} />
          <button onClick={handleButtonErrorClick} className={styles.button}>
            Ошибка
          </button>
        </div>
        <div>
          <button
            onClick={handleButtonTheme}
            className={styles.button}
            data-testid="buttonTheme"
          >
            Сменить тему
          </button>
        </div>
      </div>
      {data?.results && data.results.length > 0 ? (
        <>
          <CardList cards={data.results} />
          <div className={styles.pagination}>
            <button
              className={styles.arrow}
              onClick={() => setCurrentPage(() => currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>
            {currentPage && data.info.pages && (
              <span
                className={[
                  styles.pages,
                  theme === 'dark' ? styles.pagesDark : '',
                ].join(' ')}
              >
                {currentPage} / {data.info.pages}
              </span>
            )}
            <button
              className={styles.arrow}
              onClick={() => setCurrentPage(() => currentPage + 1)}
              disabled={currentPage === data.info.pages}
              onMouseEnter={prefetchNext}
            >
              {'>'}
            </button>
          </div>
        </>
      ) : (
        <div
          className={[
            styles.notFound,
            theme === 'dark' ? styles.notFoundDark : '',
          ].join(' ')}
        >
          Данные не найдены
        </div>
      )}
    </div>
  );
};

export default HomePage;
