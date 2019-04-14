import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterBottom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email_sayembara: ''
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	sayembaraEmail = (e) => {
		e.preventDefault();
		window.location.href='/login?email_sayembara='+this.state.email_sayembara;
	}

	render() {
		return (
			<div>
				  
				  <div className="footer-widget">
				    <div className="container">
				      <div className="row">
				        {/*Footer--/--Join-Mitra*/}					
				        <div className="col-md-2 col-xs-6">
				          <div className="single-widget">
				            <h2>JOIN MITRA</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><a href="/register-mitra">Daftar Jadi Mitra</a></li>
				              <li><Link to="konfirmasi.html">Konfirmasi</Link></li>
				              <li><a href="https://play.google.com/store/apps/details?id=com.klikfood&hl=in" target="_blank">Download Aplikasi</a></li>
				              <li><Link to="/login">Ikut Sayembara</Link></li>
				              <li><Link to="/faqs-mitra">FAQs</Link></li>
				              <li><Link to="/login">Login</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Mitra*/}
				        {/*Footer--/--Join-Rekan*/}
				        <div className="col-md-2 col-xs-6">
				          <div className="single-widget">
				            <h2>JOIN PEMASOK</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><a href="/register-pemasok">Daftar Jadi Pemasok </a></li>
				              <li><Link to="konfirmasi.html">Konfirmasi</Link></li>
				              <li><a href="https://play.google.com/store/apps/details?id=com.klikfood&hl=in" target="_blank">Download Aplikasi</a></li>
				              <li><Link to="faqs.html">FAQs</Link></li>
				              <li><Link to="/login">Login</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Rekan*/}
				        {/*Footer--/--Kebijakan*/}
				        <div className="col-md-2 col-xs-7">
				          <div className="single-widget">
				            <h2>KEBIJAKAN</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="/ketentuan-penggunaan-website">Kebijakan Layanan</Link></li>
				              <li><Link to="retur.html">Kebijakan Retur Produk</Link></li>
				              <li><Link to="aturan-sayembara.html">Cara Mengikuti Sayembara</Link></li>
				              <li><Link to="point.html">Tentang Point</Link></li>
				              <li><Link to="rewards.html">Tentang Rewards</Link></li>
				              <li><Link to="/privacy">Kebijakan Privacy</Link></li>
				              <li><Link to="/disclaimer">Disclaimer</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Kebijakan*/}
				        {/*Footer--/--Tentang-Kami*/}
				        <div className="col-md-2 col-xs-5">
				          <div className="single-widget">
				            <h2>TENTANG KAMI</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="/tentang-perusahaan">Informasi Perusahaan</Link></li>
				              <li><Link to="/budaya-kerja">Budaya Perusahaan</Link></li>
				              <li><Link to="/visi-misi">Visi &amp; Misi</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Tentang-Kami*/}
				        {/*Footer--/--Sayembara*/}					
				        <div className="col-md-3 col-md-offset-1 col-xs-12">
				          <div className="single-widget">
				            <h2>Ikut Sayembara?</h2>
				            <form onSubmit={this.sayembaraEmail} className="searchform">
				              <input type="email" name="email_sayembara" value={this.state.email_sayembara} placeholder="Your email address" onChange={this.handleChange} />
				              <button type="submit" className="btn btn-success"><i className="fa fa-arrow-circle-o-right" /></button>
				              <p>Anda berhak mengikuti sayembara yang kami adakan dengan merekomendasikan link kami.</p>
				            </form>
				            <div className="social-icons pull-right" style={{marginTop: '-20px'}}>
				              <ul className="nav navbar-nav">
				                <li><a target="_blank" href="https://facebook.com/klikfood.indonesia"><i className="fa fa-facebook" /></a></li>
				                <li><a target="_blank" href="https://twitter.com/klikfood"><i className="fa fa-twitter" /></a></li>
				                <li><a target="_blank" href="https://www.youtube.com/channel/UCWx0A1XIDTfNbrgFQa8ZJKA"><i className="fa fa-youtube" /></a></li>
				                <li><a target="_blank" href="https://www.instagram.com/klikfood.indonesia"><i className="fa fa-instagram" /></a></li>
				              </ul>
				            </div>
				          </div>
				          <div className="row">
					          <div className="col-xs-6">
					          	<img src={ window.location.origin + "/thaiaddict.jpg" } className="img-responsive" style={{height: '80px'}}/>
					          </div>
					          <div className="col-xs-6">
					          	<a href="https://play.google.com/store/apps/details?id=com.klikfood&hl=in" target="_blank"><img src={ window.location.origin + "/google-play-icon.png" } className="img-responsive" style={{height: '40px'}}/></a>
				          	  </div>
				          </div>
				        </div>{/*Footer--/End--Sayembara*/}
				      </div>
				    </div>
				  </div>
				  {/*Footer--/--Copyrights*/}
				  <div className="footer-bottom">
				    <div className="container">
				      <div className="row">
				        <p className="pull-left">Copyright © 2019 klikfood.id. All rights reserved.</p>
				        <p className="pull-right">Powered By <span><a target="_blank" rel="noopener noreferrer" href="http://www.asa-group.co.id">PT. Distra Boga Sarana</a></span></p>
				      </div>
				    </div>
				  </div>{/*Footer--/End--Copyrights*/}
				
			</div>
		);
	}
}
export default FooterBottom;