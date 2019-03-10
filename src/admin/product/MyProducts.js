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
		axios.get(`http://apiklikfood.herokuapp.com/mitra/produk/`+sessionStorage.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		products: response.data.data
		  	})
		  }).catch((error) => {
		  	console.log(error);
		  	toast.error("Something Went Wrong :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	promoLayout(cell, row){
		const id = row._id;
		if(row.promo !== 1) {
			return <button onClick={ (e) => {
	  			axios.defaults.headers = {  
	  				'Authorization': sessionStorage.api_token 
	  			}
	  			axios.get(`http://apiklikfood.herokuapp.com/mitra/produk/${id}/1`)
	  		      .then(res => {
	  		      	toast.success("Produk Berhasil Dipromokan !");
	  		      	setTimeout(() => {
	  		      		window.location.href='/admin/myproducts';
	  		      	}, 3000)
	  		      }).catch(err => {
	  		      	toast.error("Tidak Bisa Dipromokan :( ");
	  		      });	  		
		  	} } value={row._id} className="btn btn-success"> Promo </button>
		}else{
			return <button onClick={ (e) => {
	  			axios.defaults.headers = {  
	  				'Authorization': sessionStorage.api_token 
	  			}
	  			axios.get(`http://apiklikfood.herokuapp.com/mitra/produk/${id}/0`)
	  		      .then(res => {
	  		      	toast.success("Promo Dicabut !");
	  		      	setTimeout(() => {
	  		      		window.location.href='/admin/myproducts';
	  		      	}, 3000)
	  		      }).catch(err => {
	  		      	toast.error("Gagal Cabut Promo :( ");
	  		      });	  		
		  	} } value={row._id} className="btn btn-warning"> Cabut Promo </button>
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
				          My Product 
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='stok' dataSort={true}>Stok</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='berat_kemasan' dataSort={true}>Berat Kemasan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='expire' dataSort={true}>Kadaluarsa</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='harga_jual' dataSort={true}>Harga Jual</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.promoLayout } width="150"> </TableHeaderColumn>
		                  	  {/*<TableHeaderColumn dataField='any' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>*/}
				        	</BootstrapTable>  
				        </div>
				        <br />
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default MyProducts;