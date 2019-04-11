import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarAdmin extends Component {

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
		      	        <Link to="/admin/products/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Pengajuan Produk</span>
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
		      	        <Link to="/admin/paket-mitra">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Paket Mitra</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/config-jual">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Konfigurasi Penjualan</span>
		      	        </Link>
		      	      </li>
				      <li>
				        <Link to="/admin/categories">
				          <i className="material-icons">text_fields</i>
				          <span>Kategori</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/our-address">
				          <i className="material-icons">text_fields</i>
				          <span>Alamat Gudang Kantor</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/sliders">
				          <i className="material-icons">layers</i>
				          <span>Sliders</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/testimonies">
				          <i className="material-icons">layers</i>
				          <span>Testimoni</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/permissions">
				          <i className="material-icons">text_fields</i>
				          <span>Permissions</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/roles">
				          <i className="material-icons">text_fields</i>
				          <span>Roles</span>
				        </Link>
				      </li>
				      <li>
				        <Link to="/admin/users">
				          <i className="material-icons">layers</i>
				          <span>Users</span>
				        </Link>
				      </li>
				      
				    </ul>
				  </div>
				  {/* #Menu */}
				  {/* Footer */}
				  <div className="legal">
				    <div className="copyright">
				      © 2019 <a href="#">Admin - ClickFood</a>.
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
export default LeftBarAdmin;