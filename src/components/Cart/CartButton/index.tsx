import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  handleCheck: (e: React.MouseEvent) => void;
}
const Button: React.FC<ButtonProps> = ({ handleCheck }) => {

  return (
    <Container onClick={handleCheck}>
      Fechar pedido
    </Container>
  );
}

export default Button;
