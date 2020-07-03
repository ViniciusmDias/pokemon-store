import React from 'react';

import { Item, Image, Description } from './styles';

import img from '../../images/bottom.jpeg';

import api from '../../services/api';

interface ProductProps {
  product: {
    name: string;
    url: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Item key={product.name} className="item">
      <Image>
        {/* {product.image ? (
          <img src={img} alt={product.name} />
        ) : ( */}
        <img src={img} alt={product.name} />
        {/* )} */}
        <button>Ver produto</button>
      </Image>

      <Description>
        <h3>{product.name}</h3>
      </Description>
    </Item>
  );
};

export default Product;
