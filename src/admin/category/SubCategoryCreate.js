import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import qs from 'qs';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class CategoryCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
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
		
		bodyFormData.set('name', this.state.name);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.post(`http://apiklikfood.herokuapp.com/subkategori/store/`+this.props.match.params.id, bodyFormData )
	      .then(res => {
	      	toast.success("Tambah Sub Kategori Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/categories';
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
				                Buat Sub Kategori
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

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		      <Button type="submit">Create</Button>
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
export default CategoryCreate;