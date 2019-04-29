import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

class PaymentMethod extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	expired: '',
	    	number: '',
	    	total: ''
	    };
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/transaksi/show/`+this.props.match.params.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		expired: response.data.data.transaksi.VA_expired,
		  		number: response.data.data.transaksi.VA_number,
		  		total: response.data.data.transaksi.jumlah_keseluruhan
		  	})
		  }).catch((error) => {
		  	console.log(error);
		  	toast.error("Gagal Mendapatkan Informasi Transaksi :(");
		  });
	}

	render() {
		if (sessionStorage.length === 0) {
			{toast.success("Login Terlebih Dahulu !")}
			return (
				<Redirect to={'/login'}/>
			)
	    }
		return (
			<div>
			<ToastContainer />
				<div className="row clearfix">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div className="card">
				      <div className="header">
				        <h2>
				          Metode Pembayaran
				        </h2>
				      </div>
				      <div className="body">

			            <center>
			            	<h2>Segera selesaikan pembayaran Anda sebelum jatuh tempo.</h2>
			            	<div style={{backgroundColor: '#c9cacc', border: 'black solid 1px'}}>
			            		<h4>Sisa waktu pembayaran Anda dua jam kedepan</h4>
			            		<h3>Hingga {this.state.expired} WIB</h3>
			            	</div>
			            	<br />
			            	<div style={{backgroundColor: '#ceb744', border: 'black solid 1px'}}>
			            		<h4>Pastikan transaksi Virtual Account Anda telah terverifikasi saat membayar</h4>
			            	</div>
			          	</center>
			            <h5>Transfer pembayaran ke Nomor Virtual Account berikut ini :</h5>
			          	<h2>CIMB NIAGA { this.state.number }</h2>
			          	<br />
			          	<h4>Jumlah yang harus dibayar :</h4>
			          	<h2 style={{color: '#f44336'}}>{formatter.format(this.state.total)}</h2>
			          	<center>
			          		<div style={{backgroundColor: '#c9cacc', border: 'black solid 1px'}}>
			            		<h4>Panduan Pembayaran :</h4>
			            		
			            		<div class="panel-group" id="accordion">
			            		  <div class="panel panel-default">
			            		    <div class="panel-heading">
			            		      <h4 class="panel-title">
			            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
			            		        Collapsible Group 1</a>
			            		      </h4>
			            		    </div>
			            		    <div id="collapse1" class="panel-collapse collapse in">
			            		      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
			            		      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			            		      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			            		      commodo consequat.</div>
			            		    </div>
			            		  </div>
			            		  <div class="panel panel-default">
			            		    <div class="panel-heading">
			            		      <h4 class="panel-title">
			            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
			            		        Collapsible Group 2</a>
			            		      </h4>
			            		    </div>
			            		    <div id="collapse2" class="panel-collapse collapse">
			            		      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
			            		      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			            		      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			            		      commodo consequat.</div>
			            		    </div>
			            		  </div>
			            		  <div class="panel panel-default">
			            		    <div class="panel-heading">
			            		      <h4 class="panel-title">
			            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
			            		        Collapsible Group 3</a>
			            		      </h4>
			            		    </div>
			            		    <div id="collapse3" class="panel-collapse collapse">
			            		      <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
			            		      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			            		      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			            		      commodo consequat.</div>
			            		    </div>
			            		  </div>
			            		</div>

			            	</div>

			            	<br />
			            </center>
		                </div>
			    </div>
			  </div>
			</div>
		</div>

		);
	}
}
export default PaymentMethod;