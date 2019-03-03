import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Contact from './Contact';
import Shop from './Shop';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

// Pages
const Login = Loadable({
  loader: () => import('./Login'),
  loading
});

class DefaultLayout extends Component {

	signOut(e) {
	  e.preventDefault()
	  this.props.history.push('/login')
	}

	render() {
	  return (
	    <div className="app">
	    <Header />
	      <div className="app-body">
            <main>
            <Switch>
            	<Route path="/" exact component={Home} />
            	<Route path="/products" exact component={Products} />
            	<Route path="/login" name="Login" exact component={Login} />
            	<Route path="/cart" name="Cart" component={Cart} />
            	<Route path="/contact" name="Contact" component={Contact} />
            	<Route path="/shop" name="Contact" component={Shop} />
            </Switch>
            </main>
	      </div>
	     	
	    </div>
		);
	}
}
export default DefaultLayout;