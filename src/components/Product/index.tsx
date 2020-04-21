import React, { useContext } from 'react';

import { ProductContainer } from './styles';

import { CartContext } from '../../context/CartContext';

interface ProductProps {
  product: {
    id: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }: ProductProps) => {
  const { addToCart } = useContext(CartContext);

  async function handleAddToCart(): Promise<void> {
    const { id } = product;
    console.log(id);

    addToCart();
    // Adiciona ao carrinho
  }

  return (
    <ProductContainer>
      <img
        src="https://authenticfeet.vteximg.com.br/arquivos/ids/228883-1000-1000/Tenis-adidas-Streetball-Masculino-Preto.jpg?v=637051053975000000"
        alt="Tenis"
      />

      <p>Tenis Adidas</p>
      <span>R$ 5.500,00</span>

      <button onClick={handleAddToCart} type="button">
        Adicionar ao carrinho
      </button>
    </ProductContainer>
  );
};

export default Product;
