import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default class EditHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitting: false,
			header: null
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		  this.setState({
				submitting: true
			})
		  const fd = new FormData();

			fd.append('header', this.state.header);

		  axios.post(
		    `http://35.243.170.33/index.php/header`,
		    fd,
		    { headers: { 'Authorization': sessionStorage.api_token, 'Content-Type': 'application/x-www-form-urlencoded' } }
		  ).then(response => {
		  	console.log(response);
	      	this.setState({
				submitting: true
			})
	      	toast.success("Update Header Toko Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin';
	      	}, 3000)
	      }).catch(err => {
	      	this.setState({
				submitting: false
			})
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	handleChangeHeader = (e) => {
		this.setState({header:e.target.files[0]})
	}

	render() {
		return (
			<div>
			<ToastContainer />
				<section style={{ marginBottom: '50px', marginLeft: '30px' }}>{/*form*/}
			        <div className="container">
			            	<div classname="header">
				              <center><h2>
				                Header Toko
				              </h2></center>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
								
									<Form.Group as={Row} controlId="formHorizontalName">
					        		    <Form.Label column sm={2}>
					        		      Upload Header
					        		    </Form.Label>
					        		    <Col sm={10}>
					        		    	<label>Disarankan Ukuran Header nya (Tinggi : 256px & Lebar : 1024px)</label>
					        		    	<input type="file" name="header" onChange={this.handleChangeHeader} />
					        		    </Col>
					        		</Form.Group>
							
									<Form.Group as={Row}>
					        		    <Col sm={{ span: 10, offset: 2 }}>
					        		    	{this.state.submitting ?
											<div>
												<b><center>Uploading...</center></b>
											</div>
											:
												<button type="submit" className="btn btn-primary">Update</button>
											}
					        		    </Col>
					        		</Form.Group>
			        		</Form>
			        	</div>
			        </div>
			     </section>
			</div>
		);
	}
}
