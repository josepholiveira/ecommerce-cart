import React, { createContext, useCallback } from 'react';

interface Product {
  name: string;
  value: number;
}

interface CartContextData {
  products: Product[];
  addToCart(): void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC = ({ children }) => {
  const addToCart = useCallback(() => {
    console.log('addCart');
  }, []);

  return (
    <CartContext.Provider
      value={{ products: [{ name: 'Piano', value: 200 }], addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
