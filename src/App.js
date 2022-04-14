
import React from 'react';
import './App.css';
import Home from './component/Home';
import MyNavbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <MyNavbar />
      <Switch location={location} key={location.pathname}>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path='/cart' component={Cart} />


      </Switch>
      
    </>
  );
}

export default App;
