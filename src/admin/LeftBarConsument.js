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
				        <a href="javascript:void(0);" className="menu-toggle">
				          <i className="material-icons">widgets</i>
				          <span>Transaksi</span>
				        </a>
				        <ul className="ml-menu">
				          <li>
				            <a href="javascript:void(0);" className="menu-toggle">
				              <span>Cards</span>
				            </a>
				            <ul className="ml-menu">
				              <li>
				                <a href="pages/widgets/cards/basic.html">Basic</a>
				              </li>
				              <li>
				                <a href="pages/widgets/cards/colored.html">Colored</a>
				              </li>
				              <li>
				                <a href="pages/widgets/cards/no-header.html">No Header</a>
				              </li>
				            </ul>
				          </li>
				          <li>
				            <a href="javascript:void(0);" className="menu-toggle">
				              <span>Infobox</span>
				            </a>
				            <ul className="ml-menu">
				              <li>
				                <a href="pages/widgets/infobox/infobox-1.html">Infobox-1</a>
				              </li>
				              <li>
				                <a href="pages/widgets/infobox/infobox-2.html">Infobox-2</a>
				              </li>
				              <li>
				                <a href="pages/widgets/infobox/infobox-3.html">Infobox-3</a>
				              </li>
				              <li>
				                <a href="pages/widgets/infobox/infobox-4.html">Infobox-4</a>
				              </li>
				              <li>
				                <a href="pages/widgets/infobox/infobox-5.html">Infobox-5</a>
				              </li>
				            </ul>
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
export default LeftBarConsument;