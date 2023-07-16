import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';


// Context
import ProductsContextProvider from './Context/ProductsContextProvider';

const App = () => {
  return (
    <ProductsContextProvider>
      <Switch>
        
      <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products"/>
      </Switch>
   </ProductsContextProvider>
  );
};

export default App;