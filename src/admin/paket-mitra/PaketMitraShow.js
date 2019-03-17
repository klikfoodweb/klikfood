import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PaketMitraShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			produk: [],	
			name: '',
			berat: '',
			harga: '',
			paketMitra: [],
			detailProducts: [],
			jumlahBarang: ''
		}
		this.handleChange = this.handleChange.bind(this);
		localStorage.clear();
	}

	handleChange(event) {
		console.log(this.state);
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		let productSubmit = [];
		let validProduct = [];
		console.log(localStorage.getItem('product0').indexOf(','))
		for(var i=0; i < this.state.products.length; i++) {
			// if (localStorage.getItem('product'+i).indexOf(',') > -1)
			// {
				validProduct[i] = JSON.parse(localStorage.getItem('product'+i));
				
				if(validProduct[i] !== null){

					if(validProduct[i][1] === '0')
						validProduct[i][1] = ''; 
					if(validProduct[i][1] !== '')
						productSubmit[i] = JSON.parse(localStorage.getItem('product'+i));
				}
			// }
		}
		console.log(productSubmit);
		// localStorage.setItem('paketCart', JSON.stringify(productSubmit.filter(n => n)));
		// localStorage.setItem('redirectOnce', true);
		// window.location.href='/admin/distribution/order/courier';
		var obj = {
		    'produk' : productSubmit,
		    'name' : this.state.name
		};
		
		console.log(qs.stringify(obj, {encode: false}));
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.patch(`http://35.243.170.33/index.php/paketmitra/update/`+this.props.match.params.id+"?"+qs.stringify(obj, {encode: false}))
	      .then(res => {
	      	console.log(res);
	      	toast.success('Update Paket Sukses');
	      	setTimeout(() => {
	      		window.location.href='/admin/paket-mitra';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Tidak Bisa Menambah Paket :( ");
	      });
	}

	componentWillMount() {
		axios.get(`http://35.243.170.33/index.php/produksupplyer/all?type=verify`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		products: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  });

		 //  	let initiateItem = [...Array(150)].map( x => Array(2).fill(0) );
		
			// for(var i=0; i<=row.index; i++){
			// 	initiateItem[i][0] = localStorage.getItem("product"+i);
			// 	initiateItem[i][1] = 0;
			// }
			// const newInitiateItem = initiateItem.slice();
			
		  axios.get(`http://35.243.170.33/index.php/paketmitra/show/`+this.props.match.params.id)
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		name: response.data.data.paket.name,
		  		berat: response.data.data.paket.berat,
		  		harga: response.data.data.paket.harga,
		  		jumlahBarang: response.data.data.produk.length,
		  		detailProducts: response.data.data.produk
		  	})
		  	for (var i = 0; i < response.data.data.produk.length; i++) {
		  		localStorage.setItem('product'+i, JSON.stringify([response.data.data.produk[i]._id, response.data.data.produk[i].jumlah]));
		  	}
		  	console.log(this.state);
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  });
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}
	jumlahLayout(cell, row){
	  	return (
	  		<div className="cart_quantity_button">
	  		  <input className="cart_quantity_input" type="number" onChange={e => {	  		  	
				e.preventDefault();
				localStorage.setItem('product'+row.index, JSON.stringify([row._id, e.target.value]));
				
				console.log(localStorage);
	  		  } } name="quantity" autoComplete="off" />
	  		</div>
	  	)
	}

	render() {
		return (
			<div>
			<ToastContainer />
				<div className="row clearfix">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div className="card">
				      <div className="header">
				        <h2>
				          Detail Paket Pendaftaran
				        </h2>
				      </div>
				      <div className="body">
				      	<label>Nama Paket </label><input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
				        <br />
				        <label>Detail Paket </label>
				        {
				        	this.state.detailProducts.map((item,i) => 
				        		<li key={i}>{ item.name } jumlah { item.jumlah }</li>
				        	)
				        }
				        <p>Untuk Menghapus Produk dari paket, Ketik 0 di kolom jumlah</p>
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='stok' dataSort={true}>Stok</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='berat_kemasan' dataSort={true}>Berat Kemasan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='expire' dataSort={true}>Kadaluarsa</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='harga_supplyer' dataSort={true}>Harga Pemasok</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.jumlahLayout } width='150'>Jumlah </TableHeaderColumn>
		                  	</BootstrapTable>  
				        	<button className="btn btn-primary" onClick={this.handleSubmit}> Update </button>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default PaketMitraShow;