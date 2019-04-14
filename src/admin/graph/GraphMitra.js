import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactChartkick, { ColumnChart } from 'react-chartkick';

class GraphMitra extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transaksiBulanan: []
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/grafik/transaksi/`+sessionStorage.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		transaksiBulanan : response.data.data
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
				          Dashboard Mitra
				        </h2>
				      </div>
				      <div className="body">
				      	<h2> Jumlah Transaksi Perbulan </h2>
				      	<ColumnChart thousands="," data={this.state.transaksiBulanan} />      	
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default GraphMitra;