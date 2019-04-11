import React, { Component } from 'react';

class FooterTop extends Component {
	render() {
		return (
			<div>
				<div className="footer-top">
				  <div className="container">
				    <div className="row">			
				      {/*Footer--Start--Company-Info*/}				
				      <div className="col-sm-2">
				        <div className="companyinfo">
				          <a href="#"><img src="" /></a><br />
				          <h2>Klikfood.id</h2>
				          <p>Merupakan portal layanan Pemesanan Makanan dan Bahan Pangan secara online (Order Food &amp; Meals Online), setiap saat melayani kebutuhan pokok pangan Anda dan Keluarga.</p>
				        </div>
				      </div>{/*Footer--/End--Company-Info*/}
				      <div className="col-sm-7">
				        {/*Footer--Start--Technology-Info--Video*/}
				        <div className="col-sm-3">
				          <div className="video-gallery text-center">
				            <a href="#">
				              <div className="iframe-img">
				                <img src="/images/home/iframe1.png" alt />
				              </div>
				              <div className="overlay-icon">
				                <i className="fa fa-play-circle-o" />
				              </div>
				            </a>
				            <p>Stack Platform Technology kami.</p>
				          </div>
				        </div>{/*Footer--/End--Technology-Info--Video*/}
				        {/*Footer---Sociopreneur-Info--Video*/}
				        <div className="col-sm-3">
				          <div className="video-gallery text-center">
				            <a href="https://www.youtube.com/watch?v=WNeH4dhVFKg" target="_blank">
				              <div className="iframe-img">
				                <img src="/images/home/iframe2.png" alt />
				              </div>
				              <div className="overlay-icon">
				                <i className="fa fa-play-circle-o" />
				              </div>
				            </a>
				            <p>Misi Sociopreneur yang kami usung.</p>
				          </div>
				        </div>{/*Footer--/End--Sociopreneur-Info--Video*/}	
				        {/*Footer--Start--Keuntungan-Mitra--Video*/}					
				        <div className="col-sm-3">
				          <div className="video-gallery text-center">
				            <a href="https://www.youtube.com/watch?v=S826ZjE1xEg" target="_blank">
				              <div className="iframe-img">
				                <img src="/images/home/iframe3.png" alt />
				              </div>
				              <div className="overlay-icon">
				                <i className="fa fa-play-circle-o" />
				              </div>
				            </a>
				            <p>Keuntungan jadi Mitra KlikFood</p>
				          </div>
				        </div>{/*Footer--/End--Keuntungan-Mitra--Video*/}
				        {/*Footer---Testimonial-Mitra--Video*/}						
				        <div className="col-sm-3">
				          <div className="video-gallery text-center">
				            <a href="https://www.youtube.com/watch?v=Q5bOi7b5dJQ" target="_blank">
				              <div className="iframe-img">
				                <img src="/images/home/iframe4.png" alt />
				              </div>
				              <div className="overlay-icon">
				                <i className="fa fa-play-circle-o" />
				              </div>
				            </a>
				            <p>Testimonial para Mitra.</p>
				          </div>
				        </div>
				      </div>{/*Footer--/End--Testimonial-Mitra--Video*/}
				      {/*Footer---Map*/}
				      <div className="col-sm-3">
				        <div className="address">
			                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.049256949356!2d106.8289609!3d-6.2621075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99f49453ea82efc4!2sGRAHA+ASA!5e0!3m2!1sid!2sid!4v1550600351150" frameBorder={0} style={{border: 0}} allowFullScreen />
			              
				          {/*<a href="#"><img src="/images/home/map.png" alt /></a>
				          <p>Jl.Loka Indah No.1, Warung Buncit, Jakarta Selatan 12740</p>*/}
				        </div>
				      </div>
				      {/*Footer--/End--Map*/}
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default FooterTop;