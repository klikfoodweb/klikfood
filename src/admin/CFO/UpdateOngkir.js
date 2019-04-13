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
			ongkirPerKM1: '',
			ongkirPerKM2: '',
			ongkirPerKM3: '',
			ongkirPerKM4: '',
			ongkirPerKM5: '',
			ongkirPerKM6: '',
			ongkirPerKM7: '',
			ongkirPerKM8: '',
			ongkirPerKM9: '',
			ongkirPerKM10: '',
			ongkirPerKM11: '',
			ongkirPerKM12: ''
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/jarak/show`)
	      .then(res => {
	      	this.setState({
	     		ongkirPerKM1: res.data.data.ongkirPerKM1,
				ongkirPerKM2: res.data.data.ongkirPerKM2,
				ongkirPerKM3: res.data.data.ongkirPerKM3,
				ongkirPerKM4: res.data.data.ongkirPerKM4,
				ongkirPerKM5: res.data.data.ongkirPerKM5,
				ongkirPerKM6: res.data.data.ongkirPerKM6,
				ongkirPerKM7: res.data.data.ongkirPerKM7,
				ongkirPerKM8: res.data.data.ongkirPerKM8,
				ongkirPerKM9: res.data.data.ongkirPerKM9,
				ongkirPerKM10: res.data.data.ongkirPerKM10,
				ongkirPerKM11: res.data.data.ongkirPerKM11,
				ongkirPerKM12: res.data.data.ongkirPerKM12 		
	      	})
	      }).catch(err => {
	      	toast.error("Gagal Ambil Info Ongkir :( ");
	      });
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const bodyFormData = new FormData();
		
		bodyFormData.set('ongkirPerKM1', this.state.ongkirPerKM1);
		bodyFormData.set('ongkirPerKM2', this.state.ongkirPerKM2);
		bodyFormData.set('ongkirPerKM3', this.state.ongkirPerKM3);
		bodyFormData.set('ongkirPerKM4', this.state.ongkirPerKM4);
		bodyFormData.set('ongkirPerKM5', this.state.ongkirPerKM5);
		bodyFormData.set('ongkirPerKM6', this.state.ongkirPerKM6);
		bodyFormData.set('ongkirPerKM7', this.state.ongkirPerKM7);
		bodyFormData.set('ongkirPerKM8', this.state.ongkirPerKM8);
		bodyFormData.set('ongkirPerKM9', this.state.ongkirPerKM9);
		bodyFormData.set('ongkirPerKM10', this.state.ongkirPerKM10);
		bodyFormData.set('ongkirPerKM11', this.state.ongkirPerKM11);
		bodyFormData.set('ongkirPerKM12', this.state.ongkirPerKM12);

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
				        		      Jarak 0 - 5 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM1" value={this.state.ongkirPerKM1} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 6 - 10 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM2" value={this.state.ongkirPerKM2} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 11 - 15 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM3" value={this.state.ongkirPerKM3} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 16 - 20 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM4" value={this.state.ongkirPerKM4} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 21 - 25 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM5" value={this.state.ongkirPerKM5} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 26 - 30 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM6" value={this.state.ongkirPerKM6} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 31 - 35 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM7" value={this.state.ongkirPerKM7} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 36 - 40 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM8" value={this.state.ongkirPerKM8} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 41 - 45 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM9" value={this.state.ongkirPerKM9} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 46 - 50 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM10" value={this.state.ongkirPerKM10} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 51 - 55 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM11" value={this.state.ongkirPerKM11} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Jarak 56 - 60 KM
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Ongkir" name="ongkirPerKM12" value={this.state.ongkirPerKM12} onChange={this.handleChange} />
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