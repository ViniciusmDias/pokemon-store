import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import actionsProducts from '../store/actions/Products';

import Navigation from '../components/Navigation';
import SingleProduct from '../containers/SingleProduct';

interface RootState {
  productsReducer: {
    data: any;
  };
}
type TParams = { id: string };

const Product: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productsReducer.data,
  );
  const index = parseInt(match.params.id);

  useEffect(() => {
    dispatch(actionsProducts.getProducts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {products.map(
        (product: any) =>
          product.index === index && (
            <SingleProduct key={product.id} product={product} />
          ),
      )}
    </>
  );
};

export default Product;
