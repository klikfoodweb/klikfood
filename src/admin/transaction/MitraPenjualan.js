import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MitraPenjualan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			harga_jual: '1'
		}
	}
	
	componentDidMount() {
		axios.get(`http://35.243.170.33/index.php/transaksi`, { 'headers': { 'Authorization': sessionStorage.api_token } })
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
	  	return <Link className="btn btn-success" to={`/admin/transactions/${id}`}> Lihat </Link>;
	}
	
	confirmLayout(cell, row){
		const id = row._id;
		if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1 && row.terima == 1) {
	  		return <div className="btn btn-success">Transaksi Berhasil </div>
		}else if(row.bayar === 1 && row.konfirmasi_bayar === 1 && row.kirim === 1) {
			return (
				<button className="btn btn-warning">Sedang Pengiriman</button>
			)
		}else if(row.bayar === 1 && row.konfirmasi_bayar === 1) {
			return (
				<button onClick={ (e) => {
					e.preventDefault();
					axios.get(`http://35.243.170.33/index.php/transaksi/kirim/`+id, { 'headers': { 'Authorization': sessionStorage.api_token } })
					  .then((response) => {	
					  	toast.success("Berhasil Dikirim !");
				      	setTimeout(() => {
				      		window.location.href='/admin/transactions/penjualan';
				      	}, 3000)
					  }).catch((error) => {
					  	console.log(error)
					  	toast.error("Something Went Wrong :(");
					  })
				} } className="btn btn-warning">Kirim Barang</button>
			)	
		}else if(row.bayar === 1){
			return (
				<button className="btn btn-warning">Menunggu Verifikasi Pembayaran</button>
			)
		}else{
			return (
				<button className="btn btn-warning">Belum Dibayar</button>
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
				          Daftar Transaksi Pemesanan
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true}>ID Transaksi</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_harga' dataSort={true}>Jumlah Harga</TableHeaderColumn>
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
export default MitraPenjualan;