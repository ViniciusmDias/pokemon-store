import React from 'react';
import { Item, Image, Description } from './styles';

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

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Item key={product.index} className="item">
      <Image>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            product.index + 1
          }.png`}
          alt={product.name}
        />
        {product.on_sale && <div>{product.discount_percentage} off</div>}

        <button>Ver pokemon</button>
      </Image>

      <Description>
        <h3>{product.name}</h3>

        {product.on_sale && <label>R${product.regular_price}</label>}
        <strong>R${product.actual_price}</strong>
      </Description>
    </Item>
  );
};

export default Product;
