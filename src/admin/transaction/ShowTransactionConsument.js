import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let jumlahProdukNya = 0;

class ShowTransactionConsument extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			transaksi: [],
			details: []
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/transaksi/show/`+this.props.match.params.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data.transaksi);
		  	this.setState({
		  		products: response.data.data.produk,
		  		transaksi: response.data.data.transaksi,
		  		details: response.data.data.transaksi.detail
		  	})
		  }).catch((error) => {
		  	console.log(error);
		  	toast.error("Something Went Wrong :(");
		  });
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	// jumlahLayout(cell, row){
	//   	console.log(row);
	//   	return (
	//   		<div>
	//   		  1
	//   		</div>
	//   	)
	// }

	render() {
		return (
			<div>
			<ToastContainer />
				<div className="row clearfix">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div className="card">
				      <div className="header">
				        <h2>
				          Detail Transaksi
				        </h2>
				      </div>
				      <div className="body">
				      { 
				      	(this.state.transaksi !== 0) ? 
				      	<React.Fragment>
				      	<label>ID Transaksi = </label>  { this.state.transaksi._id }
				        <br />
				        <label>Harga Keseluruhan = </label> Rp. { this.state.transaksi.jumlah_keseluruhan }
				        <br />
				        <label>ID Kota Tujuan = </label> { this.state.transaksi.kota_tujuan }
				        <br />
				        <label>Service Pengiriman = </label> JNE { this.state.transaksi.servis }
				        <br />
				        <label>Status Bayar = </label> { this.state.transaksi.bayar }
				        <br />
				        <img src={"https://api.klikfood.id/uploads/buktitf/"+this.props.match.params.id+"/"+this.state.transaksi.bayar} style={{maxHeight: '150px'}} alt />
				        <br />
				        <label>Detail Produk Yang Dipesan</label>
				        {
				        	this.state.details.map((item,i) => {
				        		jumlahProdukNya = jumlahProdukNya + Number(item.jumlah);
				        		return <div key={i}>{ this.state.products[i].name } ={ item.jumlah }</div>
				        	})
				        }
				        <label>Jumlah Produk Dipesan</label> <span>{jumlahProdukNya}</span>
				        </React.Fragment>
				        : null
				      }
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='berat_kemasan' dataSort={true}>Berat Kemasan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='expire' dataSort={true}>Kadaluarsa</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='harga_supplyer' dataSort={true}>Harga Jual</TableHeaderColumn>
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
export default ShowTransactionConsument;