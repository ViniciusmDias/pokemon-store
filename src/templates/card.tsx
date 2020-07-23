import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import actionsCards from '../store/actions/Cards';

import Navigation from '../components/Navigation';
import SingleCard from '../containers/SingleCard';

interface RootState {
  cardsReducer: {
    data: any;
  };
}
type TParams = { id: string };

const Card: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: RootState) => state.cardsReducer.data,
  );

  console.log(match)
  const index = parseInt(match.params.id);

  useEffect(() => {
    dispatch(actionsCards.getCards());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {cards.map(
        (card: any) =>
          card.index === index && (
            <SingleCard key={card.index} card={card} />
          ),
      )}
    </>
  );
};

export default Card;
