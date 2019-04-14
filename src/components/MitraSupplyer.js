import React, { Component } from 'react';
import FooterBottom from './FooterBottom';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

class MitraSupplyer extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			testimonies: []
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/testimoni`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		testimonies: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Memuat Info Testimoni :(");
		  })
	}

	render() {
		return (
			<div>
				<br />
				<br />
				{/*Mitra_Section--#1*/}
				<div className="container">
				  <div className="row">
				    <div className="col-sm-12">
				      <h2 className="title text-center">AYO SEGERA BERGABUNG</h2>	
				      <h1 className="title text-center">JADILAH BAGIAN DARI <br />ENTREPRENEUR INDONESIA</h1>							
				      <center><p>Indonesia merupakan pasar besar yang belum sepenuhnya digarap oleh para pelaku bisnis, peluang masih terbuka sangat lebar.</p> 
				        <p><b>Ecommerce Technology Platform</b> yang kami kembangkan ini, memberikan Anda kesempatan dan peluang berbisnis di era Teknologi Informasi.</p> 
				        <p>Segera ambil keputusan untuk menjadi <b>Sosial Entrepreneur Baru</b> dengan <b>Platform Teknologi Perdagangan Digital</b> yang mendukung sepenuhnya bisnis Anda.</p> <p><b>APA AJA ITU?  &nbsp;MAU TAHU?</b></p>
				        <p><b>Ayo Daftar Gratis!</b> </p><p>Manfaatkan pilihan berikut ini dan bergabunglah bersama keluarga besar <b><i>klikfood.id</i></b></p>
				      </center><br />
				    </div>	
				  </div>
				  <div className="row">
				    <div className="col-sm-6 col-xs-6">
				      <center>
				        <div className="price-range">{/*Jadi Mitra*/}
				          <h3>Jadi MITRA</h3>
				          <center><p>Menjadi mitra kami dengan membuka usaha mandiri. <br /><Link to="/privacy">Baca keterangan lebih lanjut disini</Link></p></center>
				          <a href="/register-mitra"><img src="images/home/mitra.png" class="img-responsive" alt /></a>
				          <center><a href="/register-mitra"><button type="button" className="btn btn-default get">JADI MITRA KAMI</button></a></center><br />
				        </div>{/*/New-Product*/}</center>
				    </div>
				    <div className="col-sm-6 col-xs-6">
				      <center>
				        <div className="price-range">{/*Jadi Rekan*/}
				          <h3>Jadi PEMASOK</h3>
				          <center><p>Anda sudah punya usaha? Ayo maju bareng kami!<br /><Link to="/privacy">Baca keterangan lebih lanjut disini</Link></p></center>
				          <a href="/register-pemasok"><img src="images/home/shake-hands.png" class="img-responsive" alt /></a>
				          <center><a href="/register-pemasok"><button type="button" className="btn btn-default get">JADI PEMASOK</button></a></center><br />
				        </div>{/*/New-Product*/}</center>
				    </div>		
				  </div>
				</div><p />		
				{/*/End_Mitra_Section--#1*/}
				{/*Mitra_Section--#2*/}
				<div className="container">
				  <div className="row">
				    <div className="col-sm-12"><br />
				      <h2 className="title text-center">MISI BESAR KAMI</h2>				
				      <center>Adalah agar usahawan mandiri Indonesia bertambah, lebih berkembang dan maju.</center>
				      <p />
				    </div>	
				  </div>
				  <div className="row">
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi #1*/}
				          <h3>Sociopreneur</h3>
				          <center><p>Membangun dan menyebarkan antusiasme serta kepedulian sesama usahawan mandiri di Indonesia.</p></center>
				          <a href="#"><img src="images/home/sociopreneur.png" alt /></a>
				        </div>{/*/Misi #1*/}
				      </center>
				    </div>
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi #2*/}
				          <h3>Kesempatan</h3>
				          <center><p>Membuka kesempatan yang sama pada masyarakat untuk membuka usaha secara mandiri.</p></center>
				          <a href="#"><img src="images/home/kesempatan.png" alt /></a>
				        </div>{/*/Misi #2*/}
				      </center>
				    </div>
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi #3*/}
				          <h3>Dongkrak</h3>
				          <center><p>Mendongkrak merek-merek produk kreatif-inovatif berbasis kearifan lokal nusantara.</p></center>
				          <a href="#"><img src="images/home/dongkrak.png" alt /></a>
				        </div>{/*/Misi #3*/}
				      </center>
				    </div>
				    <p />
				  </div>
				  <div className="row">
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi $4*/}
				          <h3>Teknologi</h3>
				          <center><p>Memberikan kemanfaatan platform teknologi dan aplikasi pada masyarakat luas.</p></center>
				          <a href="#"><img src="images/home/teknologi.png" alt /></a>
				        </div>{/*/Misi #4*/}
				      </center>
				    </div>
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi #5*/}
				          <h3>Distribusi</h3>
				          <center><p>Membuka jalur distribusi dan pemasaran guna memperluas cakupan produk.</p></center>
				          <a href="#"><img src="images/home/distribusi.png" alt /></a>
				        </div>{/*/Misi #5*/}
				      </center>
				    </div>
				    <div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Misi #6*/}
				          <h3>Permodalan</h3>
				          <center><p>Membuka dan memberikan akses keuangan pemodalan usaha.</p></center>
				          <a href="#"><img src="images/home/permodalan.png" alt /></a>
				        </div>{/*/Misi #6*/}
				      </center>
				    </div>
				    <p />
				  </div>	
				</div>		
				{/*/End_Mitra_Section--#2*/}
				{/*Pilih_Kami_Section--#3*/}
				<div className="container">
				  <div className="row">
				    <div className="col-sm-12"><br /><br />
				      <h2 className="title text-center">Mereka yang telah bergabung</h2>				
				      <center>Berikut adalah beberapa testimonial mitra dan rekan bisnis kami</center>
				      <p />
				    </div>	
				  </div>
				  <div className="row">
				  {
				  	this.state.testimonies.map((item,i) => 
				  	<React.Fragment>	
				  	<div className="col-sm-4">
				      <center>
				        <div className="price-range">{/*Telah-Bergabung #1*/}
				          <h3>{item.judul}</h3>
				          <center><p>{ item.subjudul }</p></center>
				          <a href="#"><img src={"https://api.klikfood.id/uploads/testimoni/"+item._id+"/"+item.image} style={{maxHeight: '330px'}} alt /></a>
				        </div>{/*/End-Telah Bergabung #1*/}</center>
				    </div>
				    </React.Fragment>
				    )
				  }
				  </div>
				</div>		
				{/*/End_Pilih_Kami_Section--#3*/}
				<footer id="footer">
					<FooterBottom />
				</footer>
			</div>
		);
	}
}
export default MitraSupplyer;