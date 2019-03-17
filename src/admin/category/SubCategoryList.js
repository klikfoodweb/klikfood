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
			subCategories: []
		}
	}

	componentDidMount() {
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.get(`http://35.243.170.33/index.php/kategori/show/`+this.props.match.params.id)
		  .then((response) => {
		  	this.setState({
		  		subCategories: response.data.data.subkategori
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
  			axios.delete(`http://35.243.170.33/index.php/subkategori/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("Sub Kategori Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/categories';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Something Went Wrong :( ");
  		      });	  		
	  	} } value={row._id} className="btn btn-danger"> Delete </button>;
	}

	updateLayout(cell, row){
		const idCat = row.kategori_id;
		const id = row._id;
		
	  	return <Link className="btn btn-warning" to={`/admin/categories/${idCat}/${id}/update`}> Update </Link>;
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
	                    Sub Category List
	                  </h2>
	                  
	                </div>
	                <div className="body">
	                  <div className="table-responsive">
	                  	<Link to={"/admin/categories/"+this.props.match.params.id+"/create"} className="btn btn-primary"> Buat Sub Kategori </Link>
	                  	<BootstrapTable data={this.state.subCategories} striped search pagination hover>
	                  		<TableHeaderColumn dataField='id' isKey={ true } hidden>Category ID</TableHeaderColumn>
	                  	  	<TableHeaderColumn dataField="any" dataFormat={this.indexN} width="70">No</TableHeaderColumn>
		                  	<TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
		                  	<TableHeaderColumn dataField='update' dataFormat={ this.updateLayout } width="150"> </TableHeaderColumn>
		                  	<TableHeaderColumn dataField='delete' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>
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