import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TransactionCentral extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			harga_jual: '1'
		}
	}
	
	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/transaksipusat`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data);
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
	  	return <Link className="btn btn-success" to={`/admin/transaction-central/${id}`}> Lihat </Link>;
	}
	
	confirmLayout(cell, row){
		const id = row._id;
			
		if(sessionStorage.role === 'Administrator') {
			if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
		  		return <div className="btn btn-success">Transaksi Berhasil </div>
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1) {
				return (
					<button className="btn btn-warning">Sedang Pengiriman</button>
				)
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1) {
				return (
					<button onClick={ (e) => {
						e.preventDefault();
						axios.get(`https://api.klikfood.id/index.php/transaksipusat/kirim/`+id, { 'headers': { 'Authorization': sessionStorage.api_token } })
						  .then((response) => {
						  	toast.success("Berhasil Dikirim !");
					      	setTimeout(() => {
					      		window.location.href='/admin/transaction-central/verification';
					      	}, 3000)
						  }).catch((error) => {
						  	console.log(error)
						  	toast.error("Something Went Wrong :(");
						  })
					} } className="btn btn-warning">Kirim Barang</button>
				)	
			}else if(typeof row.bayar !== 'undefined'){
				return (
					<button onClick={ (e) => {
						e.preventDefault();
						axios.get(`https://api.klikfood.id/index.php/transaksipusat/konfirmasi_bayar/`+id, { 'headers': { 'Authorization': sessionStorage.api_token } })
						  .then((response) => {
						  	toast.success("Berhasil Di Verifikasi !");
					      	setTimeout(() => {
					      		window.location.href='/admin/transaction-central/verification';
					      	}, 3000)
						  }).catch((error) => {
						  	console.log(error)
						  	toast.error("Something Went Wrong :(");
						  })
					} } className="btn btn-warning">Verifikasi</button>
				)
			}else{
				return (
					<button className="btn btn-warning">Belum Dibayar</button>
				)
			}
		}else if(sessionStorage.role === 'COO') {
			if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
		  		return <div className="btn btn-success">Transaksi Berhasil </div>
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1) {
				return (
					<button className="btn btn-warning">Sedang Pengiriman</button>
				)
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1) {
				return (
					<button onClick={ (e) => {
						e.preventDefault();
						axios.get(`https://api.klikfood.id/index.php/transaksipusat/kirim/`+id, { 'headers': { 'Authorization': sessionStorage.api_token } })
						  .then((response) => {
						  	toast.success("Berhasil Dikirim !");
					      	setTimeout(() => {
					      		window.location.href='/admin/transaction-central/verification';
					      	}, 3000)
						  }).catch((error) => {
						  	console.log(error)
						  	toast.error("Something Went Wrong :(");
						  })
					} } className="btn btn-warning">Kirim Barang</button>
				)	
			}else if(typeof row.bayar !== 'undefined'){
				return (
					<button className="btn btn-warning">Menunggu Verifikasi</button>
				)
			}else{
				return (
					<button className="btn btn-warning">Belum Dibayar</button>
				)
			}
		}else if(sessionStorage.role === 'CFO') {
			if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
		  		return <div className="btn btn-success">Transaksi Berhasil </div>
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1 && row.kirim === 1) {
				return (
					<button className="btn btn-warning">Sedang Pengiriman</button>
				)
			}else if(typeof row.bayar !== 'undefined' && row.konfirmasi_bayar === 1) {
				return (
					<button className="btn btn-warning">Menunggu Kirim Barang</button>
				)	
			}else if(typeof row.bayar !== 'undefined'){
				// return (
				// 	<button onClick={ (e) => {
				// 		e.preventDefault();
				// 		axios.get(`https://api.klikfood.id/index.php/transaksipusat/konfirmasi_bayar/`+row._id, { 'headers': { 'Authorization': sessionStorage.api_token } })
				// 		  .then((response) => {
				// 		  	toast.success("Berhasil Di Verifikasi !");
				// 	      	setTimeout(() => {
				// 	      		window.location.href='/admin/transaction-consuments/verification';
				// 	      	}, 3000)
				// 		  }).catch((error) => {
				// 		  	console.log(error)
				// 		  	toast.error("Something Went Wrong :(");
				// 		  })
				// 	} } className="btn btn-warning">Verifikasi Pembayaran</button>
				// )
				const id = row._id;
			  	return <Link className="btn btn-warning" to={`/admin/transaction-central/${id}`}> Verifikasi Pembayaran </Link>;
			}else{
				return (
					<button className="btn btn-warning">Belum Dibayar</button>
				)
			}
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
				          Daftar Transaksi Pusat
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true}>ID Transaksi</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_keseluruhan' dataSort={true}>Jumlah Keseluruhan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='created_at' dataSort={true}>Created_at</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout }> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.confirmLayout }> </TableHeaderColumn>
		                  	</BootstrapTable>    
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default TransactionCentral;