import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class UserCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			usename: '',
			password: '',
			email: '',
			birthplace: '',
			dateofbirth: '',
			address: '',
			no_tlp: '',
			roles: 'konsumen',
			provinsi: '',
			kota: '',
			provinsis: [],
			kotas: []
		}
	}

	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/ongkir/provinsi`)
		  .then((response) => {
			this.setState({ 
				provinsis: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
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

		const bodyFormData = new FormData();
		
		bodyFormData.set('name', this.state.name);
		bodyFormData.set('username', this.state.username);
		bodyFormData.set('email', this.state.email);
		bodyFormData.set('password', this.state.password);
		bodyFormData.set('birthplace', this.state.birthplace);
		bodyFormData.set('dateofbirth', this.state.dateofbirth);
		bodyFormData.set('address', this.state.address);
		bodyFormData.set('provinsi', this.state.provinsi);
		bodyFormData.set('kota', this.state.kota);
		bodyFormData.set('no_tlp', this.state.no_tlp);
		bodyFormData.set('roles', this.state.roles);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.post(`https://api.klikfood.id/index.php/user/store`, bodyFormData)
	      .then(response => {
	      	console.log(response);
	      	toast.success("Menambah User Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/users';
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
				                Tambah User
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

				        		  <Form.Group as={Row} controlId="formHorizontalUserName">
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
				        		      Password
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
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
				        		    	<select name="provinsi" style={{marginBottom: '20px'}} onChange={this.changeProvinsi} required>
										  { 
										  	this.state.provinsis.map( provinsi =>
										  		<React.Fragment>
										  		<option key={provinsi.province_id} value={provinsi.province_id}>{ provinsi.province }</option>
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
				        		    	<select name="kota" style={{marginBottom: '20px'}} onChange={this.handleChange} required>
										  { 
										  	this.state.kotas.map( kota =>
										  		<React.Fragment>
										  		<option key={kota.city_id} value={kota.city_id}>{ kota.city_name }</option>
										  		</React.Fragment>
										  	)
										  }
										</select>  
				        		    </Col>
				        		  </Form.Group>
								  
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Roles
				        		    </Form.Label>
				        		    <Col sm={10}>
			        		            <Form.Check
			        		              type="radio"
			        		              label="Konsumen"
			        		              name="roles"
			        		              id="formHorizontalRadios1"
			        		              value="Konsumen"
			        		              onClick={this.handleChange}
			        		            />
			        		            <Form.Check
			        		              type="radio"
			        		              label="Mitra"
			        		              name="roles"
			        		              id="formHorizontalRadios2"
			        		              value="Mitra"
			        		              onClick={this.handleChange}
			        		            />
			        		            <Form.Check
			        		              type="radio"
			        		              label="Supplyer"
			        		              name="roles"
			        		              id="formHorizontalRadios3"
			        		              value="Supplyer"
			        		              onClick={this.handleChange}
			        		            />
			        		          </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		      <Button type="submit">Tambahkan</Button>
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
export default UserCreate;