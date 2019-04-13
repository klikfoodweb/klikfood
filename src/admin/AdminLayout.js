import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../assets/css/node-waves/waves.css';
import '../assets/css/animate-css/animate.css';
import '../assets/css/morrisjs/morris.css';
import '../assets/css/style.css';
import '../assets/css/themes/all-themes.css';
import axios from 'axios';
import TopBar from './TopBar';
import Dashboard from './Dashboard';

import LeftBarAdmin from './leftbar/LeftBarAdmin';
import LeftBarSupplyer from './leftbar/LeftBarSupplyer';
import LeftBarMitra from './leftbar/LeftBarMitra';
import LeftBarConsument from './leftbar/LeftBarConsument';
import LeftBarCEO from './leftbar/LeftBarCEO';
import LeftBarCFO from './leftbar/LeftBarCFO';
import LeftBarCMOKonsumen from './leftbar/LeftBarCMOKonsumen';
import LeftBarCMOMitra from './leftbar/LeftBarCMOMitra';
import LeftBarCMOSupplyer from './leftbar/LeftBarCMOSupplyer';
import LeftBarCOO from './leftbar/LeftBarCOO';

import CategoryList from './category/CategoryList';
import CategoryCreate from './category/CategoryCreate';
import CategoryUpdate from './category/CategoryUpdate';

import SubCategoryList from './category/SubCategoryList';
import SubCategoryCreate from './category/SubCategoryCreate';
import SubCategoryUpdate from './category/SubCategoryUpdate';

import UserList from './user/UserList';
import UserCreate from './user/UserCreate';
import UserUpdate from './user/UserUpdate';

import ProductList from './product/ProductList';
import ProductCreate from './product/ProductCreate';
import ProductUpdate from './product/ProductUpdate';
import ProductShow from './product/ProductShow';
import ProductVerification from './product/ProductVerification';
import ProductSubmitHargaJual from './product/ProductSubmitHargaJual';
import MyProducts from './product/MyProducts';
import ProductVerified from './product/ProductVerified';
import ProductMitra from './product/ProductMitra';
import DetailMitra from './product/DetailMitra';

import CreateProduct from './COO/CreateProduct';

import OrderProduct from './distribution/OrderProduct';
import MyOrder from './distribution/MyOrder';
import DetailProduct from './distribution/DetailProduct';
import PickCourier from './distribution/PickCourier';
import ShowDistribution from './distribution/ShowDistribution';

import TransactionVerif from './transaction/TransactionVerif';
import TransactionConsument from './transaction/TransactionConsument';
import MitraPenjualan from './transaction/MitraPenjualan';
import KonsumenPembelian from './transaction/KonsumenPembelian';
import ShowTransaction from './transaction/ShowTransaction';
import ShowTransactionConsument from './transaction/ShowTransactionConsument';

import TransactionCentral from './transaction-pusat/TransactionCentral';
import ShowTransactionCentral from './transaction-pusat/ShowTransactionCentral';

import Permissions from './Permissions';
import Roles from './Roles';

import SliderList from './slider/SliderList';
import SliderCreate from './slider/SliderCreate';
import SliderShow from './slider/SliderShow';

import TestimoniList from './testimoni/TestimoniList';
import TestimoniCreate from './testimoni/TestimoniCreate';
import TestimoniShow from './testimoni/TestimoniShow';

import EditHeader from './EditHeader';

import PaketMitraList from './paket-mitra/PaketMitraList';
import PaketMitraShow from './paket-mitra/PaketMitraShow';
import PaketMitraCreate from './paket-mitra/PaketMitraCreate';
import PilihPaket from './paket-mitra/PilihPaket';

import ListUser from './CMO/ListUser';
import ListMitra from './CMO/ListMitra';
import ListSupplyer from './CMO/ListSupplyer';

import MitraBill from './bill/MitraBill';
import SupplyerBill from './bill/SupplyerBill';

import RiwayatTransfer from './CFO/RiwayatTransfer';

import SayembaraLog from './sayembara/SayembaraLog';
import BuktiSayembara from './sayembara/BuktiSayembara';

import ConfigJual from './ConfigJual';
import OurAddress from './OurAddress';

import UpdateOngkir from './CFO/UpdateOngkir';
import ListBank from './CFO/ListBank';

class AdminLayout extends Component {
	componentWillMount() {
		document.body.classList.add('theme-red');

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
	render() {
		if (sessionStorage.length === 0) {
			return (
				<Redirect to={'/login'}/>
			)
	    }
	    
		return (
	      <div>	
	        {/* Page Loader */}
	        <div className="page-loader-wrapper">
	          <div className="loader">
	            <div className="preloader">
	              <div className="spinner-layer pl-red">
	                <div className="circle-clipper left">
	                  <div className="circle" />
	                </div>
	                <div className="circle-clipper right">
	                  <div className="circle" />
	                </div>
	              </div>
	            </div>
	            <p>Please wait...</p>
	          </div>
	        </div>
	        {/* #END# Page Loader */}
	        {/* Overlay For Sidebars */}
	        <div className="overlay" />
	        {/* #END# Overlay For Sidebars */}
	        
	        {/* Top Bar */}
	        <TopBar />
	        {/* #Top Bar */}
	        <section>
	          {/* Left Sidebar */}
	          {
	          	(sessionStorage.role === 'Administrator') ?
	          	<LeftBarAdmin />
          		: (sessionStorage.role === 'CEO') ?
          		<LeftBarCEO />
          		: (sessionStorage.role === 'CFO') ?
          		<LeftBarCFO />
          		: (sessionStorage.role === 'COO') ?
          		<LeftBarCOO />
          		: (sessionStorage.role === 'CMO_konsumen') ?
          		<LeftBarCMOKonsumen />
          		: (sessionStorage.role === 'CMO_mitra') ?
          		<LeftBarCMOMitra />
          		: (sessionStorage.role === 'CMO_pemasok') ?
          		<LeftBarCMOSupplyer />
          		: (sessionStorage.role === 'Supplyer') ?
				<LeftBarSupplyer />
				: (sessionStorage.role === 'Mitra') ?
				<LeftBarMitra />
          		: 
          		<LeftBarConsument />
	          }
	          {/* #END# Left Sidebar */}
	          
	        </section>
	        <section className="content">
	          <div className="container-fluid">
	            
	            <main>
	            <Switch>
	            	<Route path="/admin" exact component={Dashboard} />
	            	
	            	<Route path="/admin/categories/:id/update" component={CategoryUpdate} />
	            	<Route path="/admin/categories/create" component={CategoryCreate} />
	            	<Route path="/admin/categories/:id/create" component={SubCategoryCreate} />
	            	<Route path="/admin/categories/:id/:sub/update" component={SubCategoryUpdate} />
	            	<Route path="/admin/categories/:id" component={SubCategoryList} />
	            	<Route path="/admin/categories" component={CategoryList} />

	            	<Route path="/admin/users/:id/update" component={UserUpdate} />
	            	<Route path="/admin/users/create" component={UserCreate} />
	            	<Route path="/admin/users" component={UserList} />

	            	<Route path="/admin/products/verification/:id" component={ProductSubmitHargaJual} />
	            	<Route path="/admin/products/verification" component={ProductVerification} />
	            	<Route path="/admin/products/:id/update" component={ProductUpdate} />
	            	<Route path="/admin/products/:id/show" component={ProductShow} />
	            	<Route path="/admin/products/create" component={ProductCreate} />
	            	<Route path="/admin/list-produk-mitra/:id" component={DetailMitra} />	            
	            	<Route path="/admin/list-produk-mitra" component={ProductMitra} />
	            	<Route path="/admin/list-produk/create" component={CreateProduct} />	
	            	<Route path="/admin/list-produk" component={ProductVerified} />
	            	<Route path="/admin/products" component={ProductList} />	   
	            	<Route path="/admin/myproducts" component={MyProducts} />

	            	<Route path="/admin/distribution/order/courier" component={PickCourier} />
	            	<Route path="/admin/distribution/order/:id" component={DetailProduct} />	            	
	            	<Route path="/admin/distribution/order" component={OrderProduct} />
	            	<Route path="/admin/distribution/myorder" component={MyOrder} />
	            	<Route path="/admin/distribution/:id" component={ShowDistribution} />

	            	<Route path="/admin/permissions" component={Permissions} />	            	
	            	<Route path="/admin/roles" component={Roles} />	    

	            	<Route path="/admin/sliders/create" component={SliderCreate} />	    
	            	<Route path="/admin/sliders/:id" component={SliderShow} />	   	    
	            	<Route path="/admin/sliders" component={SliderList} />	 

	            	<Route path="/admin/testimonies/create" component={TestimoniCreate} />	    
	            	<Route path="/admin/testimonies/:id" component={TestimoniShow} />	   	    
	            	<Route path="/admin/testimonies" component={TestimoniList} />	    

					<Route path="/admin/paket-mitra/:id/update" component={PaketMitraShow} />
	            	<Route path="/admin/paket-mitra/create" component={PaketMitraCreate} />
	            	<Route path="/admin/paket-mitra" component={PaketMitraList} />

	            	<Route path="/admin/edit-header" component={EditHeader} />

	            	<Route path="/admin/transaction-consuments/verification" component={TransactionConsument} />
	            	<Route path="/admin/transaction-consuments/:id" component={ShowTransactionConsument} />

	            	<Route path="/admin/transaction-central/verification" component={TransactionCentral} />
	            	<Route path="/admin/transaction-central/:id" component={ShowTransactionCentral} />

	            	<Route path="/admin/transactions/verification" component={TransactionVerif} />
	            	<Route path="/admin/transactions/penjualan" component={MitraPenjualan} />        	
	            	<Route path="/admin/transactions/pembelian" component={KonsumenPembelian} />
	            	<Route path="/admin/transactions/:id" component={ShowTransaction} />     
	            	
	            	<Route path="/admin/pilih-paket" component={PilihPaket} />

	            	<Route path="/admin/config-jual" component={ConfigJual} />

	            	<Route path="/admin/update-ongkir" component={UpdateOngkir} />

	            	<Route path="/admin/sayembara/upload_bukti" component={BuktiSayembara} />
	            	<Route path="/admin/sayembara" component={SayembaraLog} />

	            	<Route path="/admin/riwayat-transfer" component={RiwayatTransfer} />

	            	<Route path="/admin/list-bank" name={ListBank} component={ListBank} />

	            	<Route path="/admin/our-address" name={OurAddress} component={OurAddress} />

	            	<Route path="/admin/bills/supplyer" component={SupplyerBill} />
	            	<Route path="/admin/bills/mitra" component={MitraBill} /> 

	            	<Route path="/admin/cmo/konsumen" component={ListUser} />
	            	<Route path="/admin/cmo/mitra" component={ListMitra} />
	            	<Route path="/admin/cmo/supplyer" component={ListSupplyer} />
	            </Switch>
	            </main>
	          
	          </div>
	        </section>
	        
	      </div>
	    );
	}
}
export default AdminLayout;