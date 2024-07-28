import { FC, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeartImg from '../../assets/heart.svg';
import HeartImgRed from '../../assets/heartRed.svg';
import { ThemeContext } from '../../providers/ThemeProvider';
import { toggleFavorites } from '../../redux/favorites.slice';
import { RootState } from '../../redux/store';
import styles from './card.module.scss';

export interface CardForm {
  id?: number;
  status?: string;
  name: string;
  gender?: string;
  image?: string;
  species?: string;
}

interface CardItemProps {
  card: CardForm;
}

const Card: FC<CardItemProps> = ({ card }) => {
  const { theme } = useContext(ThemeContext);
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div
      className={[styles.card, theme === 'dark' ? styles.cardDark : ''].join(
        ' ',
      )}
      data-testid="card"
    >
      <img src={card.image} className={styles.card__img} />
      <h4 className={styles.name}>Имя: {card.name}</h4>
      <p className={styles.card__p}>
        <b>Пол:</b> {card.gender == 'Male' ? 'Муж' : 'Жен'}
      </p>
      <img
        src={
          favorites.findIndex((item) => item.id === card.id) === -1
            ? HeartImg
            : HeartImgRed
        }
        className={styles.favotitesImg}
        onClick={() => dispatch(toggleFavorites(card))}
      />
    </div>
  );
};

export default Card;
