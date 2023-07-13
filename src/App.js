import React from 'react';
//Components
import Store from './Components/Store';

// Context
import ProductsContextProvider from './Context/ProductsContextProvider';

const App = () => {
  return (
    <ProductsContextProvider>
      <Store/>
   </ProductsContextProvider>
  );
};

export default App;