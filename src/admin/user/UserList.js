import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}
	
	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/user`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		users: response.data.data.data
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
  			axios.delete(`https://api.klikfood.id/index.php/user/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("User Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/users';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Something Went Wrong :( ");
  		      });	  		
	  	} } value={row._id} className="btn btn-danger"> Delete </button>;
	}

	updateLayout(cell, row){
		const id = row._id
	  	return <Link className="btn btn-warning" to={`/admin/users/${id}/update`}> Update </Link>;
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
				          User List
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<Link to="/admin/users/create" className="btn btn-primary"> Tambah User </Link>
				        	<BootstrapTable data={this.state.users} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='no_tlp' dataSort={true}>Telepon</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='update' dataFormat={ this.updateLayout } width="150"> </TableHeaderColumn>
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
export default UserList;