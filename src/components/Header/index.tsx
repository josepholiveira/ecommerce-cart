import React from 'react';

import { FiShoppingBag } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Cart from '../Cart';

const Header: React.FC = () => (
  <Container>
    <header>
      <h2>
        <FiShoppingBag />
        <p>GoMarketplace</p>
      </h2>
      <nav>
        <Cart />
      </nav>
    </header>
  </Container>
);

export default Header;
