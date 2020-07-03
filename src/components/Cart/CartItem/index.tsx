import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionsCart from '../../../store/actions/Cart';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import img from '../../../images/bottom.jpeg'


import {Container, Section} from './styles'

interface ProductProps {
  product: {
    id: string,
    name: string,
		style: string,
		code_color: string,
		color_slug: string,
		color: string,
		on_sale: boolean,
		regular_price: number,
		actual_price: number,
		discount_percentage: number,
    installments: number,
    image: string,
    selectedSize: string,
    quantity: string,
		sizes: [
			{
				available: boolean,
				size: string,
				sku: string
			}
		]
  }

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

  function filterSize(sizes: any) {
    const filteredSizes = sizes.filter((size: { sku: string; }) => size.sku === product.selectedSize);

    return filteredSizes.map((size: { size: any; }) => size.size);
  }

  return (
    <Container>
      <Link to={`/product/${product.id}`}>
        {product.image
          ? <img src={img} alt={product.name} />
          : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={product.name} />
        }
      </Link>

      <Section>
        <label>{product.name}</label>
        <label>Tamanho: {filterSize(product.sizes)}</label>
        <label>Unidade: {product.actual_price}</label>

        <div>
          <button onClick={() => increment(product.selectedSize)}>+</button>
          <label>{product.quantity}</label>
          <button onClick={() => decrement(product.selectedSize)}>-</button>
        </div>
      </Section>

      <button onClick={() => removeProduct(product.selectedSize)}>
        <AiOutlineCloseCircle size={24} color='#fff' />
      </button>
    </Container>
  );
};

export default CartItem
