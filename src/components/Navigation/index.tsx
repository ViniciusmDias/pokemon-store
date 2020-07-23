import React, { useState } from 'react';

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
      <MenuLink to="/">Marvel QL</MenuLink>
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
