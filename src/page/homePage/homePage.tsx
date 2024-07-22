import { useCallback, useContext, useEffect, useState } from 'react';
import { getData } from '../../api';
import { Character, Info } from '../../api/types';
import ButtonSearch from '../../components/buttonSearch/buttonSearch';
import CardList from '../../components/card/CardList';
import InputSearch from '../../components/inputSearch/inputSearch';
import Pagination from '../../components/Pagination/Pagination';
import { ThemeContext } from '../../providers/ThemeProvider';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('textSearch') || '');
  const [data, setData] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [leftDisable, setLeftDisable] = useState(true);
  const [rightDisable, setRightDisable] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleInputChange = (val: string) => {
    setValue(val);
  };

  const getCharacter = useCallback(async () => {
    if (value === localStorage.getItem('textSearch')) {
      const dataCharacter = await getData(value, currentPage);
      if (dataCharacter?.data) {
        setData(dataCharacter.data);
      } else {
        setData([]);
      }
      if (dataCharacter?.info) {
        setInfo(dataCharacter.info);
      } else {
        setData([]);
      }
    }
  }, [currentPage, value]);

  const disableButton = useCallback(() => {
    setLeftDisable(currentPage === 1);
    setRightDisable(currentPage === info?.pages);
  }, [currentPage, info?.pages]);

  useEffect(() => {
    getCharacter();
    disableButton();
  }, [disableButton, getCharacter]);

  const handleButtonClick = async (val: {
    data: Character[];
    info: Info;
  }): Promise<void> => {
    setCurrentPage(1);
    setData(val.data);
    setInfo(val.info);
    disableButton();
  };

  const handleButtonErrorClick = (): void => {
    setHasError(true);
  };

  const handleButtonTheme = (): void => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
  };

  const handleNextClick = useCallback(() => {
    const next = currentPage + 1;
    if (info?.pages && next < info.pages) {
      setCurrentPage(next);
      getCharacter();
    }
    disableButton();
  }, [currentPage, disableButton, getCharacter, info?.pages]);

  const handlePrevClick = useCallback(() => {
    const prev = currentPage - 1;
    if (info?.pages && prev > 0) {
      setCurrentPage(prev);
      getCharacter();
    }
    disableButton();
  }, [currentPage, disableButton, getCharacter, info?.pages]);

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
          <ButtonSearch onButtonClick={handleButtonClick} value={value} />
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
      {data && data.length > 0 ? (
        <>
          <CardList cards={data} />
          <Pagination
            current={currentPage}
            leftDisable={leftDisable}
            rightDisable={rightDisable}
            total={info?.pages}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
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
