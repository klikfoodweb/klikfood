import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarConsument extends Component {

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
				        <a href="#" className="menu-toggle">
				          <i className="material-icons">widgets</i>
				          <span>Transaksi</span>
				        </a>
				        <ul className="ml-menu">
				          <li>
				            <Link to="/admin/transactions/pembelian">
				              <span>Pembelian</span>
				            </Link>
				          </li>
				        </ul>
				      </li>
				      <li>
				        <Link to="/admin/sayembara">
				          <i className="material-icons">widgets</i>
				          <span>Sayembara Log</span>
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
export default LeftBarConsument;