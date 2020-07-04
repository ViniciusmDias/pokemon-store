import React, { useState } from 'react';

import Cart from '../Cart';
import Search from '../Search';

import { Container, MenuLink, Button } from './styles';

const Navigation: React.FC = () => {
  const [hamburguer, setHamburguer] = useState(false);

  const clickStyle = hamburguer ? 'click' : '';

  function handleClick() {
    setHamburguer(!hamburguer);
  }

  return (
    <Container>
      <Search />
      <Cart />
      <MenuLink to="/">poke store </MenuLink>
      <aside>
        <Button
          onClick={handleClick}
          className={`hamburguermenu ${clickStyle}  `}
        >
          <div></div>
          <div></div>
          <div></div>
        </Button>
      </aside>
    </Container>
  );
};
export default Navigation;
