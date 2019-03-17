import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PaketMitraList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pakets: []
		}
	}
	
	componentDidMount() {
		axios.get(`http://35.243.170.33/index.php/paketmitra`)
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		pakets: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	// showDetail(cell, row){
	// 	return <React.Fragment>{ row.detail.map((item,i) => <li>{ item.produk_id }</li> ) }</React.Fragment>
	//   	console.log(row.detail);
	// }

	updateLayout(cell, row){
		const id = row._id;
	  	return <Link className="btn btn-warning" to={`/admin/paket-mitra/${id}/update`}> Lihat </Link>;
	}

	deleteLayout(cell, row){
	 	return <button onClick={ (e) => {
  			axios.defaults.headers = {  
  				'Authorization': sessionStorage.api_token 
  			}
  			axios.delete(`http://35.243.170.33/index.php/paketmitra/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("Paket Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/paket-mitra';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Gagal Dihapus :( ");
  		      });	  		
	  	} } value={row._id} className="btn btn-danger"> Delete </button>; 	
	}

	showStok(cell, row){
		return (row.kosong) ? <div>Stok Kosong</div> : <div>Tersedia</div>
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
				          List Paket Pendaftaran Mitra
				        </h2>
				      </div>
				      <div className="body">
				      <Link to="/admin/paket-mitra/create" className="btn btn-success">Tambah Paket Pendaftaran</Link>
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.pakets} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true}>ID Paket</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Nama</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='harga' dataSort={true}>Harga</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='kosong' dataFormat={ this.showStok } dataSort={true}>Stok</TableHeaderColumn>
				        	  {/*<TableHeaderColumn dataField='detail' dataFormat={ this.showDetail } dataSort={true}>Detail</TableHeaderColumn>*/}
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.updateLayout }> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.deleteLayout }> </TableHeaderColumn>
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
export default PaketMitraList;