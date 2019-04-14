import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarCOO extends Component {

	render() {
		return (
			<div>
				<aside id="leftsidebar" className="sidebar">
				  {/* User Info */}
				  <UserInfo />
				  {/* #User Info */}
				  {/* Menu */}
				  <div className="menu">
				    <ul className="list">
				      <li className="header">MAIN NAVIGATION</li>
				      <li>
				        <Link to="/admin">
				          <i className="material-icons">home</i>
				          <span>Dashboard</span>
				        </Link>
				      </li>
		      	      <li>
		      	        <Link to="/admin/transactions/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Transaksi Pemesanan</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/transaction-central/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Transaksi Pusat</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/products/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Verifikasi Produk</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/list-produk">
		      	          <i className="material-icons">widgets</i>
		      	          <span>List Produk</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/list-produk-mitra">
		      	          <i className="material-icons">widgets</i>
		      	          <span>List Produk Mitra</span>
		      	        </Link>
		      	      </li>
				      
				    </ul>
				  </div>
				  {/* #Menu */}
				  {/* Footer */}
				  <div className="legal">
				    <div className="copyright">
				      © 2019 <a href="#">{sessionStorage.username} - KlikFood</a>.
				    </div>
				    <div className="version">
				      <b>Version: </b> 2.0.0
				    </div>
				  </div>
				  {/* #Footer */}
				</aside>
			</div>
		);
	}
}
export default LeftBarCOO;