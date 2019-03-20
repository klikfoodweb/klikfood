import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TestimoniList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testimonies: []
		}
	}
	
	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/testimoni`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		testimonies: response.data.data
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
  			axios.delete(`https://api.klikfood.id/index.php/testimoni/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("Testimoni Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/testimonies';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Tidak Bisa Menghapus Testimoni :( ");
  		      });	  		
	  	} } value={row._id} className="btn btn-danger"> Delete </button>;
	}

	updateLayout(cell, row){
		const id = row._id
	  	return <Link className="btn btn-warning" to={`/admin/testimonies/${id}/update`}> Update </Link>;
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
				          Testimoni List
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<Link to="/admin/testimonies/create" className="btn btn-primary"> Tambah Testimoni </Link>
				        	<BootstrapTable data={this.state.testimonies} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='judul' dataSort={true}>Judul</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='subjudul' dataSort={true}>Subjudul</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='image' dataSort={true}>Image</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.updateLayout } width="150"> </TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.deleteLayout } width="150"> </TableHeaderColumn>
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
export default TestimoniList;