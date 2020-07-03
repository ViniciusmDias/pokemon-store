import React, { useState } from 'react';

import ModalImage from '../ModalImage';

import img from '../../images/bottom.jpeg'
// import './styles.css';

interface ImgProps {
  url: string
}

const ProductImage: React.FC<ImgProps> = ({ url }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ModalImage url={url} show={show} setShow={setShow} />
      <div className='product__image' onClick={() => setShow(true)}>
        {url ? <img src={img} alt='Foto do produto' /> : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt='Foto do produto' />}
      </div>
    </>
  );
};
export default ProductImage
