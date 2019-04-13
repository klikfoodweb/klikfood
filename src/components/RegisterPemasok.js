import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../login.css';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

class RegisterPemasok extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registName: '',
			registEmail: '',
			registPassword: '',
			registAddress: '',
			registDetailAddress: '',
			registHp: '',
			registrating: false,
			redirect: false
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	sessionStorage.clear();
	// 	this.setState({
	// 		submitting: true
	// 	})
	// 	const data = { 
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	}
	// 	axios.post(`https://api.klikfood.id/index.php/login`, qs.stringify( data ))
	//       .then((response) => {
	//       	let responseJSON = response;
	//       	if(responseJSON.data.success) {
	//       		sessionStorage.setItem('api_token', responseJSON.data.data.api_token);
	//       		sessionStorage.setItem('username', responseJSON.data.data.user.name);
	//       		sessionStorage.setItem('email', responseJSON.data.data.user.email);
	//       		sessionStorage.setItem('kota', responseJSON.data.data.user.address);
	//       		sessionStorage.setItem('id', responseJSON.data.data.user._id);
	//       		sessionStorage.setItem('role', responseJSON.data.data.role);
	//       	}  
	//       	toast.success("Selamat Datang !");
	//       	setTimeout(() => {
	//       		this.setState({ 
	//       			submitting: true,
	// 				redirect: true
	//       		});
	//       		// window.location.href='/';
	//       	}, 2000)
	//         console.log(response);
	//       }).catch((error) => {
	//       	toast.error("Gagal Menghubungi Server :(");
	//       	this.setState({
	// 			submitting: false
	// 		})
	//       })
	// }

	handleRegister = (event) => {
		event.preventDefault();

		this.setState({
			registrating: true
		})

		const data = { 
			name: this.state.registName,
			username: this.state.registUsername,
			email: this.state.registEmail,
			password: this.state.registPassword,
			address: document.getElementById('origin').value,
			detail_address: this.state.registDetailAddress,
			no_tlp: this.state.registHp
		}
		console.log(qs.stringify( data ));
		let url = 'https://api.klikfood.id/index.php/register/supplyer';

		axios.post(url, qs.stringify( data ))
	      .then((response) => {
	      	console.log(response)
	      	toast.success("Silahkan Cek Email Verifikasi !");
	      	setTimeout(() => {
	      		this.setState({ 
	      			registrating: true,
					redirect: true
	      		});
	      		// window.location.href='/';
	      	}, 2000)
	        console.log(response);
	      }).catch((error) => {
	      	toast.error("Gagal Menghubungi Server :(");
	      	this.setState({
				registrating: false
			})
	      })
	}

	render() {
		if (this.state.redirect) {
			return (
				<Redirect to={'/'}/>
			)
	    }
		return (
			<div> 
				<section style={{ marginBottom: '80px' }}>{/*form*/}
			        <div className="container">
			          <div className="row">
			            <div className="col-sm-12">
			              <div className="signup-form">{/*sign up form*/}
			                <h2>Daftar Jadi Pemasok!</h2>
			                
			                <form onSubmit={this.handleRegister} id="distance_form">
			                  <input type="text" name="registName" placeholder="Nama" value={this.state.registName} onChange={this.handleChange} required />
							  <input class="form-control" id="from_places" placeholder="Kota" name="registAddress" onChange={this.handleChange} /> 
							  <input id="origin" name="registAddress" onChange={this.handleChange} required="" type="hidden" />
			                  <input type="text" name="registDetailAddress" placeholder="Alamat Detail ( Jl. Bunter Sukadana RT03/04 )" value={this.state.registDetailAddress} onChange={this.handleChange} required />
			                  <input type="text" name="registUsername" placeholder="Username" value={this.state.registUsername} onChange={this.handleChange} required />
			                  <input type="email" name="registEmail" placeholder="Alamat Email" value={this.state.registEmail} onChange={this.handleChange} required />
			                  <input type="password" name="registPassword" placeholder="Password" value={this.state.registPassword} onChange={this.handleChange} required />
		                  

			                  {/*<input type="text" name="registAddress" id="from_places" placeholder="Alamat" value={this.state.registAddress} onChange={this.handleChange} required />
			                  <input id="origin" name="origin" type="hidden" />*/}
			                  
			                  <input type="text" name="registHp" placeholder="No Telp" value={this.state.registHp} onChange={this.handleChange} required />
			                  
								{this.state.registrating ?
								<div>
									<b>Mendaftar...</b>
								</div>
								:
									<button type="submit" className="btn btn-success">Daftar</button>
								}
			                </form>
			              </div>{/*/sign up form*/}
			            </div>
			          </div>
			        </div>
			      </section>{/*/form*/}
			      <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
			      </footer>
			</div>
		);
	}
}
export default RegisterPemasok;