import React, { Component } from 'react';
import Banner from './Banner';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			testimonies: [],
			promoProducts: [],
			recommendProducts: [],
			newProducts: [],
			productsByCategory: [],
			emailSubscribe: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/mitra/produk?orderby=expire&limit=6&type=verify`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		promoProducts: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Promo Produk :(");
		  })

		  axios.get(`https://api.klikfood.id/index.php/mitra/produk?orderby=terjual&limit=6&type=verify`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		recommendProducts: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Produk Populer :(");
		  })

		  axios.get(`https://api.klikfood.id/index.php/mitra/produk?orderby=terbaru&limit=6&type=verify`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		newProducts: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Produk Terbaru :(");
		  })

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

	componentDidMount() {
	  axios.get(`https://api.klikfood.id/index.php/kategori`)
	  .then((response) => {
	  		console.log(response.data.data);
		  	this.setState({
		  		categories: response.data.data
		  	})
		  	let produkToKategori = [];
		  	this.state.categories.map((category,i) => 
		  		axios.get(`https://api.klikfood.id/mitra/produk?xkategori=`+category.kategori._id+`&limit=6&type=verify`)
		  		  .then((response) => {
		  		  	
		  		  	produkToKategori.push([category.kategori.name, response.data.data])
		  		  	console.log(produkToKategori);

		  		  	this.setState({
		  		  		productsByCategory: produkToKategori
		  		  	})
		  		  }).catch((error) => {
		  		  	toast.error("Gagal Mendapatkan Info Produk :(");
		  		  })
		  	);
		  }).catch((error) => {
		  	toast.error("Tidak Bisa Mendapatkan Kategori :(");
		  })
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubscribe = (e) => {
		e.preventDefault();
		const bodyFormData = {
			email: this.state.emailSubscribe
		}
		axios.post(`https://api.klikfood.id/index.php/subscribe`, qs.stringify(bodyFormData))
	      .then(res => {
	      	toast.success("Terimakasih Sudah Subscribe !");
	      }).catch(err => {
	      	toast.error("Gagal Menghubungi Server :( ");
	      });
	}

	render() {
		return (
			<div>
	        <Banner />
	        <section>
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-3 col-md-3">
	                <div className="left-sidebar">
	                  <h2 className="hidden-sm hidden-xs" onClick={() => console.log(this.state)}>Kategori</h2>
	                  <div className="panel-group category-products hidden-sm hidden-xs" id="accordian">{/*category-productsr*/}
                    	
                    	{ this.state.categories.map((category,i) =>
                    	<div class="panel panel-default" key={category.kategori._id}>
                    		<div class="panel-heading">
                    			<h4 class="panel-title">
                    				<a data-toggle="collapse" data-parent="#accordian" href={"#"+category.kategori._id}>
                    					<span class="badge pull-right"><i class="fa fa-plus"></i></span>
                    					{category.kategori.name}
                    				</a>
                    			</h4>
                    		</div>
                    		<div id={category.kategori._id} class="panel-collapse collapse">
                    			<div class="panel-body">
                    				<ul>
                    				{ category.subkategori.map((subcategory,i) =>
                    					<li key={ subcategory._id }><a href={"/search/"+subcategory._id}>{ subcategory.name } </a></li>
                    				) }
                    				</ul>
                    			</div>
                    		</div>
                    	</div>
                    	) }

	                  </div>

	                  <div className="price-range">{/*Pesan*/}						
	                    <center><p>Catat dan Pesan di KlikFood</p>
	                      <Link to="/login"><img src="/images/home/shipping.jpg" alt="shipping" /></Link>
	                    </center></div>{/*/Pesan*/}
	                </div>
	              </div> 
	              <div className="col-sm-9 col-md-9 padding-right">

	                <div className="recommended_items">{/*recommended_items*/}
	                  <h2 className="title text-center">Produk Promo</h2>
	                  <div id="promo-item-carousel" className="carousel slide" data-ride="carousel">
	                    <div className="carousel-inner">
	                      
	                      <div className="item active">
	                      {
	                      	this.state.promoProducts.map((item,i) => 
		                    
		                    	(i <= 2) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div>

	                      <div className="item">
	                      {
	                      	this.state.promoProducts.map((item,i) => 
		                    
		                    	(i > 2 && i <= 5) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div> 

	                    </div>
	                    <a className="left recommended-item-control" href="#promo-item-carousel" data-slide="prev">
	                      <i className="fa fa-angle-left" />
	                    </a>
	                    <a className="right recommended-item-control" href="#promo-item-carousel" data-slide="next">
	                      <i className="fa fa-angle-right" />
	                    </a>			
	                  </div>
	                </div>{/*/recommended_items*/}

	                <div className="recommended_items">{/*new_items*/}
	                  <h2 className="title text-center">Produk Terbaru</h2>
	                  <div id="new-item-carousel" className="carousel slide" data-ride="carousel">
	                    <div className="carousel-inner">
	                    
	                    <div className="item active">
	                      {
	                      	this.state.newProducts.map((item,i) => 
		                    
		                    	(i <= 2) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div>

	                      <div className="item">
	                      {
	                      	this.state.newProducts.map((item,i) => 
		                    
		                    	(i > 2 && i <= 5) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div> 

	                    </div>
	                    <a className="left recommended-item-control" href="#new-item-carousel" data-slide="prev">
	                      <i className="fa fa-angle-left" />
	                    </a>
	                    <a className="right recommended-item-control" href="#new-item-carousel" data-slide="next">
	                      <i className="fa fa-angle-right" />
	                    </a>			
	                  </div>
	                </div>{/*/new_items*/}

	                <div className="recommended_items">
	                  <h2 className="title text-center">Rekomendasi Produk</h2>
	                  <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
	                    <div className="carousel-inner">
	                      	<div className="item active">
	                      {
	                      	this.state.recommendProducts.map((item,i) => 
		                    
		                    	(i <= 2) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div>

	                      <div className="item">
	                      {
	                      	this.state.promoProducts.map((item,i) => 
		                    
		                    	(i > 2 && i <= 5) ? 
	                				<React.Fragment>
				                        <div className="col-xs-4 col-sm-4">
				                          <div className="product-image-wrapper">
				                            <div className="single-products">
				                              <div className="productinfo text-center">
				                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
				                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
				                                <p className="homeNameProduk">{ item.name }</p>
				                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
				                              </div>
				                            </div>
				                          </div>
				                        </div>
				                    </React.Fragment> 	
			                    : null
		                    )
	                      }
	                      </div> 
	                    </div>
	                    <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
	                      <i className="fa fa-angle-left" />
	                    </a>
	                    <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
	                      <i className="fa fa-angle-right" />
	                    </a>			
	                  </div>
	                </div>


	                {this.state.productsByCategory.map((product,i) =>
	                	<React.Fragment>
    		                <div className="recommended_items">
    		                  <h2 className="title text-center">{ product[0] }</h2>
    		                  <div id={i+"-item-carousel"} className="carousel slide" data-ride="carousel">
    		                    <div className="carousel-inner">
    		                      	<div className="item active">
				                      {
				                      	product[1].map((item,i) => 
					                    
					                    	(i <= 2) ? 
				                				<React.Fragment>
							                        <div className="col-xs-4 col-sm-4">
							                          <div className="product-image-wrapper">
							                            <div className="single-products">
							                              <div className="productinfo text-center">
							                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
							                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
							                                <p className="homeNameProduk">{ item.name }</p>
							                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
							                              </div>
							                            </div>
							                          </div>
							                        </div>
							                    </React.Fragment> 	
						                    : null
					                    )
				                      }
				                      </div>

				                      <div className="item">
				                      {
				                      	product[1].map((item,i) => 
					                    
					                    	(i > 2 && i <= 5) ? 
				                				<React.Fragment>
							                        <div className="col-xs-4 col-sm-4">
							                          <div className="product-image-wrapper">
							                            <div className="single-products">
							                              <div className="productinfo text-center">
							                                <a href="#"><img src={"https://api.klikfood.id/uploads/produk/"+item._id+"/"+item.foto_1} style={{maxHeight: '150px'}} alt /></a>											
							                                <h2 className="homePriceProduk">Rp { item.harga_jual }</h2>
							                                <p className="homeNameProduk">{ item.name }</p>
							                                <Link to="/search-mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Lihat</Link>
							                              </div>
							                            </div>
							                          </div>
							                        </div>
							                    </React.Fragment> 	
						                    : null
					                    )
				                      }
				                      </div>
    		                    </div>
    		                    <a className="left recommended-item-control" href={"#"+i+"-item-carousel"} data-slide="prev">
    		                      <i className="fa fa-angle-left" />
    		                    </a>
    		                    <a className="right recommended-item-control" href={"#"+i+"-item-carousel"} data-slide="next">
    		                      <i className="fa fa-angle-right" />
    		                    </a>			
    		                  </div>
    		                </div>
	                	</React.Fragment>
					)}

	              </div>
	            </div>
	          </div>
	        </section>
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
	            <div className="col-sm-6">
	              <center>
	                <div className="price-range">{/*Jadi Mitra*/}
	                  <h3>Jadi MITRA</h3>
	                  <center><p>Menjadi mitra kami dengan membuka usaha mandiri. <br /><Link to="/privacy">Baca keterangan lebih lanjut disini</Link></p></center>
	                  <Link to="/login"><img src="images/home/mitra.png" alt /></Link>
	                  <center><Link to="/login"><button type="button" className="btn btn-default get">JADI MITRA KAMI</button></Link></center><br />
	                </div>{/*/New-Product*/}</center>
	            </div>
	            <div className="col-sm-6">
	              <center>
	                <div className="price-range">{/*Jadi Rekan*/}
	                  <h3>Jadi PEMASOK</h3>
	                  <center><p>Anda sudah punya usaha? Ayo maju bareng kami!<br /><Link to="/privacy">Baca keterangan lebih lanjut disini</Link></p></center>
	                  <Link to="/login"><img src="images/home/shake-hands.png" alt /></Link>
	                  <center><Link to="/login"><button type="button" className="btn btn-default get">JADI PEMASOK</button></Link></center><br />
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
	        {/*Info-Gratis_Section--#4*/}
	        <div className="container">
	          <div className="row">
	            <div className="col-sm-12"><br /><br />
	              <h2 className="title text-center">Dapatkan info Gratis</h2>				
	              <p />
	            </div>	
	          </div>
	          <center><div className="row">
	              <div className="col-sm-12">
	                <form onSubmit={this.handleSubscribe} className="searchform">
	                  <input type="email" name="emailSubscribe" placeholder="Your email address" onChange={this.handleChange} />
	                  <button type="submit" className="btn btn-success"><i className="fa fa-arrow-circle-o-right" /></button>
	                </form>
	                <br />
	                <center><p>Anda berhak mengikuti sayembara yang kami adakan dengan merekomendasikan link kami.</p></center>
	              </div>
	              <p />
	            </div></center>
	        </div><p />		
	        {/*/End_Info_Gratis_Section--#4*/}
	        <footer id="footer">
	        	<FooterTop />
	        	<FooterBottom />
	        </footer>
		</div>
		);
	}
}
export default Home;