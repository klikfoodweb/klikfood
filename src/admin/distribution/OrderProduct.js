import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class OrderProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			produk: {}
		}
		this.handleChange = this.handleChange.bind(this);
		// console.log(localStorage.getItem('dataObject'));
		
		// console.log(this.state);
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
		// localStorage.clear();
		// localStorage.setItem('dataObject',  JSON.stringify({
		//     0 : {produk_id: 'user9110252produk_id', jumlah: 'user9110252genre'},
		//     1 : {produk_id: 'Jon', jumlah: 'rock'},
		//     lucy : {produk_id: 'Lucy', jumlah: 'pop'},
		//     mike : {produk_id: 'Mike', jumlah: 'rock'},
		//     luke : {produk_id: 'Luke', jumlah: 'house'},
		//     james : {produk_id: 'James', jumlah: 'house'},
		//     dave : {produk_id: 'Dave', jumlah: 'bass'},
		//     sarah : {produk_id: 'Sarah', jumlah: 'country'},
		//     natalie : {produk_id: 'Natalie', jumlah: 'bass'}
		// }) );
		// console.log(JSON.parse(localStorage.getItem('dataObject')));

		// let products = [];

		// for(var key in produk) {
		//     products.push(produk[key]);
		// }
		// console.log(bodyFormData);
		// ( 'produk', [0,'produk_id':'5c7bc5b32cb8710e24004f2d'] );
		axios.post(`http://apiklikfood.herokuapp.com/distribusi/store`, JSON.stringify(localStorage.getItem('dataObject')))
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
	  	return (
	  		<Link to={"/admin/distribution/order/" + id} className="btn btn-success">Pesan</Link>
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
				          Product List
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
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout }> </TableHeaderColumn>
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
export default OrderProduct;