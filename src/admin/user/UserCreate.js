import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class UserCreate extends Component {
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
			roles: 'konsumen'
		}
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
			email: this.state.email,
			password: this.state.password,
			birthplace: this.state.birthplace,
			dateofbirth: this.state.dateofbirth,
			address: this.state.address,
			no_tlp: this.state.no_tlp,
			roles: this.state.roles
		}

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		console.log(data);
		axios.post(`http://apiklikfood.herokuapp.com/user/store`, qs.stringify(data))
	      .then(response => {
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
export default UserCreate;