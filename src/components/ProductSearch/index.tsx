import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import img from '../../images/bottom.jpeg'

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

const ProductSearch: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Container>
        {product.image
          ? <img src={img} alt={product.name} />
          : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={product.name} />
        }
        <div className='product__infos'>
          <strong>{product.name}</strong>
          <label>{product.actual_price}</label>
          <label>{product.installments}</label>
        </div>
      </Container>
    </Link>
  );
};

export default ProductSearch
