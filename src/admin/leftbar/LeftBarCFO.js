import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarCFO extends Component {

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
		      	          <span>Transaksi Distribusi</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/transaction-consuments/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Transaksi Konsumen</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/transaction-central/verification">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Transaksi Pusat</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/list-bank">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Bank Akun</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <a href="#" className="menu-toggle">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Tagihan</span>
		      	        </a>
		      	        <ul class="ml-menu">
                            <li>
                                <Link to="/admin/bills/supplyer">
                                    <span>Pemasok</span>
                                </Link>
                        	</li>
                        	<li>
                                <Link to="/admin/bills/mitra">
                                    <span>Mitra</span>
                                </Link>
                        	</li>
                        </ul>
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
export default LeftBarCFO;