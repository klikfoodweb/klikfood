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

class Thanks extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	expired: '',
	    	number: '',
	    	total: ''
	    };
	}

	componentWillMount() {
		let query = this.props.location.search.split('=');
		axios.get(`https://api.klikfood.id/index.php/transaksi/show/`+query[1], { 'headers': { 'Authorization': sessionStorage.api_token } })
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
		            	<h2>Segera selesaikan pembayaran Anda sebelum jatuh tempo.</h2>
		            	<div style={{backgroundColor: '#c9cacc', border: 'black solid 1px'}}>
		            		<h4>Sisa waktu pembayaran Anda dua jam kedepan</h4>
		            		<h3>Hingga {this.state.expired} </h3>
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
	          	
	          		<div style={{backgroundColor: '#c9cacc', border: 'black solid 1px'}}>
	            		<center><h4>Panduan Pembayaran :</h4></center>
	            		
	            		<div class="panel-group" id="accordion">
	            		  <div class="panel panel-default">
	            		    <div class="panel-heading">
	            		      <h4 class="panel-title">
	            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
	            		        Pembayaran CIMB Virtual Account dengan ATM CIMB</a>
	            		      </h4>
	            		    </div>
	            		    <div id="collapse1" class="panel-collapse collapse in">
	            		      <div class="panel-body">
		            		      <ol>
		            		      	<li>Masukkan Kartu ATM dan PIN CIMB Anda</li>
									<li>Pilih menu Pembayaran > Lanjut > Virtual Account</li>
									<li>Masukkan nomor virtual account <b>{ this.state.number }</b></li>
									<li>Pilih rekening debit</li>
									<li>Nomor, nama virtual account dan jumlah billing ditampilkan pada layar</li>
									<li>Pilih OK untuk melakukan pembayaran</li>
									<li>Konfirmasi pembayaran ditampilkan pada layar</li>
								  </ol>
	            		      </div>
	            		    </div>
	            		  </div>
	            		  <div class="panel panel-default">
	            		    <div class="panel-heading">
	            		      <h4 class="panel-title">
	            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
	            		        Pembayaran CIMB Virtual Account dengan ATM Bersama / Prima</a>
	            		      </h4>
	            		    </div>
	            		    <div id="collapse2" class="panel-collapse collapse">
	            		      <div class="panel-body">
		            		      <ol>
		            		      	<li>Masukkan Kartu ATM dan PIN Anda pada mesin ATM bank tersebut</li>
		            		      	<li>Pilih menu TRANSFER > TRANSFER KE BANK LAIN</li>
		            		      	<li>Masukkan kode bank CIMB Niaga: 022</li>
		            		      	<li>Masukkan jumlah pembayaran sesuai tagihan</li>
		            		      	<li>Masukkan nomor virtual account <b>{ this.state.number }</b></li>
		            		      	<li>Ikuti instruksi untuk menyelesaikan transaksi</li>
		            		      	<li>Konfirmasi pembayaran ditampilkan pada laya</li>
		            		      </ol>
	            		      </div>
	            		    </div>
	            		  </div>
	            		  <div class="panel panel-default">
	            		    <div class="panel-heading">
	            		      <h4 class="panel-title">
	            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
	            		        Pembayaran CIMB Virtual Account dengan CIMB Clicks</a>
	            		      </h4>
	            		    </div>
	            		    <div id="collapse3" class="panel-collapse collapse">
	            		      <div class="panel-body">
	            		      	<ol>
	            		      		<li>Login ke CIMB clicks </li>
									<li>Pilih menu Bayar Tagihan / Pay Bills</li>
									<li>Pilih Rekening Sumber / Source Account dan Jenis Pembayaran / Payment Type > Virtual Account</li>
									<li>Masukkan nomor virtual account <b>{ this.state.number }</b></li>
									<li>Nomor, nama virtual account dan jumlah billing ditampilkan pada layar</li>
									<li>Masukkan 6 digit mPIN dan tekan tombol Submit</li>
									<li>Konfirmasi pembayaran ditampilkan pada layar</li>
	            		      	</ol>
	            		      </div>
	            		    </div>
	            		  </div>
	            		  <div class="panel panel-default">
	            		    <div class="panel-heading">
	            		      <h4 class="panel-title">
	            		        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
	            		        Pembayaran CIMB Virtual Account dengan Internet Banking Bank Lain</a>
	            		      </h4>
	            		    </div>
	            		    <div id="collapse4" class="panel-collapse collapse">
	            		      <div class="panel-body">
	            		      	<ol>
	            		      		<li>Login ke internet banking</li>
									<li>Pilih menu transfer ke Bank Lain Online</li>
									<li>Pilih bank tujuan Bank CIMB Niaga (kode bank: 022)</li>
									<li>Masukkan nomor virtual account <b>{ this.state.number }</b></li>
									<li>Masukkan jumlah pembayaran sesuai tagihan</li>
									<li>Nomor, nama virtual account dan jumlah billing ditampilkan pada layar</li>
									<li>Ikuti instruksi untuk menyelesaikan transaksi</li>
									<li>Konfirmasi pembayaran ditampilkan pada layar</li>
	            		      	</ol>
	            		      </div>
	            		    </div>
	            		  </div>
	            		</div>

	            	</div>

	            	<br />
		            <center>
		            	<a href={"/admin/transactions/"+this.props.location.search.split('=')[1]} className="btn btn-success">Lihat Status Pembayaran</a>
		          	</center>
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
export default Thanks;