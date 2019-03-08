import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			birthplace: '',
			dateofbirth: '',
			address: '',
			no_tlp: '',
			roles: '',
			username: '',
			kota: '',
			provinsi: '',
			kotas: [],
			provinsis: [],
			user: [],
			updating: false
		}

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.get(`http://apiklikfood.herokuapp.com/myaccount`)
	      .then(response => {

	      	axios.get(`http://apiklikfood.herokuapp.com/ongkir/kota/`+response.data.data.provinsi)
			  .then((res) => {
				this.setState({ 
					kotas: res.data.data
		  		})	
			  }).catch((error) => {
			  	toast.error("Something Went Wrong :(");
			  })
	      	
	      	this.setState({
	      		name: response.data.data.name,
				email: response.data.data.email,
				birthplace: response.data.data.birthplace,
				dateofbirth: response.data.data.dateofbirth,
				address: response.data.data.birthplace,
				no_tlp: response.data.data.no_tlp,
				roles: response.data.data.roles,
				username: response.data.data.username,
				provinsi: response.data.data.provinsi,
				kota: response.data.data.kota,
	      	})
	      }).catch(err => {
	      	toast.error("Gagal Mengambil Info :( ");
	      });

	      axios.get(`http://apiklikfood.herokuapp.com/ongkir/provinsi`)
		  .then((response) => {
			this.setState({ 
				provinsis: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	componentDidMount() {
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			updating: true
		})
		const data = { 
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			birthplace: this.state.birthplace,
			dateofbirth: this.state.dateofbirth,
			address: this.state.address,
			no_tlp: this.state.no_tlp,
			username: this.state.username,
			provinsi: this.state.provinsi,
			kota: this.state.kota,
			roles: sessionStorage.role
		}

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.patch(`http://apiklikfood.herokuapp.com/account`+"?"+qs.stringify(data))
	      .then(response => {
	      	this.setState({
				updating: true
			})
	      	toast.success("Update Akun Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/profile';
	      	}, 3000)
	      }).catch(err => {
	      	this.setState({
				updating: false
			})
	      	toast.error("Gagal Update Akun :( ");
	      });
	}

	changeProvinsi = (e) => {
		axios.get(`http://apiklikfood.herokuapp.com/ongkir/kota/`+e.target.value)
		  .then((response) => {
		  	this.setState({ 
				provinsi: e.target.value,
				kotas: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
		  e.persist();
	}

	render() {
		if (sessionStorage.length === 0) {
			{toast.success("Login Terlebih Dahulu !")}
			return (
				<Redirect to={'/login'}/>
			)
	    }

		return (
			<div> 
				<ToastContainer />
				<section style={{ marginBottom: '50px', marginLeft: '30px' }}>{/*form*/}
			        <div className="container">
			            	<div classname="header">
				              <center><h2>
				                Update Profile
				              </h2></center>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Name
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Ganti Email ? *harus verifikasi kembali
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Tempat Lahir
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Tempat Lahir" name="birthplace" value={this.state.birthplace} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Tanggal Lahir
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="date" placeholder="Tanggal Lahir" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Alamat
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Alamat" name="address" value={this.state.address} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      No Telepon
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="No Telepon" name="no_tlp" value={this.state.no_tlp} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Ganti Password ? *opsional
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <label> Pilih Provinsi : </label>
			                    <select name="provinsi" style={{marginBottom: '20px'}} onChange={this.changeProvinsi}>
								  { 
								  	this.state.provinsis.map( provinsi =>
								  		<React.Fragment>
								  		{ (provinsi.province_id === this.state.provinsi) ?
								  			<option key={provinsi.province_id} value={provinsi.province_id} selected>{ provinsi.province }</option>
								  		:
								  			<option key={provinsi.province_id} value={provinsi.province_id}>{ provinsi.province }</option>
								  		}
								  		</React.Fragment>
								  	)
								  }
								</select>
							  <label> Pilih Kota : </label>
			                    <select name="kota" style={{marginBottom: '20px'}} onChange={this.handleChange}>
								  { 
								  	this.state.kotas.map( kota =>
								  		<React.Fragment>
								  		{ (kota.city_id === this.state.kota) ?
								  			<option key={kota.city_id} value={kota.city_id} selected>{ kota.city_name }</option>
								  		:
								  			<option key={kota.city_id} value={kota.city_id}>{ kota.city_name }</option>
								  		}
								  		</React.Fragment>
								  	)
								  }
								</select>

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		    	{this.state.updating ?
										<div>
											<b><center>Updating...</center></b>
										</div>
										:
											<button type="submit" className="btn btn-primary">Update</button>
										}
				        		    </Col>
				        		  </Form.Group>
				        		</Form>;
				         </div>    
				    </div>
				</section>
				<footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
			      </footer>
			</div>
		);
	}
}
