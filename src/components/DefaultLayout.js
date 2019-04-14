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
import TentangPerusahaan from '../pages/TentangPerusahaan';

import MitraSupplyer from './MitraSupplyer';
import DetailProductMitra from './DetailProductMitra';
import DetailProduct from './DetailProduct';
import Forget from './Forget';
import ResetToken from './ResetToken';
import ResetPassword from './ResetPassword';

import EmailVerified from './EmailVerified';
import EmailNotVerified from './EmailNotVerified';

import RegisterMitra from './RegisterMitra';
import RegisterPemasok from './RegisterPemasok';

import {geolocated} from 'react-geolocated';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

// Pages
const Login = Loadable({
  loader: () => import('./Login'),
  loading
});

class DefaultLayout extends Component {
    componentWillMount() {
        setInterval(() => {
            axios.get(`https://api.klikfood.id/index.php/token/`+sessionStorage.api_token)
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

    // {
    //     (!this.props.isGeolocationAvailable)
    //       ? <div>Your browser does not support Geolocation</div>
    //       : (!this.props.isGeolocationEnabled) ? <div>Geolocation is not enabled</div>
    //         : (this.props.coords) ? 
    //         <table>
    //             <tbody>
    //               <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
    //               <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
    //               <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
    //               <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
    //               <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
    //             </tbody>
    //         </table>
    //       : <div>Getting the location data&hellip; </div>
    // }
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

                <Route path="/tentang-perusahaan" name="TentangPerusahaan" component={TentangPerusahaan} />
                <Route path="/privacy" name="Privacy" component={Privacy} />
                <Route path="/faqs-mitra" name="FaqsMitra" component={FaqsMitra} />
            	<Route path="/budaya-kerja" name="BudayaKerja" component={BudayaKerja} />
                <Route path="/mitra-pemasok" name="MitraSupplyer" component={MitraSupplyer} />
                <Route path="/disclaimer" name="Disclaimer" component={Disclaimer} />
                <Route path="/formulir-mitra" name="FormulirMitra" component={FormulirMitra} />
                <Route path="/ketentuan-penggunaan-website" name="KetentuanPenggunaanWebsite" component={KetentuanPenggunaanWebsite} />
                <Route path="/visi-misi" name="VisiMisi" component={VisiMisi} />

                <Route path="/verified" name="EmailVerified" component={EmailVerified} />
                <Route path="/not-verified" name="EmailNotVerified" component={EmailNotVerified} />

                <Route path="/register-mitra" name="RegisterMitra" component={RegisterMitra} />
                <Route path="/register-pemasok" name="RegisterPemasok" component={RegisterPemasok} />
                
                <Route path="/product/:id" name="DetailProduct" component={DetailProduct} />

                <Route path="/search/:kategori" name="SearchByKategori" component={SearchByKategori} />
                <Route path="/search" name="SearchProduct" component={SearchProduct} />
                <Route path="/reset" name="ResetToken" component={ResetToken} />
                <Route path="/forget" name="Forget" component={Forget} />
                <Route path="/reset-password/:kode" name="ResetPassword" component={ResetPassword} />
                <Route path="/:mitra/search/:query" name="SearchProductMitra" component={SearchProductMitra} />
                <Route path="/:mitra/:product" name="DetailProductMitra" component={DetailProductMitra} />
                <Route path="/:mitra" name="CatalogMitra" component={CatalogMitra} />

            </Switch>
            <a href="https://api.whatsapp.com/send?phone=6281298904263&text=Bisa Bantu Saya?" style={{
                position:'fixed',
                width:'60px',
                height:'60px',
                bottom:'40px',
                right:'40px',
                backgroundColor:'#25d366',
                color:'#FFF',
                borderRadius:'50px',
                textAlign:'center',
                fontSize:'30px',
                boxShadow: '2px 2px 3px #999',
                zIndex:'100'
            }} target="_blank">
                {/*<i className="fa fa-phone" style={{marginTop:'16px'}}></i>*/}
                <img src="/images/whatsapp-logo.png" className="img-responsive" style={{borderRadius:'50px'}}/>
            </a>
            </main>
	      </div>
	     	
	    </div>
		);
	}
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(DefaultLayout);