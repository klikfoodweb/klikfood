import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListBank extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pembayaran: ''
		}
	}
	
	componentWillMount() {
		axios.get(`https://api.klikfood.id/config/pembayaran`)
		  .then((response) => {
		  	console.log(response);
		  	this.setState({
		  		pembayaran: response.data.data.value
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info pembayaran :(");
		  })
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const bodyFormData = new FormData();
		
		bodyFormData.set('pembayaran', this.state.pembayaran);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.post(`https://api.klikfood.id/config/update/pembayaran`, bodyFormData )
	      .then(res => {
	      	toast.success("Update Info Pembayaran Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/list-bank';
	      	}, 2000)
	      }).catch(err => {
	      	toast.error("Gagal Update Info Pembayaran :( ");
	      });
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
				          Info Bank Akun
				        </h2>
				        
				      </div>
				      <div className="body">
    			        <form onSubmit={this.handleSubmit}>
    			        	<textarea name="pembayaran" rows={10} onChange={this.handleChange} value={ this.state.pembayaran }></textarea>
							<br />
    			        	<button type="submit" className="btn btn-primary">Update</button>
    			        </form>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default ListBank;