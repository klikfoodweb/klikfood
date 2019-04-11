import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class OurAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alamatKantor: ''
		}
	}
	
	componentWillMount() {
		axios.get(`https://api.klikfood.id/config/alamatKantor`)
		  .then((response) => {
		  	console.log(response);
		  	this.setState({
		  		alamatKantor: response.data.data.value
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Alamat Gudang :(");
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
		
		bodyFormData.set('alamatKantor', this.state.alamatKantor);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.post(`https://api.klikfood.id/config/update/alamatKantor`, bodyFormData )
	      .then(res => {
	      	toast.success("Update Info Gudang Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin/our-address';
	      	}, 2000)
	      }).catch(err => {
	      	toast.error("Gagal Update Info Gudang :( ");
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
				          Alamat Gudang
				        </h2>
				        
				      </div>
				      <div className="body">
    			        <form onSubmit={this.handleSubmit}>
    			        	<textarea name="alamatKantor" rows={10} onChange={this.handleChange} value={ this.state.alamatKantor }></textarea>
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
export default OurAddress;