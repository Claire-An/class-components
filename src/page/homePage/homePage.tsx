import { useCallback, useContext, useEffect, useState } from 'react';
import { getData } from '../../api';
import { Character } from '../../api/types';
import ButtonSearch from '../../components/buttonSearch/buttonSearch';
import CardList from '../../components/card/CardList';
import InputSearch from '../../components/inputSearch/inputSearch';
import { ThemeContext } from '../../providers/ThemeProvider';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('textSearch') || '');
  const [data, setData] = useState<Character[]>([]);
  const [hasError, setHasError] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleInputChange = (val: string) => {
    setValue(val);
  };

  const getCharacter = useCallback(async () => {
    if (value === localStorage.getItem('textSearch')) {
      const dataCharacter = await getData(value);
      if (dataCharacter) {
        setData(dataCharacter.data);
      } else {
        setData([]);
      }
    }
  }, [value]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  const handleButtonClick = async (val: {
    data: Character[];
  }): Promise<void> => {
    setData(val.data);
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
          <ButtonSearch onButtonClick={handleButtonClick} value={value} />
          <button onClick={handleButtonErrorClick} className={styles.button}>
            Ошибка
          </button>
        </div>
        <div>
          <button onClick={handleButtonTheme} className={styles.button}>
            Сменить тему
          </button>
        </div>
      </div>
      <CardList cards={data} />
    </div>
  );
};

export default HomePage;
