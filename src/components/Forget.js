import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

class Forget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			submitting: false,
			message: false
		}	
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			submitting: true
		})
		axios.post(`https://api.klikfood.id/index.php/forgotpassword?email=`+this.state.email)
	      .then((response) => {
	      	toast.success("Kode Verifikasi Terkirim Ke Email!");
	      	setTimeout(() => {
	      		this.setState({
	      			submitting: false, 
	      			message: true
	      		});
	      		// window.location.href='/';
	      	}, 3000)
	        console.log(response);
	      }).catch((error) => {
	      	toast.error("Gagal Mengirim Kode Verifikasi :(");
	      	this.setState({
				submitting: false
			})
	      })
	}	

	render() {
		return (
			<div>
			<ToastContainer />
				<section style={{ marginBottom: '80px' }}>{/*form*/}
			        <div className="container">
			        	<h2>Lupa Password </h2>
		                <form onSubmit={this.handleSubmit}>
		                  <input type="email" name="email" className="form-control" placeholder="Alamat Email" value={this.state.email} onChange={this.handleChange} required />
		               	  <br />
		               	  {
		               	  	(this.state.submitting) ?
							<div>
								<center><b>Sedang Mengirim...</b></center>
							</div>
							: (this.state.message) ?
								<div>
									<center><b>Silahkan Cek Email</b></center>
								</div>
							:
							<center><button type="submit" className="btn btn-success">Kirim Email Verfikasi</button></center>
							}
		                </form>
		            </div>
		        </section>
		        <footer id="footer">
					<FooterTop />
					<FooterBottom />
				</footer>
			</div>
		);
	}
}
export default Forget;