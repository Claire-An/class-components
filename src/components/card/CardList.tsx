import { FC } from 'react';
import { Character } from '../../api/types';
import Card from './Card';
import styles from './cardList.module.scss';

export interface CardListProps {
  cards: Character[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className={styles.cardList} data-testid="cardList">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
