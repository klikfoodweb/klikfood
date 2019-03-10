import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Contact from './Contact';
import CatalogMitra from './CatalogMitra';
import SearchMitra from './SearchMitra';
import SearchByKategori from './SearchByKategori';
import SearchProduct from './SearchProduct';
import Support from './Support';
import Profile from './Profile';
import Privacy from '../pages/Privacy';
import DetailProductMitra from './DetailProductMitra';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

// Pages
const Login = Loadable({
  loader: () => import('./Login'),
  loading
});

class DefaultLayout extends Component {
    componentDidMount() {
        setInterval(() => {
            axios.get(`http://apiklikfood.herokuapp.com/token/`+sessionStorage.api_token)
              .then((response) => {
              }).catch((error) => {
                if(sessionStorage.api_token !== undefined){
                    sessionStorage.clear();
                    setTimeout(() => {
                        window.location.href='/login';
                    }, 3000);
                }
              })
        }, 60000);
    }

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
                <Route path="/search-mitra" name="SearchMitra" component={SearchMitra} />
                <Route path="/support" name="Support" component={Support} />
                <Route path="/profile" name="Profile" component={Profile} />
                <Route path="/privacy" name="Privacy" component={Privacy} />
            	<Route path="/search/:kategori" name="SearchByKategori" component={SearchByKategori} />
                <Route path="/search" name="SearchProduct" component={SearchProduct} />
                <Route path="/:mitra/:product" name="DetailProductMitra" component={DetailProductMitra} />
                <Route path="/:mitra" name="CatalogMitra" component={CatalogMitra} />
            </Switch>
            </main>
	      </div>
	     	
	    </div>
		);
	}
}
export default DefaultLayout;