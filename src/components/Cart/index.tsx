import React, { useState, useEffect, useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Badge, FloatingCart } from './styles';

const Cart: React.FC = () => {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible(): void {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <FiShoppingCart color="#fff" size={20} />
      </Badge>

      <FloatingCart visible={visible}>Oi</FloatingCart>
    </Container>
  );
};

export default Cart;
