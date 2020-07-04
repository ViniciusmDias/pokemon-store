import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Products';
import Loading from '../../components/Loading';
import Product from '../../components/Product';
import { List, Options } from './styles';

interface RootState {
  productsReducer: {
    data: any;
    loading: any;
  };
}
interface ProductProps {
  product: {
    index: number;
    name: string;
    url: string;
    image: string;
    on_sale: boolean;
    regular_price: number;
    actual_price: number;
    discount_percentage: number;
    installments: number;
    quantity: string;
  };
}

const ListProducts: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productsReducer.data,
  );
  const loading = useSelector(
    (state: RootState) => state.productsReducer.loading,
  );

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  return (
    <List>
      <Options>
        <h1>produtos</h1>
        <label>({products.length} items)</label>
      </Options>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {products.map((product: ProductProps['product']) => (
            <Link key={product.index} to={`/product/${product.index}`}>
              <Product product={product} />
            </Link>
          ))}
        </ul>
      )}
    </List>
  );
};
export default ListProducts;
