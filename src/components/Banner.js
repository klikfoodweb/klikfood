import React, { Component } from 'react';

class Banner extends Component {
	render() {
		return (
			<div>
				<section id="slider">{/*slider*/}
				  <div className="container">
				    <div className="row">
				      <div className="col-sm-12">
				        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
				          <ol className="carousel-indicators">
				            <li data-target="#slider-carousel" data-slide-to={0} className="active" />
				            <li data-target="#slider-carousel" data-slide-to={1} />
				            <li data-target="#slider-carousel" data-slide-to={2} />
				          </ol>
				          <div className="carousel-inner">
				            <div className="item active">
				              <div className="col-sm-6">
				                <img src="images/home/pricing.png" className="pricing" alt />
				                <h1><span>PROMO</span>-DAGING</h1>
				                <h2>Promo daging lokal &amp; impor</h2>
				                <p>Banyak pilihan daging, baik lokal maupun import, dengan kualitas tinggi. </p>
				                <center><a href="#"><button type="button" className="btn btn-default get">Beli Sekarang</button></a></center><br />
				              </div>
				              <div className="col-sm-6">
				                <a href="#"><img src="images/home/girl1.jpg" className="girl img-responsive" alt /></a>
				              </div>
				            </div>
				            <div className="item">
				              <div className="col-sm-6">
				                <img src="images/home/pricing.png" className="pricing" alt />
				                <h1><span>DISKON</span>-DAGING</h1>
				                <h2>50% Diskon kami berikan</h2>
				                <p>Kualitas ayam pilihan, diseleksi dengan ketat, karena kami mengutamakn produk yang bermutu, </p>
				                <center><a href="#"><button type="button" className="btn btn-default get">Beli Sekarang</button></a></center><br />
				              </div>
				              <div className="col-sm-6">
				                <a href="#"><img src="images/home/girl2.jpg" className="girl img-responsive" alt /></a>
				              </div>
				            </div>
				            <div className="item">
				              <div className="col-sm-6">
				                <img src="images/home/pricing.png" className="pricing" alt />
				                <h1><span>OBRAL</span>-AYAM</h1>
				                <h2>Cuci gudang, obral hanya 1 hari!</h2>
				                <p>Dapatkan ayam berkualitas, dengan seleksi ketat untuk dapatkan produk yang bermutu.</p>
				                <center><a href="#"><button type="button" className="btn btn-default get">Beli Sekarang</button></a></center><br />
				              </div>
				              <div className="col-sm-6">
				                <a href="#"><img src="images/home/girl3.jpg" className="girl img-responsive" alt /></a>
				              </div>
				            </div>
				          </div>
				          <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
				            <i className="fa fa-angle-left" />
				          </a>
				          <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
				            <i className="fa fa-angle-right" />
				          </a>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>{/*/slider*/}
			</div>
		);
	}
}
export default Banner;