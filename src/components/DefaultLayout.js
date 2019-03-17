import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import CatalogMitra from './CatalogMitra';
import SearchMitra from './SearchMitra';
import SearchByKategori from './SearchByKategori';
import SearchProduct from './SearchProduct';
import SearchProductMitra from './SearchProductMitra';
import Support from './Support';
import Profile from './Profile';

import Privacy from '../pages/Privacy';
import FaqsMitra from '../pages/FaqsMitra';
import BudayaKerja from '../pages/BudayaKerja';
import Disclaimer from '../pages/Disclaimer';
import FormulirMitra from '../pages/FormulirMitra';
import KetentuanPenggunaanWebsite from '../pages/KetentuanPenggunaanWebsite';
import VisiMisi from '../pages/VisiMisi';

import DetailProductMitra from './DetailProductMitra';
import Forget from './Forget';
import ResetToken from './ResetToken';
import ResetPassword from './ResetPassword';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

// Pages
const Login = Loadable({
  loader: () => import('./Login'),
  loading
});

class DefaultLayout extends Component {
    componentWillMount() {
        setInterval(() => {
            axios.get(`http://35.243.170.33/index.php/token/`+sessionStorage.api_token)
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
            	<Route path="/login" name="Login" exact component={Login} />
            	<Route path="/cart" name="Cart" component={Cart} />
            	<Route path="/contact" name="Contact" component={Contact} />
                <Route path="/search-mitra" name="SearchMitra" component={SearchMitra} />
                <Route path="/support" name="Support" component={Support} />
                <Route path="/profile" name="Profile" component={Profile} />

                <Route path="/privacy" name="Privacy" component={Privacy} />
                <Route path="/faqs-mitra" name="FaqsMitra" component={FaqsMitra} />
            	<Route path="/budaya-kerja" name="BudayaKerja" component={BudayaKerja} />
                <Route path="/disclaimer" name="Disclaimer" component={Disclaimer} />
                <Route path="/formulir-mitra" name="FormulirMitra" component={FormulirMitra} />
                <Route path="/ketentuan-penggunaan-website" name="KetentuanPenggunaanWebsite" component={KetentuanPenggunaanWebsite} />
                <Route path="/visi-misi" name="VisiMisi" component={VisiMisi} />
                
                <Route path="/search/:kategori" name="SearchByKategori" component={SearchByKategori} />
                <Route path="/search" name="SearchProduct" component={SearchProduct} />
                <Route path="/reset" name="ResetToken" component={ResetToken} />
                <Route path="/forget" name="Forget" component={Forget} />
                <Route path="/reset-password/:kode" name="ResetPassword" component={ResetPassword} />
                <Route path="/:mitra/search/:query" name="SearchProductMitra" component={SearchProductMitra} />
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