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

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			registName: '',
			registEmail: '',
			registPassword: '',
			registBirthplace: '',
			registDateOfBirth: '',
			registAddress: '',
			registProvinsi: '',
			registKota: '',
			registHp: '',
			registReff: '',
			registType: '',
			submitting: false,
			registrating: false,
			redirect: false,
			provinsis: [],
			kotas: []
		}
		
	}

	componentDidMount() {
		var email_sayembara = this.props.location.search.split('=');
		if( email_sayembara.length !== 0 ){
			this.setState({
				registEmail: email_sayembara[1]
			})
		}

		axios.get(`http://35.243.170.33/index.php/ongkir/provinsi`)
		  .then((response) => {
			this.setState({ 
				provinsis: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Provinsi :(");
		  })
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	changeProvinsi = (e) => {
		axios.get(`http://35.243.170.33/index.php/ongkir/kota/`+e.target.value)
		  .then((response) => {
		  	console.log(response)
			this.setState({ 
				registProvinsi: e.target.value,
				kotas: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Ongkir :(");
		  })
		  e.persist();
	}

	handleSubmit = (event) => {
		event.preventDefault();
		sessionStorage.clear();
		this.setState({
			submitting: true
		})
		const data = { 
			email: this.state.email,
			password: this.state.password
		}
		axios.post(`http://35.243.170.33/index.php/login`, qs.stringify( data ))
	      .then((response) => {
	      	let responseJSON = response;
	      	if(responseJSON.data.success) {
	      		sessionStorage.setItem('api_token', responseJSON.data.data.api_token);
	      		sessionStorage.setItem('username', responseJSON.data.data.user.name);
	      		sessionStorage.setItem('email', responseJSON.data.data.user.email);
	      		sessionStorage.setItem('kota', responseJSON.data.data.user.kota);
	      		sessionStorage.setItem('id', responseJSON.data.data.user._id);
	      		sessionStorage.setItem('role', responseJSON.data.data.role);
	      	}  
	      	toast.success("You Are Logged In !");
	      	setTimeout(() => {
	      		this.setState({ 
	      			submitting: true,
					redirect: true
	      		});
	      		// window.location.href='/';
	      	}, 3000)
	        console.log(response);
	      }).catch((error) => {
	      	toast.error("Gagal Menghubungi Server :(");
	      	this.setState({
				submitting: false
			})
	      })
	}

	handleRegister = (event) => {
		event.preventDefault();
		sessionStorage.clear();
		this.setState({
			registrating: true
		})
		const data = { 
			name: this.state.registName,
			username: this.state.registUsername,
			email: this.state.registEmail,
			password: this.state.registPassword,
			birthplace: this.state.registBirthplace,
			dateofbirth: this.state.registDateOfBirth,
			address: this.state.registAddress,
			provinsi: this.state.registProvinsi,
			kota: this.state.registKota,
			no_tlp: this.state.registHp,
			referall_id: this.state.registReff
		}
		console.log(qs.stringify( data ));
		let url = '';
		if (this.state.registType === 'supplyer'){
			url = 'http://35.243.170.33/index.php/register/supplyer';
		}else if(this.state.registType === 'mitra'){
			url = 'http://35.243.170.33/index.php/register/mitra';
		}else{
			url = 'http://35.243.170.33/index.php/register/konsumen';
		}
		axios.post(url, qs.stringify( data ))
	      .then((response) => {
	      	toast.success("Silahkan Cek Email Verifikasi !");
	      	setTimeout(() => {
	      		this.setState({ 
	      			registrating: true,
					redirect: true
	      		});
	      		// window.location.href='/';
	      	}, 3000)
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
	    if (sessionStorage.length !== 0) {
	      	{toast.success("Anda Sudah Login !")}
			return (
				<Redirect to={'/'}/>
			)
	    }
		return (
			<div> 
				<ToastContainer />
				<section style={{ marginBottom: '80px' }}>{/*form*/}
			        <div className="container">
			          <div className="row">
			            <div className="col-sm-4 col-sm-offset-1">
			              <div className="login-form">{/*login form*/}
			                <h2>Masuk ke Akun Anda</h2>
			                <form onSubmit={this.handleSubmit}>
			                  <input type="email" name="email" placeholder="Alamat Email" value={this.state.email} onChange={this.handleChange} required />
			                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
			                  <Link to="/forget">Lupa Kata Sandi?</Link>
			                  {/*<span>
			                    <input type="checkbox" className="checkbox" /> 
			                    Keep me signed in
			                  </span>*/}
								{this.state.submitting ?
								<div>
									<b>Sedang Masuk...</b>
								</div>
								:
									<button type="submit" className="btn btn-success">Masuk</button>
								}
			                </form>
			              </div>{/*/login form*/}
			            </div>
			            <div className="col-sm-1">
			              <h2 className="or">Atau</h2>
			            </div>
			            <div className="col-sm-4">
			              <div className="signup-form">{/*sign up form*/}
			                <h2>Daftar Baru!</h2>
			                <form onSubmit={this.handleRegister}>
			                  <input type="text" name="registName" placeholder="Nama" value={this.state.registName} onChange={this.handleChange} required />
			                  <input type="text" name="registUsername" placeholder="Username" value={this.state.registUsername} onChange={this.handleChange} required />
			                  <input type="email" name="registEmail" placeholder="Alamat Email" value={this.state.registEmail} onChange={this.handleChange} required />
			                  <input type="password" name="registPassword" placeholder="Password" value={this.state.registPassword} onChange={this.handleChange} required />
			                  <input type="text" name="registBirthplace" placeholder="Tempat Lahir" value={this.state.registBirthplace} onChange={this.handleChange} required />
			                  <input type="date" name="registDateOfBirth" placeholder="Tanggal Lahir" value={this.state.registDateOfBirth} onChange={this.handleChange} required />
			                  <input type="text" name="registAddress" placeholder="Alamat" value={this.state.registAddress} onChange={this.handleChange} required />
			                  <label> Pilih Provinsi : </label>
			                    <select name="registProvinsi" style={{marginBottom: '20px'}} onChange={this.changeProvinsi} required>
			                    <option value="#">Pilih Provinsi</option>
								  { 
								  	this.state.provinsis.map( provinsi =>
								  		<React.Fragment>
								  		<option key={provinsi.province_id} value={provinsi.province_id}>{ provinsi.province }</option>
								  		</React.Fragment>
								  	)
								  }
								</select>
							  <label> Pilih Kota : </label>
			                    <select name="registKota" style={{marginBottom: '20px'}} onChange={this.handleChange} required>
								  { 
								  	this.state.kotas.map( kota =>
								  		<React.Fragment>
								  		<option key={kota.city_id} value={kota.city_id}>{kota.type} { kota.city_name }</option>
								  		</React.Fragment>
								  	)
								  }
								</select>
			                  <input type="text" name="registHp" placeholder="No Telp" value={this.state.registHp} onChange={this.handleChange} required />
			                  <input type="text" name="registReff" placeholder="Refferal" value={this.state.registReff} onChange={this.handleChange} />
			                  <label> Daftar Sebagai : </label>
			                    <select name="registType" style={{marginBottom: '20px'}} onChange={this.handleChange} required>
								  <option value="konsumen">Konsumen</option>
								  <option value="mitra">Mitra</option>
								  <option value="supplyer">Pemasok</option>
								</select>
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
export default Login;