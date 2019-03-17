import React, { Component } from 'react';
import { Breadcrumb, Card, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import {Link} from 'react-router-dom';

class DetailProductMitra extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			carts: [],
			id: '',
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

		 axios.get(`http://35.243.170.33/index.php/mitra/produk/show/`+this.props.match.params.product)
		  .then((response) => {
		  	console.log(response);
		  	this.setState({
		  		id: response.data.data._id,
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
		  		foto_3: response.data.data.foto_3
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	handleAddToCart = (e) => {
		if (sessionStorage.length === 0) {
			{toast.warning("Login Terlebih Dahulu !")}
			window.location.href='/login';
	    }else{
	    	e.preventDefault();
			this.state.carts.push([this.state.name, this.state.harga_jual, this.state.id+"/"+this.state.foto_1, 1, this.state.berat_kemasan]);
		    
		    localStorage.setItem('cart', JSON.stringify(this.state.carts));
		    console.log(JSON.stringify(this.state.carts));
		    console.log(JSON.parse(localStorage.getItem('cart')));
			toast.success("Berhasil Dimasukkan Keranjang !");
	    }
	}

	handlePay = (e) => {
		if (sessionStorage.length === 0) {
			{toast.warning("Login Terlebih Dahulu !")}
			window.location.href='/login';
	    }else{
	    	e.preventDefault();
			this.state.carts.push([this.state.name, this.state.harga_jual, this.state.id+"/"+this.state.foto_1, 1, this.state.berat_kemasan]);

		    localStorage.setItem('cart', JSON.stringify(this.state.carts));
		    console.log(JSON.stringify(this.state.carts));
		    console.log(JSON.parse(localStorage.getItem('cart')));
			toast.success("Berhasil Dimasukkan Keranjang !");
	    	window.location.href='/cart';
	    }
	}

	render() {
		return (
			<div>
				<section>
			          <div className="container">
						<Breadcrumb>
						  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						  <Breadcrumb.Item href={"/"+this.props.match.params.mitra}>
						    List Produk
						  </Breadcrumb.Item>
						  <Breadcrumb.Item active>Detail</Breadcrumb.Item>
						</Breadcrumb>
						<Card style={{ width: '100%' }}>
						  <Card.Header style={{padding:'50px'}}>
						  	<Row>
							    <Col md={6}>
							    	    <div className="row">
							    	      <div className="col-sm-12">
							    	        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
							    	          <ol className="carousel-indicators">
		    		          			 			<React.Fragment>
								          				{ (this.state.foto_1 !== null) ?
								          				<li data-target="#slider-carousel" data-slide-to={0} className="active" />
								          				: null
								          				}
								          				{ (this.state.foto_2 !== null) ?
								          				<li data-target="#slider-carousel" data-slide-to={1} />
								          				: null
								          				}
								          				{ (this.state.foto_3 !== null) ?
								          				<li data-target="#slider-carousel" data-slide-to={2} />
								          				: null
								          				}
								          			</React.Fragment>
							    		        </ol>
							    	          <div className="carousel-inner">
			    	          					{ (this.state.foto_1 !== null) ?
							          			<React.Fragment>
										            <div className="item active">
										              <div className="col-sm-12">
										                <img src={"http://35.243.170.33/uploads/produk/"+this.state.id+"/"+this.state.foto_1} className="girl img-responsive" alt />
										              </div>
										            </div>
									        	</React.Fragment> : null
									    		}
									    		{ (this.state.foto_2 !== null) ?
									        	<React.Fragment>
									        		<div className="item">
										              <div className="col-sm-12">
										                <img src={"http://35.243.170.33/uploads/produk/"+this.state.id+"/"+this.state.foto_2} className="girl img-responsive" alt />
										              </div>
										            </div>
									       		</React.Fragment> : null
									       		}
									       		{ (this.state.foto_3 !== null) ?
									        	<React.Fragment>
									        		<div className="item">
										              <div className="col-sm-12">
										                <img src={"http://35.243.170.33/uploads/produk/"+this.state.id+"/"+this.state.foto_3} className="girl img-responsive" alt />
										              </div>
										            </div>
									       		</React.Fragment> : null
											    }
							    	          </div>
							    	          <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							    	            <i className="fa fa-angle-left" />
							    	          </a>
							    	          <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							    	            <i className="fa fa-angle-right" />
							    	          </a>
							    	        </div>
							    	      </div>
							    	    </div>
							    </Col>
							    <Col md={6}>
							    	<h2>{ this.state.name }</h2>
							    	<h3 style={{color: 'red'}}>Rp. { this.state.harga_jual }</h3>
							    	<p>{ this.state.deskripsi }</p>
							    	<button className="btn btn-success" onClick={this.handleAddToCart}>Tambahkan Ke Keranjang </button>
							    	<button className="btn btn-default" onClick={this.handlePay}>Pesan Sekarang </button>
							    </Col>
							</Row>
						  </Card.Header>
						</Card>
					  </div>
				</section>
				<FooterTop />
				<FooterBottom />
			</div>
		);
	}
}
export default DetailProductMitra;