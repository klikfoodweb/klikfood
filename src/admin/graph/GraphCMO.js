import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactChartkick, { ColumnChart } from 'react-chartkick';

class GraphCMO extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pendaftarKonsumen: [],
			pendaftarMitra: [],
			pendaftarSupplyer: []
		}
	}

	componentWillMount() {
		  axios.get(`http://apiklikfood.herokuapp.com/grafik/pendaftaran`, { 'headers': { 'Authorization': sessionStorage.api_token } })
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
				          Dashboard CMO Konsumen
				        </h2>
				      </div>
				      <div className="body">
				      	<h2> Pendaftar Perbulan </h2>
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
export default GraphCMO;