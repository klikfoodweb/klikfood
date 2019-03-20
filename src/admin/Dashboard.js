import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import GraphAdmin from './graph/GraphAdmin';
import GraphCEO from './graph/GraphCEO';
import GraphCFO from './graph/GraphCFO';
import GraphCMO from './graph/GraphCMO';
import GraphCOO from './graph/GraphCOO';
import GraphKonsumen from './graph/GraphKonsumen';
import GraphSupplyer from './graph/GraphSupplyer';
import GraphMitra from './graph/GraphMitra';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			verifiedproducts: [],
			belanja_pertama: false
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/myaccount`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	if(response.data.data.belanja_pertama !== true && sessionStorage.role === 'Mitra'){
		  		window.location.href='/admin/pilih-paket';
		  	}else{

		  	}
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Akun Anda :(");
		  })

		// axios.get(`https://api.klikfood.id/index.php/produksupplyer?type=verify`, { 'headers': { 'Authorization': sessionStorage.api_token } })
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
				{
	          	(sessionStorage.role === 'Administrator') ?
	          	<GraphAdmin />
          		: (sessionStorage.role === 'CEO') ?
          		<GraphCEO />
          		: (sessionStorage.role === 'CFO') ?
          		<GraphCFO />
          		: (sessionStorage.role === 'COO') ?
          		<GraphCOO />
          		: (sessionStorage.role === 'CMO_konsumen') ?
          		<GraphCMO />
          		: (sessionStorage.role === 'CMO_mitra') ?
          		<GraphCMO />
          		: (sessionStorage.role === 'CMO_pemasok') ?
          		<GraphCMO />
          		: (sessionStorage.role === 'Supplyer') ?
				<GraphSupplyer />
				: (sessionStorage.role === 'Mitra') ?
				<GraphMitra />
          		: 
          		<GraphKonsumen />
	          }
			</div>
		);
	}
}
export default Dashboard;