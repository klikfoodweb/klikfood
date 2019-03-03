import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarSupplyer extends Component {

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
				        <Link to="/admin/products">
				          <i className="material-icons">widgets</i>
				          <span>Produk</span>
				        </Link>
				      </li>
				      <li>
				        <a href="javascript:void(0);" className="menu-toggle">
				          <i className="material-icons">widgets</i>
				          <span>Transaksi</span>
				        </a>
				        <ul className="ml-menu">
			                <li>
			                  <a>
			                    <span>Penjualan</span>
			                  </a>
			                </li>
			                <li>
			                  <a>
			                    <span>Pembelian</span>
			                  </a>
			                </li>
			              </ul>
				      </li>
				    </ul>
				  </div>
				  {/* #Menu */}
				  {/* Footer */}
				  <div className="legal">
				    <div className="copyright">
				      © 2019 <a href="javascript:void(0);">Admin - ClickFood</a>.
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
export default LeftBarSupplyer;