import React from 'react';

import Navigation from '../components/Navigation';
import ListProduct from '../containers/ListProducts';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <ListProduct />
    </>
  );
};
export default Home;
