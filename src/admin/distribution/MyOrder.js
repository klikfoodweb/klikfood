import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyOrder extends Component {
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
		axios.post(`https://api.klikfood.id/index.php/distribusi/store`, JSON.stringify(localStorage.getItem('dataObject')))
	      .then(res => {
	      	console.log(res);
	      	toast.success("Berhasil Dipesan !");
	      	setTimeout(() => {
	      		// window.location.href='/admin/myproducts';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/distribusi/mitra`, { 'headers': { 'Authorization': sessionStorage.api_token } })
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
	  	return <Link className="btn btn-success" to={`/admin/distribution/${id}`}> Lihat </Link>;
	}

	confirmLayout(cell, row){
	  	if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
	  		return <div className="btn btn-success">Transaksi Berhasil </div>
	  	}else if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1) {
	  		return (
	  			<button onClick={ (e) => {
	  				e.preventDefault();
	  				axios.get(`https://api.klikfood.id/index.php/distribusi/terima/`+row._id, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  				  .then((response) => {
	  				  	toast.success("Terima Kasih !");
	  			      	setTimeout(() => {
	  			      		window.location.href='/admin/distribution/myorder';
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
	  				axios.get(`https://api.klikfood.id/index.php/distribusi/bayar/`+row._id, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  				  .then((response) => {
	  				  	toast.success("Berhasil Dibayar !");
	  			      	setTimeout(() => {
	  			      		window.location.href='/admin/distribution/myorder';
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
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='50'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true} width='100'>ID Distribusi</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_keseluruhan' dataSort={true} width='80'>Total Harga</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='created_at' dataSort={true} width='80'>Created_at</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout } width='80'> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.confirmLayout } width='80'> </TableHeaderColumn>
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
export default MyOrder;