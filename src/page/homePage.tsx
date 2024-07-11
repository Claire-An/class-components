import { useEffect, useState } from 'react';
import { getData } from '../api';
import { Character } from '../api/types';
import ButtonSearch from '../components/buttonSearch/buttonSearch';
import CardList from '../components/card/CardList';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import InputSearch from '../components/inputSearch/inputSearch';
import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  const [value, setValue] = useState(localStorage.getItem('textSearch') || '');
  const [data, setData] = useState<Character[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (val: string) => {
    setValue(val);
  };

  useEffect(() => {
    const getCharacter = async () => {
      const dataCharacter = await getData(value);
      if (dataCharacter) {
        setData(data);
      } else {
        setData([]);
      }
    };
    getCharacter();
  }, [data, value]);

  const handleButtonClick = async (val: {
    data: Character[];
  }): Promise<void> => {
    setData(val.data);
  };

  const handleButtonErrorClick = (): void => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('ErrorBoundary error');
  }
  return (
    <main className={styles.wrapper}>
      <ErrorBoundary>
        <div className={styles.searchBlock}>
          <InputSearch onHandleChange={handleInputChange} textSearch={value} />
          <ButtonSearch onButtonClick={handleButtonClick} value={value} />
          <button
            onClick={handleButtonErrorClick}
            className={styles.buttonError}
          >
            Ошибка
          </button>
        </div>
        <CardList cards={data} />
      </ErrorBoundary>
    </main>
  );
};

export default HomePage;
