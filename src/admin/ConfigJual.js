import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class ConfigJual extends Component {
	constructor(props) {
		super(props);
		
	}

	handleSubmit = (event) => {
		event.preventDefault();

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		axios.get(`https://api.klikfood.id/config/update/mode/`+event.target.value)
	      .then(res => {
	      	toast.success("Update Mode Sukses !");
	      	setTimeout(() => {
	      		window.location.href='/admin';
	      	}, 3000)
	      }).catch(err => {
	      	toast.error("Tidak Bisa Mengubah Mode :( ");
	      });
	}

	render() {
		return (
			<div>
				<ToastContainer />
				<div classname="row clearfix">
				    <div classname="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				        <div classname="card">
				            <div classname="header">
				              <h2>
				                Ubah Mode
				              </h2>
				            </div>
				            <div classname="body">
								<button classname="btn btn-success" onClick={this.handleSubmit} value="0">Pusat Ikut Jual</button>				        		
				            	<button classname="btn btn-danger" onClick={this.handleSubmit} value="1">Mitra Jual</button>				        		
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		);
	}
}
export default ConfigJual;