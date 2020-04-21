import React, { useContext } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Product from '../../components/Product';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Product product={{ id: 1 }} />
        <Product product={{ id: 1 }} />
        <Product product={{ id: 1 }} />
      </Container>
    </>
  );
};

export default Dashboard;
