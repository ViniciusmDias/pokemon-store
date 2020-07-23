import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { CardProps } from '../Card'



const CardSearch: React.FC<CardProps> = ({ card }) => {
  return (
    <Link to={`/card/${card.index}`}>
      <Container>
        <img
          src={`${card.thumbnail.path}.jpg`}
          alt={card.name}
        />
        <div className="card__infos">
          <strong>{card.name}</strong>
        </div>
      </Container>
    </Link>
  );
};

export default CardSearch;
