import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const cartNya = JSON.parse(localStorage.getItem('mitraCart'));

class PickCourier extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mitraCart: [],
			hargaNya: [],
			beratNya: [],
			jumlahHarga: '',
			jumlahBerat: '',
			jumlahOngkir: ''
		}
		
		cartNya.map( (item, i) => {
			axios.get(`https://api.klikfood.id/index.php/produksupplyer/show/`+item[0], { 'headers': { 'Authorization': sessionStorage.api_token } })
		      .then((response) => {
		      	console.log(response);
		      	localStorage.setItem('hargaProduk'+i, response.data.data.harga_supplyer);
		      	localStorage.setItem('namaProduk'+i, response.data.data.name);
		      	localStorage.setItem('beratProduk'+i, response.data.data.berat_kemasan); 
		      }).catch((error) => {
		      	toast.error("Something Went Wrong :(");
		      })
		} )
	}

	componentDidMount() {
		const cekOngkir = new FormData();
		console.log(sessionStorage);
		cekOngkir.set('alamat_tujuan', sessionStorage.kota);

		axios.post(`https://api.klikfood.id/jarak`, cekOngkir)
		  .then((response) => {
		  	this.setState({
		  		jumlahOngkir: response.data.data.harga
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Jumlah Ongkir :(");
		  })

		let jumlahHargaNya = 0;
		let jumlahBeratNya = 0;
		
		for (var i = 0; i < cartNya.length; i++) {
			jumlahHargaNya = jumlahHargaNya + Number(localStorage.getItem('hargaProduk'+i));
			jumlahBeratNya = jumlahBeratNya + Number(localStorage.getItem('beratProduk'+i));
		}
		this.setState({
			jumlahHarga: jumlahHargaNya,
			jumlahBerat: jumlahBeratNya
		})
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const mitraCart = JSON.parse(localStorage.getItem('mitraCart'));
		
		var obj = {
		    'produk' : mitraCart
		};
		console.log(obj);
		
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}

		axios.post(`https://api.klikfood.id/index.php/distribusi/store`, obj)
	      .then(res => {
	      	console.log(res);
	      	toast.success(res.data.messages);
	      	setTimeout(() => {
	      		window.location.href='/admin/distribution/myorder';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Tidak Bisa Dipesan :( ");
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
				          Total Pembayaran
				        </h2>
				      </div>
				      <div className="body">
				      	<h2 onClick={e=> console.log(localStorage)}>Nama Produk:</h2> 
				      	<ul>
				      		{[...Array(cartNya.length)].map((x, i) =>
							    <li> {localStorage.getItem('namaProduk'+i)} {localStorage.getItem('hargaProduk'+i)} </li>
							)}
				      	</ul>
				        <h2>Total Berat : </h2> { this.state.jumlahBerat }
				        <h2>Total Harga : </h2> { this.state.jumlahHarga }
				        <h2>Total Ongkir : </h2> { this.state.jumlahOngkir }
				        
				        <form onSubmit={this.handleSubmit}>
				      		<button type="submit" className="btn btn-success">Checkout Sekarang</button>
				        <br />
				        </form>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default PickCourier;