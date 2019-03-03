import React, { Component } from 'react';
import FooterBottom from './FooterBottom';

class Contact extends Component {
	render() {
		return (
			<div>
				<div id="contact-page" className="container">
			        <div className="bg">
			          <div className="row">    		
			            <div className="col-sm-12">    			   			
			              <h2 className="title text-center">Lokasi <strong>Kami</strong></h2>    			    				    				
			              <div id="gmap" className="contact-map">
			                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.049256949356!2d106.8289609!3d-6.2621075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99f49453ea82efc4!2sGRAHA+ASA!5e0!3m2!1sid!2sid!4v1550600351150" width={1125} height={425} frameBorder={0} style={{border: 0}} allowFullScreen />
			              </div>
			            </div>			 		
			          </div>    	
			          <div className="row">  	
			            <div className="col-sm-8">
			              <div className="contact-form">
			                <h2 className="title text-center">Kontak Email</h2>
			                <div className="status alert alert-success" style={{display: 'none'}} />
			                <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
			                  <div className="form-group col-md-6">
			                    <input type="text" name="name" className="form-control" required="required" placeholder="Nama" />
			                  </div>
			                  <div className="form-group col-md-6">
			                    <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
			                  </div>
			                  <div className="form-group col-md-12">
			                    <input type="text" name="subject" className="form-control" required="required" placeholder="Judul" />
			                  </div>
			                  <div className="form-group col-md-12">
			                    <textarea name="message" id="message" required="required" className="form-control" rows={8} placeholder="Isi pesan" defaultValue={""} />
			                  </div>                        
			                  <div className="form-group col-md-12">
			                    <input type="submit" name="submit" className="btn btn-primary pull-right" defaultValue="Kirim" />
			                  </div>
			                </form>
			              </div>
			            </div>
			            <div className="col-sm-4">
			              <div className="contact-info">
			                <h2 className="title text-center">Kantor Pusat</h2>
			                <address>
			                  <h3>klikfood.id</h3>
			                  <p>Graha ASA. </p>
			                  <p>Jl. Loka Indah No.1</p>
			                  <p>Jakarta Selatan 12740</p>
			                  <p>Telp: (021) 7918 6869</p>
			                  <p>Email: admin@klikfood.id</p>
			                </address>
			                <div className="social-networks">
			                  <h2 className="title text-center">Follow Kami</h2>
			                  <ul>
			                    <li>
			                      <a href="#"><i className="fa fa-facebook" /></a>
			                    </li>
			                    <li>
			                      <a href="#"><i className="fa fa-twitter" /></a>
			                    </li>
			                    <li>
			                      <a href="#"><i className="fa fa-google-plus" /></a>
			                    </li>
			                    <li>
			                      <a href="#"><i className="fa fa-youtube" /></a>
			                    </li>
			                  </ul>
			                </div>
			              </div>
			            </div>    			
			          </div>  
			        </div>	
			      </div>{/*/#contact-page*/}
			      <footer id="footer">
			      	<FooterBottom />
			      </footer>
			</div>
		);
	}
}
export default Contact;