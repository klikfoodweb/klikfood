import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class UpdateOngkir extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ongkirPerKM: ''
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const bodyFormData = new FormData();
		
		bodyFormData.set('ongkirPerKM', this.state.ongkirPerKM);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.post(`https://api.klikfood.id/config/update/ongkir`, bodyFormData )
	      .then(res => {
	      	toast.success("Update ongkir Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/update-ongkir';
	      	}, 3000)
	      }).catch(err => {
	      	toast.error("Gagal Update Ongkir :( ");
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
				                Update Ongkir per KM
				              </h2>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Ongkir
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM" value={this.state.ongkirPerKM} onChange={this.handleChange} />
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
export default UpdateOngkir;