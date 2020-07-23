import React from 'react';
import { Item, Image, Description } from './styles';

export interface CardProps {
  card: {
    index: number;
    id: number;
    name: string;
    thumbnail: {
      path: string,
    },
    series: {
      items: [
        {
          name: string
        },
      ]
    };
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  console.log(card)

  return (
    <Item key={card.id} className="item">
      <Image>
        <img
          src={`${card.thumbnail.path}.jpg`}
          alt={card.name}
        />

        <button>Ver Card</button>
      </Image>

      <Description>
        <h3>{card.name}</h3>
      </Description>
    </Item>
  );
};

export default Card;
