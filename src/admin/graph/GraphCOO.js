import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactChartkick, { ColumnChart } from 'react-chartkick';

class GraphCOO extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transaksiBulanan: [],
			distribusiBulanan: []
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/grafik/transaksi`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		transaksiBulanan : response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Membuat Grafik :(");
		  });

		  axios.get(`https://api.klikfood.id/index.php/grafik/distribusi`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		distribusiBulanan : response.data.data
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
				          Dashboard COO
				        </h2>
				      </div>
				      <div className="body">
				      	<h2> Transaksi Perbulan </h2>
				      	<ColumnChart data={this.state.transaksiBulanan} />
				      	<hr />
				      	<h2> Distribusi Perbulan </h2>
				      	<ColumnChart data={this.state.distribusiBulanan} />      	
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default GraphCOO;