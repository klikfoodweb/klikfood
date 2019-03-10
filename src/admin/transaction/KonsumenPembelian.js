import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class KonsumenPembelian extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			produk: {}
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		
		const bodyFormData = {
			produk: this.state.produk
		}
		axios.post(`http://apiklikfood.herokuapp.com/transaksi/bayar`, JSON.stringify(localStorage.getItem('dataObject')))
	      .then(res => {
	      	console.log(res);
	      	toast.success("Berhasil Dibayar !");
	      	setTimeout(() => {
	      		// window.location.href='/admin/myproducts';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	componentDidMount() {
		axios.get(`http://apiklikfood.herokuapp.com/transaksi/konsumen`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		products: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	showLayout(cell, row){
		const id = row._id;
	  	return <Link className="btn btn-success" to={`/admin/transactions/${id}`}> Lihat </Link>;
	}

	confirmLayout(cell, row){
	  	if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
	  		return <div className="btn btn-success">Transaksi Berhasil </div>
	  	}else if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1) {
	  		return (
	  			<button onClick={ (e) => {
	  				e.preventDefault();
	  				axios.get(`http://apiklikfood.herokuapp.com/transaksi/terima/`+row._id, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  				  .then((response) => {
	  				  	toast.success("Terima Kasih !");
	  			      	setTimeout(() => {
	  			      		window.location.href='/admin/transactions/pembelian';
	  			      	}, 3000)
	  				  }).catch((error) => {
	  				  	console.log(error)
	  				  	toast.error("Something Went Wrong :(");
	  				  })
	  			} } className="btn btn-warning">Barang Diterima ?</button>
	  		)
	  	}else if(row.bayar === 1 && row.konfirmasi_bayar === 1) {
	  		return <div>Sedang Menunggu Barang Dikirim </div>	
	  	}else if(row.bayar === 1){
	  		return <div className="btn btn-warning">Sedang Menunggu Konfirmasi </div>
	  	}else{
	  		return (
	  			<button onClick={ (e) => {
	  				e.preventDefault();
	  				axios.get(`http://apiklikfood.herokuapp.com/transaksi/bayar/`+row._id, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  				  .then((response) => {
	  				  	toast.success("Berhasil Dibayar !");
	  			      	setTimeout(() => {
	  			      		window.location.href='/admin/transactions/pembelian';
	  			      	}, 3000)
	  				  }).catch((error) => {
	  				  	console.log(error)
	  				  	toast.error("Something Went Wrong :(");
	  				  })
	  			} } className="btn btn-warning">Bayar</button>
	  		)
	  	}
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
				          Pesanan Saya
				        </h2>
				      </div>
				      <div className="body">
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true}>ID Transaksi</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_keseluruhan' dataSort={true}>Total Harga</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='created_at' dataSort={true}>Created_at</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout }> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.confirmLayout }> </TableHeaderColumn>
		                  	</BootstrapTable>  
				        	{/*<button className="btn btn-primary" onClick={this.handleSubmit}> Pesan Sekarang ! </button>*/}
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default KonsumenPembelian;