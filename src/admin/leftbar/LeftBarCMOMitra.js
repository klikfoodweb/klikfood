import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class LeftBarCMOMitra extends Component {

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
		      	        <Link to="/admin/paket-mitra">
		      	          <i className="material-icons">widgets</i>
		      	          <span>Paket Mitra</span>
		      	        </Link>
		      	      </li>
		      	      <li>
		      	        <Link to="/admin/cmo/mitra">
		      	          <i className="material-icons">widgets</i>
		      	          <span>User Mitra</span>
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
export default LeftBarCMOMitra;