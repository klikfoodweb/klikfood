import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qs from 'qs';
import axios from 'axios';

class EmailVerified extends Component {
	constructor(props) {
		super(props);

		this.state = {
			api_token: ''
		}
	}


	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		
		this.setState({
			api_token: query.get('token')
		})
	}

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		
		axios.get(`https://api.klikfood.id/index.php/token/`+this.state.api_token)
          .then((response) => {
          	sessionStorage.setItem('api_token', query.get('token'));
      		sessionStorage.setItem('username', query.get('username'));
      		sessionStorage.setItem('email', query.get('email'));
      		sessionStorage.setItem('kota', query.get('address'));
      		sessionStorage.setItem('id', query.get('id'));
      		sessionStorage.setItem('role', query.get('role'));

          	toast.success("Selamat Datang !");	
          	setTimeout(() => {
	      		window.location.href='/cart';
	      	}, 2000)
          }).catch((error) => {
            if(sessionStorage.api_token !== undefined){
                sessionStorage.clear();
                setTimeout(() => {
                    window.location.href='/not-verified';
                }, 3000);
            }
          })
	}

	render() {
		return (
			<div className="container">
				<br />
				<h3>Sedang mem Verifikasi Email, Mohon Tunggu Sebentar...</h3>
				<p> Anda akan di Redirect secepatnya...</p>
			</div>
		);
	}
}
export default EmailVerified;