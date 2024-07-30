import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites } from '../../redux/favorites.slice';
import { RootState } from '../../redux/store';
import styles from './flyout.module.scss';

const Flyout = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const handleDownloadCsv = () => {
    if (!favorites.length) return;

    let csvText = 'Id;Name;Gender;URL\n';

    csvText += favorites
      .map((item) => `${item.id};${item.name};${item.gender};${item.url}`)
      .join('\n');

    const blob = new Blob([csvText], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    return url;
  };

  const downloadUrl = handleDownloadCsv();

  return (
    favorites.length > 0 && (
      <div className={styles.flyout}>
        <p>Количество выбрынных элементов: {favorites.length}</p>
        <div className={styles.flyout__button}>
          <button onClick={() => dispatch(clearFavorites())}>
            Очистить все
          </button>
          <a href={downloadUrl} download={`${favorites.length}_characters.csv`}>
            <button>Загрузить</button>
          </a>
        </div>
      </div>
    )
  );
};

export default Flyout;
