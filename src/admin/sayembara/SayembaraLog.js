import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SayembaraLog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logs: [],
			user_poin: '',
			bukti_install: ''
		}
		this.handleChange = this.handleChange.bind(this);
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
		
		axios.get(`http://35.243.170.33/index.php/point/tukar`)
	      .then(res => {
	      	console.log(res);
	      	toast.success("Poin Berhasil Ditukar !");
	      	setTimeout(() => {
	      		window.location.href='/admin/sayembara';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Gagal Menukar Poin :( ");
	      });
	}

	componentDidMount() {
		axios.get(`http://35.243.170.33/index.php/myaccount`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		user_poin: response.data.data.point_aplikasi,
		  		bukti_install: response.data.data.bukti_install
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mengambil Info User :(");
		  })

		axios.get(`http://35.243.170.33/index.php/point`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		logs: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mengambil Riwayat Tukar Poin :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
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
				          Riwayat Penukaran Poin
				          { (this.state.bukti_install.length === 0) ? 
				          		<Link to="/admin/sayembara/upload_bukti" className="btn btn-warning pull-right">Upload Bukti </Link>
				          		: null
				          }
				        </h2>
				      </div>
				      <div className="body">
				      <h5>Jumlah Poin : {this.state.user_poin} <button className="btn btn-success" onClick={this.handleSubmit}>Tukar Poin</button></h5> 
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.logs} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='_id' dataSort={true}>ID Tukar Poin</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_point' dataSort={true}>Jumlah Point</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='jumlah_uang' dataSort={true}>Jumlah Uang</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='user_id' dataSort={true}>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='created_at' dataSort={true}>Created_at</TableHeaderColumn>
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
export default SayembaraLog;