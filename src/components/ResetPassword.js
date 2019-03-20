import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

class ResetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			submitting: false
		}	
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/cekforgotpassword?forgot_password=`+this.props.match.params.kode)
		  .then((response) => {
		  	
		  }).catch((error) => {
		  		toast.error("Kode Reset Password Anda Salah :(");
		  		window.location.href='/forget';
		  })
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

		const bodyFormData = new FormData();
		
		bodyFormData.set('password', this.state.password);
		bodyFormData.set('forgot_password', this.props.match.params.kode);

		axios.post(`https://api.klikfood.id/index.php/resetpassword`, bodyFormData)
	      .then((response) => {
	      	toast.success("Password Berhasil Diganti");
	      	setTimeout(() => {
	      		this.setState({ 
	      			submitting: true
	      		});
	      		window.location.href='/login';
	      	}, 3000)
	        console.log(response);
	      }).catch((error) => {
	      	toast.error("Gagal Mengganti Password :(");
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
			        	<h2>Ganti Password </h2>
		                <form onSubmit={this.handleSubmit}>
		                  <input type="password" name="password" className="form-control" placeholder="Password Baru" value={this.state.password} onChange={this.handleChange} required />
		               	  <br />
		               	  {this.state.submitting ?
							<div>
								<center><b>Sedang Mengganti...</b></center>
							</div>
						  :
		               	  <center><button type="submit" className="btn btn-success">Kirim Password Baru</button></center>
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
export default ResetPassword;