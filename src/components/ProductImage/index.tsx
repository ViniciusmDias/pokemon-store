import React, { useState } from 'react';

import ModalImage from '../ModalImage';

interface ImgProps {
  url: string;
}

const ProductImage: React.FC<ImgProps> = ({ url }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ModalImage url={url} show={show} setShow={setShow} />
      <div className="product__image" onClick={() => setShow(true)}>
        <img src={url} alt="pokemon" />
      </div>
    </>
  );
};
export default ProductImage;
