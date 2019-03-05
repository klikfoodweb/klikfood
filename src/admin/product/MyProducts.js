import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}
	
	componentDidMount() {
		axios.get(`http://apiklikfood.herokuapp.com/produksupplyer/all?type=verify`, { 'headers': { 'Authorization': sessionStorage.api_token } })
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
	  	return <Link className="btn btn-success" to={`/admin/products/${id}/update`}> Lihat </Link>;
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
				          Product List
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<Link to="/admin/products/create" className="btn btn-primary"> Tambah Produk </Link>
	                  		<h3> Belum Terverifikasi </h3>
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='stok' dataSort={true}>Stok</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='berat_kemasan' dataSort={true}>Berat Kemasan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='expire' dataSort={true}>Kadaluarsa</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout } width="150"> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>
				        	</BootstrapTable>  
				        </div>
				        <br />
    			        <div className="table-responsive">
    			        	<h3> Sudah Terverifikasi </h3>
    			        	<BootstrapTable data={this.state.verifiedproducts} striped search pagination hover>
                      		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
    			        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
    			        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
    			        	  <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
    			        	  <TableHeaderColumn dataField='no_tlp' dataSort={true}>Telepon</TableHeaderColumn>
    	                  	  <TableHeaderColumn dataField='update' dataFormat={ this.showteLayout } width="150"> </TableHeaderColumn>
    	                  	  <TableHeaderColumn dataField='delete' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>
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
export default MyProducts;