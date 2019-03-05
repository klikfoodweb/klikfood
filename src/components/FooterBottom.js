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
				              <li><a href="bemitra.html">Daftar Jadi Mitra</a></li>
				              <li><a href="konfirmasi.html">Konfirmasi</a></li>
				              <li><a href="downloadapp.html">Dowload Aplikasi</a></li>
				              <li><a href="aturan-sayembara.html">Ikut Sayembara</a></li>
				              <li><a href="faqs.html">FAQs</a></li>
				              <li><Link to="/login">Login</Link></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Mitra*/}
				        {/*Footer--/--Join-Rekan*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>JOIN PEMASOK</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><a href="bepemasok.html">Daftar Jadi Pemasok </a></li>
				              <li><a href="konfirmasi.html">Konfirmasi</a></li>
				              <li><a href="downloadapp.html">Download Aplikasi</a></li>
				              <li><a href="faqs.html">FAQs</a></li>
				              <li><a href="login-pemasok.html">Login</a></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Join-Rekan*/}
				        {/*Footer--/--Kebijakan*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>KEBIJAKAN</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><a href="tou.html">Kebijakan Layanan</a></li>
				              <li><a href="retur.html">Kebijakan Retur Produk</a></li>
				              <li><a href="aturan-sayembara.html">Cara Mengikuti Sayembara</a></li>
				              <li><a href="point.html">tentang Point</a></li>
				              <li><a href="rewards.html">Tentang Rewards</a></li>
				              <li><a href="privacy.html">Kebijakan Privacy</a></li>
				              <li><a href="disclaimer.html">Disclaimer</a></li>
				            </ul>
				          </div>
				        </div>{/*Footer--/End--Kebijakan*/}
				        {/*Footer--/--Tentang-Kami*/}
				        <div className="col-sm-2">
				          <div className="single-widget">
				            <h2>TENTANG KAMI</h2>
				            <ul className="nav nav-pills nav-stacked">
				              <li><a href="info.html">Informasi Perusahaan</a></li>
				              <li><a href="budaya.html">Budaya Perusahaan</a></li>
				              <li><a href="visi-misi.html">Visi &amp; Misi</a></li>
				              <li><a href="lokasi-mitra.html">Mitra &amp; Lokasi</a></li>
				              <li><a href="investor.html">Hubungan Investor</a></li>
				              <li><a href="haki.html">Hak Cipta</a></li>
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