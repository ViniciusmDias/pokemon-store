import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Cards';
import Loading from '../../components/Loading';
import Card from '../../components/Card';
import { List, Options } from './styles';

import { CardProps } from '../../components/Card'


interface RootState {
  cardsReducer: {
    data: any;
    loading: any;
  };
}

const ListCards: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: RootState) => state.cardsReducer.data,
  );
  const loading = useSelector(
    (state: RootState) => state.cardsReducer.loading,
  );

  useEffect(() => {
    dispatch(actions.getCards());
  }, [dispatch]);

  return (
    <List>
      <Options>
        <h1>produtos</h1>
        <label>({cards.length} items)</label>
      </Options>
      {loading ? (
        <Loading />
      ) : (
          <ul>
            {cards.map((card: CardProps['card']) => (
              <Link key={card.id} to={`/card/${card.index}`}>
                <Card card={card} />
              </Link>
            ))}
          </ul>
        )}
    </List>
  );
};
export default ListCards;
