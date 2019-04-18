import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class ProductUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			name: '',
			stok: '',
			berat_kemasan: '',
			harga_supplyer: '',
			harga_jual: '',
			expire: '',
			deskripsi: '',
			type: '',
			kategori_id: '',
			foto_1: null,
			foto_2: null,
			foto_3: null,
			satuan: ''
		}
	}

	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/kategori`)
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

		 axios.get(`https://api.klikfood.id/index.php/produksupplyer/show/`+this.props.match.params.id)
		  .then((response) => {
		  	this.setState({
		  		name: response.data.data.name,
		  		stok: response.data.data.stok,
		  		berat_kemasan: response.data.data.berat_kemasan,
		  		harga_supplyer: response.data.data.harga_supplyer,
		  		harga_jual: response.data.data.harga_jual,
		  		expire: response.data.data.expire,
		  		deskripsi: response.data.data.deskripsi,
		  		type: response.data.data.type,
		  		kategori_id: response.data.data.kategori_id,
		  		foto_1: response.data.data.foto_1,
		  		foto_2: response.data.data.foto_2,
		  		foto_3: response.data.data.foto_3,
		  		satuan: response.data.data.satuan
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	handleChange = (event) => {
		console.log(event.target)
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleChangeFoto1 = (e) => {
		this.setState({foto_1:e.target.files[0]})
	}

	handleChangeFoto2 = (e) => {
		this.setState({foto_2:e.target.files[0]})
	}

	handleChangeFoto3 = (e) => {
		this.setState({foto_3:e.target.files[0]})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const bodyFormData = new FormData();
		
		bodyFormData.set('name', this.state.name);
		bodyFormData.set('stok', this.state.stok);
		bodyFormData.set('berat_kemasan', this.state.berat_kemasan);
		bodyFormData.set('harga_supplyer', this.state.harga_supplyer);
		bodyFormData.set('harga_jual', this.state.harga_jual);
		bodyFormData.set('expire', this.state.expire);
		bodyFormData.set('deskripsi', this.state.deskripsi);
		bodyFormData.set('type', this.state.type);
		bodyFormData.set('kategori_id', this.state.kategori_id);
		bodyFormData.append('foto_1', this.state.foto_1);
		bodyFormData.append('foto_2', this.state.foto_2);
		bodyFormData.append('foto_3', this.state.foto_3);
		bodyFormData.set('satuan', this.state.satuan);

		axios.defaults.headers = {  
			'Content-Type': 'multipart/form-data',  
			'Authorization': sessionStorage.api_token 
		}
		console.log(bodyFormData);
		axios.post(`https://api.klikfood.id/index.php/produksupplyer/update/`+this.props.match.params.id, bodyFormData)
	      .then(response => {
	      	console.log(response)
	      	toast.success("Produk Berhasil diUbah!");
	      	setTimeout(() => {
	      		window.history.back();
	      	}, 2000)
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
				        		      Jumlah Kemasan
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
				        		      Harga Jual
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="number" placeholder="Harga Jual" name="harga_jual" value={this.state.harga_jual} onChange={this.handleChange} />
				        		    </Col>
				        		  </Form.Group>
				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Satuan
				        		    </Form.Label>
				        		    <Col sm={10}>
				        		      <Form.Control type="text" placeholder="Satuan" name="satuan" value={this.state.satuan} onChange={this.handleChange} />
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
				        		      Upload Gambar
				        		    </Form.Label>
				        		    <Col sm={3}>
				        		    { (this.state.foto_1) ? 
				        		    	<img src={ "https://api.klikfood.id/uploads/produk/" + this.props.match.params.id + "/" + this.state.foto_1 } height="150px" />
				        		    	: null
				        		    }
				        		      <Form.Control type="file" name="foto_1" onChange={this.handleChangeFoto1} />
				        		    </Col>
				        		    <Col sm={3}>
				        		    { (this.state.foto_2) ? 
				        		    	<img src={ "https://api.klikfood.id/uploads/produk/" + this.props.match.params.id + "/" + this.state.foto_2 } height="150px" />
				        		    	: null
				        		    }
				        		      <Form.Control type="file" name="foto_2" onChange={this.handleChangeFoto2} />
				        		    </Col>
				        		    <Col sm={3}>
				        		    { (this.state.foto_3) ? 
				        		    	<img src={ "https://api.klikfood.id/uploads/produk/" + this.props.match.params.id + "/" + this.state.foto_3 } height="150px" />
				        		    	: null
				        		    }
				        		      <Form.Control type="file" name="foto_3" onChange={this.handleChangeFoto3} />
				        		    </Col>
				        		  </Form.Group>

				        		  <Form.Group as={Row} controlId="formHorizontalName">
				        		    <Form.Label column sm={2}>
				        		      Kategori
				        		    </Form.Label>
				        		    { this.state.categories.map((category,i) =>
				        		    <Col sm={2}>
				        		    <label>{ category.kategori.name }</label>
				        		    	{ category.subkategori.map((subkategori,i) =>
			        		            <Form.Check
			        		              type="radio"
			        		              label={subkategori.name}
			        		              name="kategori_id"
			        		              id="formHorizontalRadios1"
			        		              value={subkategori._id}
			        		              onClick={this.handleChange}
			        		            />
			        		            )}
			        		        </Col>
			        		        )}
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
export default ProductUpdate;