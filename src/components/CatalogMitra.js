import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import ContentLoader from "react-content-loader";

class CatalogMitra extends Component {
	constructor() {
	    super();

	    this.state = {
	        pageOfItems: [],
	 		categories: [],
	 		products: [],
	 		loader: true
	    };

	    this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pageOfItems) {
	    // update state with new page of items
	    this.setState({ pageOfItems: pageOfItems });
	}

	componentDidMount() {
		axios.get(`http://apiklikfood.herokuapp.com/kategori`)
		  .then((response) => {
		  	this.setState({
		  		categories: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })		

	  axios.get(`http://apiklikfood.herokuapp.com/mitra/produk/5c7c60102cb8710ef4005c88`, { 'headers': { 'Authorization': sessionStorage.api_token } })
      .then((response) => {
      	console.log(response.data.data);
      	this.setState({
      		products: response.data.data,
      		loader: false
      	})
      	console.log(this.state.products);
      }).catch((error) => {
      	toast.error("Something Went Wrong :(");
      })
	}

	render() {
		const MyLoader = props => (
			<ContentLoader 
				height={160}
				width={400}
				speed={2}
				primaryColor="#f3f3f3"
				secondaryColor="#ecebeb"
				{...props}
			>
				<rect x="104.23" y="124.67" rx="3" ry="3" width="174.8" height="27.65" /> 
				<rect x="93" y="89.67" rx="3" ry="3" width="201" height="25.73" /> 
				<rect x="8.12" y="171.18" rx="0" ry="0" width="422.21" height="124.44" /> 
				<rect x="1.23" y="0.67" rx="0" ry="0" width="410" height="79.8" />
			</ContentLoader>
		)

		return (
			<div>
				<section>
		          <div className="container">
				    <div className="row">
				    	<div className="col-sm-12">
				    		<Jumbotron>
				    		  <h1>Selamat Datang, Di Toko Kami!</h1>
				    		  <p>
				    		    Silahkan berbelanja, kami akan melayani dengan sepenuh hati.
				    		  </p>
				    		</Jumbotron>;
		            	</div>
		            </div>
		            <div className="row">
		              <div className="col-sm-3">
		                <div className="left-sidebar">
		                  <h2>Kategori</h2>
		                  <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
	                    	
	                    	{ this.state.categories.map((category,i) =>
	                    	<div class="panel panel-default" key={category.kategori.id}>
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
	                    					<li key={ subcategory._id }><a href={"/search?kategori="+subcategory._id}>{ subcategory.name } </a></li>
	                    				) }
	                    				</ul>
	                    			</div>
	                    		</div>
	                    	</div>
	                    	) }

		                  </div>{/*/category-products*/}
		                  <div className="price-range">{/*New-Product*/}
		                    <h2>Produk Baru</h2>
		                    <center><p>Produk Terbaru Kami</p>
		                      <a href="#"><img src="images/home/shipping.jpg" alt="shipping" /></a>
		                    </center></div>{/*/New-Product*/}
		                  <div className="price-range">{/*Pesan*/}						
		                    <center><p>Catat dan Pesan di KlikFood</p>
		                      <a href="#"><img src="images/home/shipping.jpg" alt="shipping" /></a>
		                    </center></div>{/*/Pesan*/}
		                </div>
		              </div> 
		              <div className="col-sm-9 padding-right">
		                <div className="features_items">{/*features_items*/}
		                  <h2 className="title text-center">Produk Promo</h2>
		                  <div className="col-sm-4">
		                    <div className="product-image-wrapper">
		                      <div className="single-products">
		                        <div className="productinfo text-center">
		                          <img src="images/home/product6.jpg" alt />
		                          <h2>Rp 75.000</h2>
		                          <p>Makanan Lezat</p>
		                          <Link to="/mitra" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</Link>
		                        </div>
		                        {/*<div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>Makanan</h2>
		                            <p>Dari bahan pilihan berkualitas tinggi.</p>
		                            <p>Silahkan mencoba sebelum membeli.</p>
		                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
		                            <h2>Rp 75.000</h2>
		                            <p>Makanan Lezat</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                          </div>
		                        </div>*/}
		                      </div>
		                      <div className="choose">
		                        <ul className="nav nav-pills nav-justified">
		                          </ul>
		                      </div>
		                    </div>
		                  </div>
		                </div>{/*features_items*/}
		                
		                {/*/category-tab*/}
		                
		                <div className="recommended_items">{/*recommended_items*/}
		                  <h2 className="title text-center">Rekomendasi Produk</h2>
		                  <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
		                    <div className="carousel-inner">
		                      <div className="item active">	
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">
		                                <a href="#"><img src="images/home/recommend1.jpg" alt /></a>											
		                                <h2>Rp 10.000</h2>
		                                <p>Jajanan Enak</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">
		                                <a href="#"><img src="images/home/recommend2.jpg" alt /></a>									
		                                <h2>Rp 15.000</h2>
		                                <p>Kue enak</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">	
		                                <a href="#"><img src="images/home/recommend3.jpg" alt /></a>	
		                                <h2>Rp 15.000</h2>
		                                <p>Jajanan Spesial</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="item">	
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">
		                                <a href="#"><img src="images/home/recommend1.jpg" alt /></a>
		                                <h2>Rp 23.000</h2>
		                                <p>Kue enak</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">
		                                <a href="#"><img src="images/home/recommend2.jpg" alt /></a>
		                                <h2>Rp 10.000</h2>
		                                <p>Jajanan huenak</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                        <div className="col-sm-4">
		                          <div className="product-image-wrapper">
		                            <div className="single-products">
		                              <div className="productinfo text-center">
		                                <a href="#"><img src="images/home/recommend3.jpg" alt /></a>
		                                <h2>Rp 13.000</h2>
		                                <p>Makanan enak</p>
		                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                    <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
		                      <i className="fa fa-angle-left" />
		                    </a>
		                    <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
		                      <i className="fa fa-angle-right" />
		                    </a>			
		                  </div>
		                </div>{/*/recommended_items*/}
		                
		                <h2 className="title text-center">Semua Produk</h2>
		                { this.state.loader ?
		                  <React.Fragment>
		                  {[...Array(9)].map((x, i) =>
						  	<div>
		                      	<div className="col-sm-4">
		                      	  <div className="product-image-wrapper">
		                      	    <div className="single-products">
		                      	      <MyLoader key={i} />
		                      	    </div>
		                      	    <div className="choose">
		                      	      <ul className="nav nav-pills nav-justified">
		                      	        
		                      	      </ul>
		                      	    </div>
		                      	  </div>
		                      	</div>
		                      </div>
						  )}
						  </React.Fragment>
						  :
						  <React.Fragment>
		                  {this.state.pageOfItems.map(item =>
		                      <div>
		                      	<div className="col-sm-4" key={item.id}>
		                      	  <div className="product-image-wrapper">
		                      	    <div className="single-products">
		                      	      <div className="productinfo text-center">
		                      	        <img src={ "http://bajax.0hi.me/produk/" + item._id + "/" + item.foto_1 + "?i=1" } alt="product12"  />
		                      	        <h2>Rp {item.harga_jual}</h2>
		                      	        <p>{ item.name }</p>
		                      	        <a href="#" onClick={this.handleAddToCart} id={item._id + "/" + item.foto_1} title={item.name} lang={item.harga_jual} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" id={item._id + "/" + item.foto_1} title={item.name} lang={item.harga_jual} />Add to cart</a>
		                      	      </div>
		                      	      <div className="product-overlay">
		                      	        <div className="overlay-content">
		                      	          <h2>Rp {item.harga_jual}</h2>
		                      	          <p>{ item.deskripsi }</p>
		                      	          <p>{item.name}</p>
		                      	          <a href="#" onClick={this.handleAddToCart} id={item._id + "/" + item.foto_1} title={item.name} lang={item.harga_jual} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" id={item._id + "/" + item.foto_1} title={item.name} lang={item.harga_jual} />Add to cart</a>
		                      	        </div>
		                      	      </div>
		                      	    </div>
		                      	    <div className="choose">
		                      	      <ul className="nav nav-pills nav-justified">
		                      	        
		                      	      </ul>
		                      	    </div>
		                      	  </div>
		                      	</div>
		                      </div>
		                  )}
		                  </React.Fragment>
		                  }
		              </div>
		                <center><Pagination items={this.state.products} onChangePage={this.onChangePage} /></center>
		            </div>
		          </div>
		        </section>
		        <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
		      	</footer>
			</div>
		);
	}
}
export default CatalogMitra;