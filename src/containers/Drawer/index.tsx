import React from 'react';

import {Container} from './styles';

const Drawer: React.FC = (props: any) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};
export default Drawer
