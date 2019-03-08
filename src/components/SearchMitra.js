import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

class SearchMitra extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	categories: [],
	        mitras: [],
	        query: ''
	    };
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const bodyFormData = new FormData();
		
		bodyFormData.set('name', this.state.name);

		axios.post(`http://apiklikfood.herokuapp.com/kategori/store`, bodyFormData )
	      .then(res => {
	      	toast.success("Tambah Kategori Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/categories';
	      	}, 3000)
	      }).catch(err => {
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	showLayout(cell, row){
	  	return <Link className="btn btn-success" to={`/$(row._id)`}> Lihat </Link>;
	}

	render() {
		return (
			<div>
		        <section>
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12 padding-right">
		                <div className="features_items">{/*features_items*/}
		                  <h2 className="title text-center">Masukkan Kota Anda</h2>
		                  <center>
		                  	<form onSubmit={this.handleSubmit}>
		                  		<input type="text" name="query" placeholder="Dari Kota Manakah Anda?" onChange={this.handleChange} />
		                  		<button type="submit" className="btn btn-success">Cari Mitra Terdekat</button>
		                  	</form>
		                  	<BootstrapTable data={this.state.mitras} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout } width="150"> </TableHeaderColumn>
				        	</BootstrapTable>
		                  </center>
		                  <br />
		                </div>{/*features_items*/}
		              </div>
		            </div>
		          </div>
		        </section>
		        <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
		      	</footer>
			</div>
		);
	}
}
export default SearchMitra;