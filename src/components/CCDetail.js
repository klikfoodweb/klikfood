import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import { Redirect, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

class CCDetail extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	linkMCP: '',
	    	total: ''
	    };
	}

	componentWillMount() {
		let query = this.props.location.search.split('=');
		axios.get(`https://api.klikfood.id/index.php/transaksi/show/`+query[1], { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		total: response.data.data.transaksi.jumlah_keseluruhan
		  	})
		  }).catch((error) => {
		  	console.log(error);
		  	toast.error("Gagal Mendapatkan Informasi Transaksi :(");
		  });

		axios.get(`https://api.klikfood.id/MCP/CC/`+query[1], { 'headers': { 'Authorization': sessionStorage.api_token } })
      	  .then(response => {
  			console.log(response);
  			this.setState({
  				linkMCP: response.data.data
  			})
  		  })
  		  .catch(err => {
  		  	console.log(err);
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
				<section id="cart_items">
		          <div className="container">
		            <div className="breadcrumbs">
		              <ol className="breadcrumb">
		                <li><a href="/">Home</a></li>
		                <li><a href="/cart">Shopping Cart</a></li>
		                <li className="active">Summary</li>
		              </ol>
		            </div>

		            <center style={{marginTop: '-50px'}}>
		            	<h2>Terimakasih, silahkan segera lakukan pembayaran</h2>
		            	<div style={{backgroundColor: '#c9cacc', border: 'black solid 1px'}}>
		            		<h4>Klik link dibawah ini untuk melakukan pembayaran via MCPayment</h4>
		            		<a href={this.state.linkMCP} target="_blank"><pre>{ this.state.linkMCP }</pre></a>
		            	</div>
		            	{/*<br />*/}
		            	{/*<div style={{backgroundColor: '#ceb744', border: 'black solid 1px'}}>
		            		<h4>Pastikan transaksi Virtual Account Anda telah terverifikasi saat membayar</h4>
		            	</div>*/}
		          	</center>
		            {/*<h5>Transfer pembayaran ke Nomor Virtual Account berikut ini :</h5>
		          	<h2>CIMB NIAGA { this.state.number }</h2>*/}
		          	<br />
		          	<h4>Jumlah yang harus dibayar :</h4>
		          	<h2 style={{color: '#f44336'}}>{formatter.format(this.state.total)}</h2>
		          	{/*<center>
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
		          	</center>*/}
		            	<a href={"/admin/transactions/"+this.props.location.search.split('=')[1]} className="btn btn-success">Lihat Status Pembayaran</a>
		          </div>
		        </section>{/*/#do_action*/}
		        <br />
		        <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
		      	</footer>
			</div>
		);
	}
}
export default CCDetail;