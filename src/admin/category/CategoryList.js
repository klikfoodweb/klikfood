import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		axios.get(`http://35.243.170.33/index.php/kategori`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		categories: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	deleteLayout(cell, row){
	  	return <button onClick={ (e) => {
  			axios.defaults.headers = {  
  				'Authorization': sessionStorage.api_token 
  			}
  			axios.delete(`http://35.243.170.33/index.php/kategori/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("Kategori Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/categories';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Something Went Wrong :( ");
  		      });	  		
	  	} } value={row.kategori._id} className="btn btn-danger"> Delete </button>;
	}

	updateLayout(cell, row){
		const id = row.kategori._id;
	  	return <Link className="btn btn-warning" to={`/admin/categories/${id}/update`}> Update </Link>;
	}

	subCategoryLayout(cell, row){
		const id = row.kategori._id;
	  	return <Link className="btn btn-success" to={`/admin/categories/${id}`}> Lihat </Link>;
	}

	nameFormatter(value, row, index) {
		return `<p>${value.name}</p>`;
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
	                    Category List
	                  </h2>
	                  
	                </div>
	                <div className="body">
	                  <div className="table-responsive">
	                  	<Link to="/admin/categories/create" className="btn btn-primary"> Buat Kategori </Link>
	                  	<BootstrapTable data={this.state.categories} striped search pagination hover>
	                  		<TableHeaderColumn dataField='id' isKey={ true } hidden>Category ID</TableHeaderColumn>
	                  	  	<TableHeaderColumn dataField="any" dataFormat={this.indexN} width="70">No</TableHeaderColumn>
		                  	<TableHeaderColumn dataField='kategori' dataFormat={ this.nameFormatter } dataSort={true}>Name</TableHeaderColumn>
		                  	<TableHeaderColumn dataField='any' dataFormat={ this.subCategoryLayout } width="150"> </TableHeaderColumn>
		                  	<TableHeaderColumn dataField='any' dataFormat={ this.updateLayout } width="150"> </TableHeaderColumn>
		                  	<TableHeaderColumn dataField='any' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>
	                  	</BootstrapTable>,  
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
			        
			</div>
		);
	}
}
export default CategoryList;