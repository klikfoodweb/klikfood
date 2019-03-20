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
			servis: '',
			listOngkir: []
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

		const cekOngkir = new FormData();
		console.log(sessionStorage);
		cekOngkir.set('tujuan', sessionStorage.kota);
		cekOngkir.set('berat', jumlahBeratNya);

		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		
		axios.post(`https://api.klikfood.id/index.php/ongkir/harga`, cekOngkir)
	      .then(res => {
	      	console.log(res);
	      	this.setState({
	      		listOngkir: res.data.data
	      	})
	      }).catch(err => {
	      	if(localStorage.getItem('redirectOnce')){
				window.location.href='/admin/distribution/order/courier';
				localStorage.removeItem('redirectOnce');
			}
	      });

		console.log(this.state);
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
		    'produk' : mitraCart,
		    'servis' : this.state.servis
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
				          Pilih Kurir
				        </h2>
				      </div>
				      <div className="body">
				      	<h2 onClick={e=> console.log(localStorage)}>Nama Produk:</h2> 
				      	<ul>
				      		{[...Array(cartNya.length)].map((x, i) =>
							    <li> {localStorage.getItem('namaProduk'+i)} {localStorage.getItem('hargaProduk'+i)} </li>
							)}
				      	</ul>
				        <h2 onClick={e=> console.log(this.state)}>Total Berat : </h2> { this.state.jumlahBerat }
				        <h2 onClick={e=> console.log(sessionStorage)}>Total Harga : </h2> { this.state.jumlahHarga }
				        <form onSubmit={this.handleSubmit}>
				        <table>
				        	<thead>
				        		<tr>
					        		<th>No</th>
					        		<th>Service</th>
					        		<th>Deskripsi</th>
					        		<th>Harga</th>
					        		<th>Pilih</th>
				        		</tr>
				        	</thead>
				        	<tbody>
				        	{ this.state.listOngkir.map((item,i) => 
					        	<React.Fragment>
					        	<tr key={i}>
					        		<td>{ i+1 }</td>
					        		<td>{ item.service } { item.cost[0].etd } Hari</td>
					        		<td>{ item.description }</td>
					        		<td>{ item.cost[0].value }</td>
				        			<td><input type="radio" name="servis" onChange={this.handleChange} value={item.service} /> { item.service } </td>
				        		</tr>
				        		</React.Fragment>
				        	)}
				        	</tbody>
				        </table>
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