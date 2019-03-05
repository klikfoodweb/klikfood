import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class ProductSubmitHargaJual extends Component {
	constructor(props) {
		super(props);
		this.state = {
			harga_jual: ''
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
		bodyFormData.set('harga_jual', this.state.harga_jual);
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.post(`http://apiklikfood.herokuapp.com/produksupplyer/verifikasi/`+this.props.match.params.id, bodyFormData )
	      .then(res => {
	      	toast.success("Berhasil Diverifikasi !");
	      	setTimeout(() => {
	      		window.location.href='/admin/products/verification';
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
				                Masukkan Harga Jual
				              </h2>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Harga Jual
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Harga Jual" name="harga_jual" value={this.state.name} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		      <Button type="submit">Submit</Button>
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
export default ProductSubmitHargaJual;