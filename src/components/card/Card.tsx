import { FC } from 'react';
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
  return (
    <div className={styles.card} data-testid="card">
      <img src={card.image} className={styles.card__img} />
      <h4 className={styles.name}>Имя: {card.name}</h4>
      <p className={styles.card__p}>
        <b>Пол:</b> {card.gender == 'Male' ? 'Муж' : 'Жен'}
      </p>
    </div>
  );
};

export default Card;
