import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			verifiedproducts: [],
			belanja_pertama: false
		}
	}

	componentWillMount() {
		axios.get(`http://apiklikfood.herokuapp.com/myaccount`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	if(response.data.data.belanja_pertama !== true && sessionStorage.role === 'Mitra'){
		  		window.location.href='/admin/pilih-paket';
		  	}else{

		  	}
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })

		// axios.get(`http://apiklikfood.herokuapp.com/produksupplyer?type=verify`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		//   .then((response) => {
		//   	this.setState({
		//   		verifiedproducts: response.data.data
		//   	})
		//   }).catch((error) => {
		//   	toast.error("Something Went Wrong :(");
		//   })
	}

	componentDidMount() {
		console.log(this.state.belanja_pertama);
	}

	render() {
		return (
			<div>
				<div className="block-header">
				  <h2>DASHBOARD</h2>
				</div>
				{/* Widgets */}
				<div className="row clearfix">
				  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				    <div className="info-box bg-pink hover-expand-effect">
				      <div className="icon">
				        <i className="material-icons">playlist_add_check</i>
				      </div>
				      <div className="content">
				        <div className="text">Jumlah Produk</div>
				        <div className="number count-to" data-from={0} data-to={this.state.verifiedproducts.length} data-speed={15} data-fresh-interval={20} />
				      </div>
				    </div>
				  </div>
				  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				    <div className="info-box bg-cyan hover-expand-effect">
				      <div className="icon">
				        <i className="material-icons">help</i>
				      </div>
				      <div className="content">
				        <div className="text">Jumlah Konsumen</div>
				        <div className="number count-to" data-from={0} data-to={this.state.verifiedproducts.length} data-speed={1000} data-fresh-interval={20} />
				      </div>
				    </div>
				  </div>
				  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				    <div className="info-box bg-light-green hover-expand-effect">
				      <div className="icon">
				        <i className="material-icons">forum</i>
				      </div>
				      <div className="content">
				        <div className="text">Jumlah Mitra</div>
				        <div className="number count-to" data-from={0} data-to={this.state.verifiedproducts.length} data-speed={1000} data-fresh-interval={20} />
				      </div>
				    </div>
				  </div>
				  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				    <div className="info-box bg-orange hover-expand-effect">
				      <div className="icon">
				        <i className="material-icons">person_add</i>
				      </div>
				      <div className="content">
				        <div className="text">Jumlah Pemasok</div>
				        <div className="number count-to" data-from={0} data-to={this.state.verifiedproducts.length} data-speed={1000} data-fresh-interval={20} />
				      </div>
				    </div>
				  </div>
				</div>
				{/* #END# Widgets */}
				
			</div>
		);
	}
}
export default Dashboard;