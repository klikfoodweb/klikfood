import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class UserUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			username: '',
			email: '',
			password: '',
			birthplace: '',
			dateofbirth: '',
			address: '',
			no_tlp: '',
			roles: '',
			provinsi: '',
			kota: '',
			provinsis: [],
			kotas: []
		}

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.get(`https://api.klikfood.id/index.php/user/show/`+this.props.match.params.id)
	      .then(response => {

	      	axios.get(`https://api.klikfood.id/index.php/ongkir/kota/`+response.data.data.user.provinsi)
			  .then((res) => {
			  	console.log(res);
				this.setState({ 
					kotas: res.data.data
		  		})	
			  }).catch((error) => {
			  	toast.error("Something Went Wrong :(");
			  })
	      	console.log(response);
	      	this.setState({
	      		name: response.data.data.user.name,
	      		username: response.data.data.user.username,
				email: response.data.data.user.email,
				birthplace: response.data.data.user.birthplace,
				dateofbirth: response.data.data.user.dateofbirth,
				address: response.data.data.user.birthplace,
				no_tlp: response.data.data.user.no_tlp,
				roles: response.data.data.role[0],
				username: response.data.data.user.username,
				provinsi: response.data.data.user.provinsi,
				kota: response.data.data.user.kota,
	      	})
	      }).catch(err => {
	      	toast.error("Gagal Mengambil Info :( ");
	      });

	      axios.get(`https://api.klikfood.id/index.php/ongkir/provinsi`)
		  .then((response) => {
			this.setState({ 
				provinsis: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	componentDidMount() {
	}

	changeProvinsi = (e) => {
		axios.get(`https://api.klikfood.id/index.php/ongkir/kota/`+e.target.value)
		  .then((response) => {
		  	console.log(response)
			this.setState({ 
				provinsi: e.target.value,
				kotas: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
		  e.persist();
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = { 
			name: this.state.name,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			birthplace: this.state.birthplace,
			dateofbirth: this.state.dateofbirth,
			address: this.state.address,
			no_tlp: this.state.no_tlp,
			provinsi: this.state.provinsi,
			kota: this.state.kota
		}

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		console.log(qs.stringify(data));
		axios.patch(`https://api.klikfood.id/index.php/user/update/`+this.props.match.params.id+"?"+qs.stringify(data))
	      .then(response => {
	      	console.log(response);
	      	toast.success("Update User Sukses !");
	      	setTimeout(() => {
	      		// window.location.href='/admin/users';
	      	}, 3000)
	      }).catch(err => {
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	render() {
		return (
			<div>
				<ToastContainer />
				<div classname="row clearfix">
				    <div classname="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				        <div classname="card">
				            <div classname="header">
				              <h2>
				                Ubah User
				              </h2>
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
				        		      Username
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Email
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
				        		      Pilih Provinsi :
				        		    </Form.Label>
				        		    <Col sm={10}>
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
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Pilih Kota :
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		    	<select name="kota" style={{marginBottom: '20px'}} onChange={this.handleChange}>
										  { 
										  	this.state.kotas.map( kota =>
										  		<React.Fragment>
										  		{ (kota.city_id === this.state.kota) ?
										  			<option key={kota.city_id} value={kota.city_id} selected>{kota.type} { kota.city_name }</option>
										  		:
										  			<option key={kota.city_id} value={kota.city_id}>{kota.type} { kota.city_name }</option>
										  		}
										  		</React.Fragment>
										  	)
										  }
										</select>
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		      <Button type="submit">Update</Button>
				        		    </Col>
				        		  </Form.Group>
				        		</Form>;
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		);
	}
}
export default UserUpdate;