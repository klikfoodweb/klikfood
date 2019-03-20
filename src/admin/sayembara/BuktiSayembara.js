import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class BuktiSayembara extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bukti_install: null,
			submitting: false
		}
	}

	handleChangeFoto = (event) => {
		this.setState({bukti_install:event.target.files[0]})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submitting: true
		})
		const bodyFormData = new FormData();
		
		bodyFormData.append('bukti_install', this.state.bukti_install);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.post(`https://api.klikfood.id/index.php/buktiinstall`, bodyFormData )
	      .then(res => {
	      	this.setState({
				submitting: true
			})
	      	toast.success("Upload Bukti Install Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/sayembara';
	      	}, 3000)
	      }).catch(err => {
	      	this.setState({
				submitting: false
			})
	      	toast.error("Gagal Upload :( ");
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
				                Upload Bukti Install
				              </h2>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Bukti Install
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="file" name="bukti_install" onChange={this.handleChangeFoto} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row}>
				        		    <Col sm={{ span: 10, offset: 2 }}>
				        		      {this.state.submitting ?
										<div>
											<b><center>Sedang Upload...</center></b>
										</div>
										:
											<Button type="submit" className="btn btn-success">Upload</Button>
										}
				        		    </Col>
				        		  </Form.Group>
				        		</Form>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		);
	}
}
export default BuktiSayembara;