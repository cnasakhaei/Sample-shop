import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';


// Context
import ProductsContextProvider from './Context/ProductsContextProvider';
import CartContextProvider from './Context/CartContextProvider';
const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Redirect to="/products"/>
          </Switch>
      </CartContextProvider>
   </ProductsContextProvider>
  );
};

export default App;