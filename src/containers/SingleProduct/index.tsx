import React from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import actionsCart from '../../store/actions/Cart';
import actionsToast from '../../store/actions/Toast';
import ProductImage from '../../components/ProductImage';
import Toast from '../../components/Toast';

import { Product, ProductGroup, ProductInfo, InfoPrice } from './styles';

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
    sizes: [
      {
        available: boolean;
        size: string;
        sku: string;
      },
    ];
  };
}

const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  // const sizeError = useSelector(state => state.cartReducer.error)

  function onClickAdd(product: any) {
    const item = { ...product, quantity: 1 };

    dispatch(actionsCart.addProduct(item));
    dispatch(actionsToast.addToast('Adicionado à sacola', false));
  }

  return (
    <Product className="product">
      <ProductImage
        url={`https://pokeres.bastionbot.org/images/pokemon/${
          product.index + 1
        }.png`}
      />

      <ProductGroup>
        <ProductInfo>
          <h3>{product.name}</h3>
          <InfoPrice>
            {product.on_sale && <label>R$ {product.regular_price}</label>}
            <strong>R${product.actual_price}</strong>
            <br />
            <label className="installments">
              Em até {product.installments}x
            </label>
          </InfoPrice>
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
