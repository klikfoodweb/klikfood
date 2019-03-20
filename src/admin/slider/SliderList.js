import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SliderList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliders: []
		}
	}
	
	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/slider`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		sliders: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	deleteLayout(cell, row){
		console.log(row);
	  	return <button onClick={ (e) => {
  			axios.defaults.headers = {  
  				'Authorization': sessionStorage.api_token 
  			}
  			axios.delete(`https://api.klikfood.id/index.php/slider/destroy/`+e.target.value)
  		      .then(res => {
  		      	toast.success("Slider Terhapus !");
  		      	setTimeout(() => {
  		      		window.location.href='/admin/sliders';
  		      	}, 3000)
  		      }).catch(err => {
  		      	toast.error("Tidak Bisa Menghapus Slider :( ");
  		      });	  		
	  	} } value={row._id} className="btn btn-danger"> Delete </button>
	}

	updateLayout(cell, row){
		const id = row._id
	  	return <Link className="btn btn-warning" to={`/admin/sliders/${id}/update`}> Update </Link>;
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
				          Slider List
				        </h2>
				        
				      </div>
				      <div className="body">
				        <div className="table-responsive">
	                  		<Link to="/admin/sliders/create" className="btn btn-primary"> Tambah Slider </Link>
				        	<BootstrapTable data={this.state.sliders} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='_id' isKey={ true } hidden>Slider ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='judul' dataSort={true}>Judul</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='subjudul' dataSort={true}>Subjudul</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='keterangan' dataSort={true}>Keterangan</TableHeaderColumn>
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
export default SliderList;