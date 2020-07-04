import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionsCart from '../../../store/actions/Cart';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Container, Section } from './styles';

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

const CartItem: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  function increment(sku: any) {
    dispatch(actionsCart.incrementQuantityProduct(sku));
  }

  function decrement(sku: any) {
    dispatch(actionsCart.decrementQuantityProduct(sku));
  }

  function removeProduct(sku: any) {
    dispatch(actionsCart.removeProduct(sku));
  }

  return (
    <Container>
      <Link to={`/product/${product.index}`}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            product.index + 1
          }.png`}
          alt={product.name}
        />{' '}
      </Link>

      <Section>
        <label>{product.name}</label>
        <label>Preço unitário: {product.actual_price}</label>

        <div>
          <button onClick={() => increment(product.quantity)}>+</button>
          <label>{product.quantity}</label>
          <button onClick={() => decrement(product.quantity)}>-</button>
        </div>
      </Section>

      <button onClick={() => removeProduct(product.index)}>
        <AiOutlineCloseCircle size={24} color="#fff" />
      </button>
    </Container>
  );
};

export default CartItem;
