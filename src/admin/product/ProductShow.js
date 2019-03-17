import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class ProductShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			name: '',
			stok: '',
			berat_kemasan: '',
			harga_supplyer: '',
			expire: '',
			deskripsi: '',
			type: '',
			kategori_id: '',
			foto_1: null,
			foto_2: null,
			foto_3: null
		}
	}

	componentDidMount() {
		axios.get(`http://35.243.170.33/index.php/kategori`)
		  .then((response) => {
		  	this.setState({
		  		categories: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })

		  axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
			}

		 axios.get(`http://35.243.170.33/index.php/produksupplyer/show/`+this.props.match.params.id)
		  .then((response) => {
		  	console.log(response);
		  	this.setState({
		  		name: response.data.data.name,
		  		stok: response.data.data.stok,
		  		berat_kemasan: response.data.data.berat_kemasan,
		  		harga_supplyer: response.data.data.harga_supplyer,
		  		expire: response.data.data.expire,
		  		deskripsi: response.data.data.deskripsi,
		  		type: response.data.data.type,
		  		kategori_id: response.data.data.kategori_id,
		  		foto_1: response.data.data.foto_1,
		  		foto_2: response.data.data.foto_2,
		  		foto_3: response.data.data.foto_3
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
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
				                Detail Produk
				              </h2>
				            </div>
				            <div classname="body">
				        		<Form onSubmit={this.handleSubmit} >
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Nama Barang
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Stok
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="number" placeholder="Stok" name="stok" value={this.state.stok} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Berat Kemasan
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="number" placeholder="Berat Kemasan" name="berat_kemasan" value={this.state.berat_kemasan} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Harga Supplyer
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="number" placeholder="Harga Supplyer" name="harga_supplyer" value={this.state.harga_supplyer} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Tanggal Kadaluarsa
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="date" placeholder="Kadaluarsa" name="expire" value={this.state.expire} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Deskripsi
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Deskripsi" name="deskripsi" value={this.state.deskripsi} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Gambar
				        		    </Form.Label>
				        		    <Col sm={3}>
				        		    { (this.state.foto_1) ? 
				        		    	<img src={ "http://bajax.0hi.me/produk/" + this.props.match.params.id + "/" + this.state.foto_1 } height="150px" />
				        		    	: null
				        		    }
				        		    </Col>
				        		    <Col sm={3}>
				        		    { (this.state.foto_2) ? 
				        		    	<img src={ "http://bajax.0hi.me/produk/" + this.props.match.params.id + "/" + this.state.foto_2 } height="150px" />
				        		    	: null
				        		    }
				        		    </Col>
				        		    <Col sm={3}>
				        		    { (this.state.foto_3) ? 
				        		    	<img src={ "http://bajax.0hi.me/produk/" + this.props.match.params.id + "/" + this.state.foto_3 } height="150px" />
				        		    	: null
				        		    }
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Kategori ID
				        		    </Form.Label>
				        		    <Col sm={2}>
				        		    <label>{ this.state.kategori_id }</label>
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
export default ProductShow;