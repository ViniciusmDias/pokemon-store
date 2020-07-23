import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import CardImage from '../../components/CardImage';
import Toast from '../../components/Toast';

import { CardProps } from '../../components/Card'


import { Card, CardGroup, CardInfo } from './styles';

const SingleCard: React.FC<CardProps> = ({ card }) => {


  return (
    <Card className="card">
      <CardImage
        url={`${card.thumbnail.path}.jpg`}
      />

      <CardGroup>
        <CardInfo>
          <h3>{card.name}</h3>
        </CardInfo>

        <button className="btn-submit" >
          Ver o Card
        </button>

        <Link to="/" className="link-back">
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </CardGroup>
      <Toast />
    </Card>
  );
};

export default SingleCard;
