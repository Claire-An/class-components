import { FC } from 'react';
import Card, { CardForm } from './Card';
import styles from './cardList.module.scss';

export interface CardListProps {
  cards: CardForm[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className={styles.cardList}>
      {cards && cards.length > 0
        ? cards.map((card) => <Card key={card.id} card={card} />)
        : 'Данные не найдены'}
    </div>
  );
};

export default CardList;
