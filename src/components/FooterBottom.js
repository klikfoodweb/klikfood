import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterBottom extends Component {
	render() {
		return (
			<div>
				  
				  <div className="footer-widget">
				    <div className="container">
				      <div className="row">
				        {/*Footer--/--Join-Mitra*/}					
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>JOIN MITRA</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="bemitra.html">Daftar Jadi Mitra</Link></li>
				              <li><Link to="konfirmasi.html">Konfirmasi</Link></li>
				              <li><Link to="downloadapp.html">Dowload Aplikasi</Link></li>
				              <li><Link to="aturan-sayembara.html">Ikut Sayembara</Link></li>
				              <li><Link to="faqs.html">FAQs</Link></li>
				              <li><Link to="/login">Login</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Mitra*/}
				        {/*Footer--/--Join-Rekan*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>JOIN PEMASOK</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="bepemasok.html">Daftar Jadi Pemasok </Link></li>
				              <li><Link to="konfirmasi.html">Konfirmasi</Link></li>
				              <li><Link to="downloadapp.html">Download Aplikasi</Link></li>
				              <li><Link to="faqs.html">FAQs</Link></li>
				              <li><Link to="login-pemasok.html">Login</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Rekan*/}
				        {/*Footer--/--Kebijakan*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>KEBIJAKAN</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="tou.html">Kebijakan Layanan</Link></li>
				              <li><Link to="retur.html">Kebijakan Retur Produk</Link></li>
				              <li><Link to="aturan-sayembara.html">Cara Mengikuti Sayembara</Link></li>
				              <li><Link to="point.html">tentang Point</Link></li>
				              <li><Link to="rewards.html">Tentang Rewards</Link></li>
				              <li><Link to="/privacy">Kebijakan Privacy</Link></li>
				              <li><Link to="disclaimer.html">Disclaimer</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Kebijakan*/}
				        {/*Footer--/--Tentang-Kami*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>TENTANG KAMI</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><Link to="info.html">Informasi Perusahaan</Link></li>
				              <li><Link to="budaya.html">Budaya Perusahaan</Link></li>
				              <li><Link to="visi-misi.html">Visi &amp; Misi</Link></li>
				              <li><Link to="lokasi-mitra.html">Mitra &amp; Lokasi</Link></li>
				              <li><Link to="investor.html">Hubungan Investor</Link></li>
				              <li><Link to="haki.html">Hak Cipta</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Tentang-Kami*/}
				        {/*Footer--/--Sayembara*/}					
				        <div className="col-sm-3 col-sm-offset-1">
				          <div className="single-widget">
				            <h2>Ikut Sayembara?</h2>
				            <form action="#" className="searchform">
				              <input type="text" placeholder="Your email address" />
				              <button type="submit" className="btn btn-success"><i className="fa fa-arrow-circle-o-right" /></button>
				              <p>Anda berhak mengikuti sayembara yang kami adakan dengan merekomendasikan link kami.</p>
				            </form>
				            <div className="social-icons pull-right" style={{marginTop: '-20px'}}>
				              <ul className="nav navbar-nav">
				                <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
				                <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
				                <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
				                <li><Link to="#"><i className="fa fa-google-plus" /></Link></li>
				              </ul>
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
				        <p className="pull-right">Powered By <span><a target="_blank" rel="noopener noreferrer" href="http://www.bap-group.co.id">PT. Distra Boga Sarana</a></span></p>
				      </div>
				    </div>
				  </div>{/*Footer--/End--Copyrights*/}
				
			</div>
		);
	}
}
export default FooterBottom;