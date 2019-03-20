import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class UserInfo extends Component {
	componentDidMount() {
		console.log(sessionStorage);
	}
	
	logout = () => {
  	axios.get(`https://api.klikfood.id/index.php/logout`, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  .then((response) => {
		sessionStorage.clear();
		localStorage.clear();
	  	toast.success("Log Out Berhasil !");
	  	setTimeout(() => {
	  		this.setState({ 
				redirect: true,
				logged: true
	  		})
	  		window.location.href='/';
	  	}, 3000)
	  }).catch((error) => {
	  	toast.error("Tidak Bisa Logout :(");
	  })
  	}

	render() {
		return (
			<div><div className="user-info">
				  <div className="image">
				    <img src={process.env.PUBLIC_URL + '/admin/images/user.png'} width={48} height={48} alt="User" />
				  </div>
				  <div className="info-container">
				    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{ sessionStorage.username }</div>
				    <div className="email">{ sessionStorage.email }</div>
				    <div className="btn-group user-helper-dropdown">
				      <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
				      <ul className="dropdown-menu pull-right">
				        <li><a href="/profile"><i className="material-icons">person</i>Profil</a></li>
				        <li role="separator" className="divider" />
				        <li><a href="#" onClick={this.logout}><i className="material-icons">input</i>Keluar</a></li>
				      </ul>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default UserInfo;