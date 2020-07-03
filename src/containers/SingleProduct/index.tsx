import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import actionsCart from '../../store/actions/Cart';
import actionsToast from '../../store/actions/Toast';
import ProductImage from '../../components/ProductImage';
import Toast from '../../components/Toast';

import {
  Product,
  ProductGroup,
  ProductInfo,
  InfoPrice,
  ProductSize,
} from './styles';

interface ProductProps {
  product: {
    index: number;
    name: string;
    url: string;
  };
}

const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState(false);
  // const sizeError = useSelector(state => state.cartReducer.error)

  function onClickSize(event: any, sku: any) {
    event.preventDefault();
    dispatch(actionsCart.selectSize());
    setSelectedSize(sku);
  }

  function onClickAdd(product: any) {
    const item = { ...product, selectedSize: selectedSize, quantity: 1 };
    if (selectedSize === '') {
      // dispatch(actionsCart.addProductFailure());
      setError(true);
    } else {
      setError(false);
      dispatch(actionsCart.addProduct(item));
      dispatch(actionsToast.addToast('Adicionado à sacola', false));
    }
  }

  return (
    <Product className="product">
      <ProductImage url={'product.name'} />

      <ProductGroup>
        <ProductInfo>
          <h3>{product.name}</h3>
        </ProductInfo>

        <button className="btn-submit" onClick={() => onClickAdd(product)}>
          Adicionar à Sacola
        </button>

        <Link to="/" className="link-back">
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </ProductGroup>
      <Toast />
    </Product>
  );
};

export default SingleProduct;
