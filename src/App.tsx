import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Router>
          <Routes />
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
