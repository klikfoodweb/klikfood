import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';

class PilihPaket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			belanja_pertama: false,
			pakets: [],
			listOngkir: [],
			idpaket: '',
			berat: '',
			servis: ''
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/myaccount`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	if(response.data.data.belanja_pertama === true || sessionStorage.role !== 'Mitra'){
		  		window.location.href='/admin';
		  	}else{

		  	}
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	componentDidMount() {
		axios.get(`https://api.klikfood.id/index.php/paketmitra`)
		.then((response) => {
			console.log(response.data.data);
			this.setState({
				pakets: response.data.data
			})
		}).catch((error) => {
			toast.error("Something Went Wrong :(");
		})
		console.log(this.state.belanja_pertama);
	}

	handleChangePaket = (event) => {
		this.setState({
			idpaket: event.target.value,
			berat: event.target.accessKey
		})
	}

	handleChangeOngkir = (event) => {
		console.log(event.target);
		this.setState({
			servis: event.target.value
		})
	}

	handleChangeKurir = (e) => {
		const cekOngkir = new FormData();
		cekOngkir.set('tujuan', sessionStorage.kota);
		cekOngkir.set('berat', this.state.berat);

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
	  //     	if(localStorage.getItem('redirectOnce')){
			// 	window.location.href='/admin/distribution/order/courier';
			// 	localStorage.removeItem('redirectOnce');
			// }
	      });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const bodyFormData = new FormData();
		
		bodyFormData.set('servis', this.state.servis);
		
		axios.defaults.headers = {  
			'Authorization': sessionStorage.api_token 
		}
		console.log(this.state.servis);
		axios.post(`https://api.klikfood.id/index.php/distribusi/paket/`+this.state.idpaket, bodyFormData)
	      .then(res => {
	      	console.log(res);
	      	toast.success('Cek Pesanan Di "Pesanan Saya"');
	      	setTimeout(() => {
	      		window.location.href='/admin/distribution/myorder';
	      	}, 3000)
	      }).catch(err => {
	      	console.log(err);
	      	toast.error("Tidak Bisa Dipesan :( ");
	      });
	}

	render() {
		if (this.state.belanja_pertama) {
			toast.error("Anda Sudah Pilih Paket");		
			window.location.href='/admin';
	    }
			return (
				<div>
				<ToastContainer /> 
					<Modal.Dialog>
					  <Modal.Header closeButton>
					    <Modal.Title>Ooops Maaf :)</Modal.Title>
					  </Modal.Header>

					  <Modal.Body>
					    <p>Yth Mitra, untuk mengakses penuh fitur Mitra diharapkan memilih paket dahulu. <br /> Berikut Daftar Paket nya:</p>
					  	{
					  		this.state.pakets.map((item,i) =>
					  			(!item.kosong) ? 
					  			<React.Fragment>
        		            		<input key={i} type="radio" lang={item.name} accessKey={item.berat} name="paket" onChange={this.handleChangePaket} value={item._id} onClick={this.handleChange} style={{position: 'relative'}} />{item.name} <p>Lihat Detail</p>
        		            		<br />
        		            	</React.Fragment>
        		            	: null
					  		)
					  	}
					  	<label>Pilih Kurir : </label>
					  	<button onClick={this.handleChangeKurir}>Cek Kurir</button>
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
			        			<td><input style={{position: 'relative'}} type="radio" name="servis" onChange={this.handleChangeOngkir} value={item.service} /> { item.service } </td>
			        		</tr>
			        		</React.Fragment>
			        	)}
			        		</tbody>
				        </table>
					  </Modal.Body>

					  <Modal.Footer>
					    {/*<Button variant="secondary">Close</Button>*/}
					    <Button variant="success" onClick={this.handleSubmit}>Pesan Paket !</Button>
					  </Modal.Footer>
					</Modal.Dialog>
				</div>
			)
		
	}
}
export default PilihPaket;