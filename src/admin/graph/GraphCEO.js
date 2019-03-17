import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactChartkick, { ColumnChart } from 'react-chartkick';

class GraphCEO extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transaksiBulanan: [],
			distribusiBulanan: [],
			pendaftarKonsumen: [],
			pendaftarMitra: [],
			pendaftarSupplyer: []
		}
	}

	componentWillMount() {
		axios.get(`http://35.243.170.33/index.php/grafik/uangtransaksi`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		transaksiBulanan : response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Membuat Grafik :(");
		  });

		  axios.get(`http://35.243.170.33/index.php/grafik/uangdistribusi`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		distribusiBulanan : response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Membuat Grafik :(");
		  });

		  axios.get(`http://35.243.170.33/index.php/grafik/pendaftaran`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		pendaftarKonsumen : response.data.data.Konsumen,
		  		pendaftarMitra : response.data.data.Mitra,
		  		pendaftarSupplyer : response.data.data.Supplyer
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Membuat Grafik :(");
		  });
	}

	render() {
		return (
			<div>
				<div className="row clearfix">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div className="card">
				      <div className="header">
				        <h2>
				          Dashboard CEO
				        </h2>
				      </div>
				      <div className="body">
				      	<h3> Transaksi Perbulan </h3>
				      	<ColumnChart data={this.state.transaksiBulanan} />
				      	<hr />
				      	<h3> Distribusi Perbulan </h3>
				      	<ColumnChart data={this.state.distribusiBulanan} />      	
				      	<hr />
				      	<h3> Pendaftar Konsumen </h3>
			      		<ColumnChart data={this.state.pendaftarKonsumen}/>
			      		<h3> Pendaftar Mitra </h3>
			      		<ColumnChart data={this.state.pendaftarMitra}/>
			      		<h3> Pendaftar Supplyer </h3>
			      		<ColumnChart data={this.state.pendaftarSupplyer}/>
				      	<hr />
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default GraphCEO;