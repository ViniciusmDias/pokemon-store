import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import img from '../../images/bottom.jpeg';

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
    quantity: string;
    installments: number;
  };
}

const ProductSearch: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.index}`}>
      <Container>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            product.index + 1
          }.png`}
          alt={product.name}
        />
        <div className="product__infos">
          <strong>{product.name}</strong>
          <label>RS {product.actual_price}.00</label>
        </div>
      </Container>
    </Link>
  );
};

export default ProductSearch;
