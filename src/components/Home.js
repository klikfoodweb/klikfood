import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
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
	}

	render() {
		return (
			<div>
	        <Banner />
	        <section>
	          <div className="container">
	            <div className="row">
	              <div className="col-sm-3">
	                <div className="left-sidebar">
	                  <h2>Kategori</h2>
	                  <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                    	{ this.state.categories.map((category,i) =>   
                       <div className="panel panel-default" key={category.id}>
                         <div className="panel-heading">
                           <h4 className="panel-title"><a href="#">{category.name}</a></h4>
                         </div>
                       </div>
                    	) }
	                  </div>{/*/category-products*/}
	                  <div className="price-range">{/*New-Product*/}
	                    <h2>Produk Baru</h2>
	                    <center><p>Produk Terbaru Kami</p>
	                      <a href="#"><img src="images/home/shipping.jpg" alt /></a>
	                    </center></div>{/*/New-Product*/}
	                  <div className="price-range">{/*Pesan*/}						
	                    <center><p>Catat dan Pesan di KlikFood</p>
	                      <a href="#"><img src="images/home/shipping.jpg" alt /></a>
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
	                          <img src="images/home/product1.jpg" alt />
	                          <h2>Rp 35.000</h2>
	                          <p>Makanan Lezat</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 35.000</h2>
	                            <p>Makanan Lezat</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                        </ul>
	                      </div>
	                    </div>
	                  </div>
	                  <div className="col-sm-4">
	                    <div className="product-image-wrapper">
	                      <div className="single-products">
	                        <div className="productinfo text-center">
	                          <img src="images/home/product2.jpg" alt />
	                          <h2>Rp 35.000</h2>
	                          <p>Makanan enak</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>										
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 35.000</h2>
	                            <p>Makanan enak</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                          </ul>
	                      </div>
	                    </div>
	                  </div>
	                  <div className="col-sm-4">
	                    <div className="product-image-wrapper">
	                      <div className="single-products">
	                        <div className="productinfo text-center">
	                          <img src="images/home/product3.jpg" alt />
	                          <h2>Rp 55.000</h2>
	                          <p>Makanan Lezat</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 55.000</h2>
	                            <p>Makanan Lezat</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                          </ul>
	                      </div>
	                    </div>
	                  </div>
	                  <div className="col-sm-4">
	                    <div className="product-image-wrapper">
	                      <div className="single-products">
	                        <div className="productinfo text-center">
	                          <img src="images/home/product4.jpg" alt />
	                          <h2>Rp 45.000</h2>
	                          <p>Makanan enak</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 45.000</h2>
	                            <p>Makanan enak</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                        <img src="images/home/new.png" className="new" alt />
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                          </ul>
	                      </div>
	                    </div>
	                  </div>
	                  <div className="col-sm-4">
	                    <div className="product-image-wrapper">
	                      <div className="single-products">
	                        <div className="productinfo text-center">
	                          <img src="images/home/product5.jpg" alt />
	                          <h2>Rp 25.000</h2>
	                          <p>Makanan Lezat</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>										
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 25.000</h2>
	                            <p>Makanan Lezat</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                        <img src="images/home/sale.png" className="new" alt />
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                          </ul>
	                      </div>
	                    </div>
	                  </div>
	                  <div className="col-sm-4">
	                    <div className="product-image-wrapper">
	                      <div className="single-products">
	                        <div className="productinfo text-center">
	                          <img src="images/home/product6.jpg" alt />
	                          <h2>Rp 75.000</h2>
	                          <p>Makanan Lezat</p>
	                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                        </div>
	                        <div className="product-overlay">
	                          <div className="overlay-content">
	                            <h2>Makanan</h2>
	                            <p>Dari bahan pilihan berkualitas tinggi.</p>
	                            <p>Silahkan mencoba sebelum membeli.</p>
	                            <p>Makanan ini sangat Lezat, boleh dicoba!</p>
	                            <h2>Rp 75.000</h2>
	                            <p>Makanan Lezat</p>
	                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="choose">
	                        <ul className="nav nav-pills nav-justified">
	                          </ul>
	                      </div>
	                    </div>
	                  </div>
	                </div>{/*features_items*/}
	                <div className="category-tab">{/*category-tab*/}
	                  <div className="col-sm-12">
	                    <ul className="nav nav-tabs">
	                      <li className="active"><a href="#olahan" data-toggle="tab">Daging Sapi</a></li>
	                      <li><a href="#pangan" data-toggle="tab">Daging Ayam</a></li>
	                      <li><a href="#siapsaji" data-toggle="tab">Daging Kambing</a></li>
	                      <li><a href="#snacks" data-toggle="tab">Produk Olahan</a></li>
	                      <li><a href="#siapolah" data-toggle="tab">Ikan Laut</a></li>
	                    </ul>
	                  </div>
	                  {/*category-tab--#1*/}							
	                  <div className="tab-content"><a href="#siapolah" data-toggle="tab">
	                    </a><div className="tab-pane fade active in" id="olahan"><a href="#siapolah" data-toggle="tab">
	                      </a><div className="col-sm-3"><a href="#siapolah" data-toggle="tab">
	                        </a><div className="product-image-wrapper"><a href="#siapolah" data-toggle="tab">
	                          </a><div className="single-products"><a href="#siapolah" data-toggle="tab">
	                            </a><div className="productinfo text-center"><a href="#siapolah" data-toggle="tab">
	                              </a><a href="#"><img src="images/home/gallery1.jpg" alt /></a>											
	                              <h2>Rp 30.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery2.jpg" alt /></a>
	                              <h2>Rp 45.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery3.jpg" alt /></a>
	                              <h2>Rp 65.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery4.jpg" alt /></a>
	                              <h2>Rp 75.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    {/*/End-category-tab--#1*/}
	                    <div className="tab-pane fade" id="pangan">
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#">&lt;<img src="images/home/gallery4.jpg" alt /></a>				
	                              <h2>Rp 55.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery3.jpg" alt /></a>
	                              <h2>Rp 25.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery2.jpg" alt /></a>
	                              <h2>Rp 35.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery1.jpg" alt /></a>
	                              <h2>Rp 10.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    <div className="tab-pane fade" id="siapsaji">
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery3.jpg" alt /></a>
	                              <h2>Rp 45.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery4.jpg" alt /></a>
	                              <h2>Rp 25.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery1.jpg" alt /></a>
	                              <h2>Rp 65.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery2.jpg" alt /></a>
	                              <h2>Rp 23.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    <div className="tab-pane fade" id="snacks">
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery1.jpg" alt /></a>
	                              <h2>Rp 35.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery2.jpg" alt /></a>
	                              <h2>Rp 25.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery3.jpg" alt /></a>	
	                              <h2>Rp 50.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery4.jpg" alt /></a>
	                              <h2>Rp 23.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                    <div className="tab-pane fade" id="siapolah">
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery2.jpg" alt /></a>
	                              <h2>Rp 20.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery4.jpg" alt /></a>
	                              <h2>Rp 75.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery3.jpg" alt /></a>
	                              <h2>Rp 25.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                      <div className="col-sm-3">
	                        <div className="product-image-wrapper">
	                          <div className="single-products">
	                            <div className="productinfo text-center">
	                              <a href="#"><img src="images/home/gallery1.jpg" alt /></a>
	                              <h2>Rp 35.000</h2>
	                              <p>Makanan enak</p>
	                              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Beli</a>
	                            </div>
	                          </div>
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                </div>{/*/category-tab*/}
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
	              </div>
	            </div>
	          </div>
	        </section>
	        {/*Mitra_Section--#1*/}
	        <div className="container">
	          <div className="row">
	            <div className="col-sm-12">
	              <h2 className="title text-center">AYO SEGERA BERGABUNG</h2>	
	              <h1 className="title text-center">JADILAH BAGIAN DARI <br />SOCIOPRENEUR INDONESIA</h1>							
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
	                  <center><p>Menjadi mitra kami dengan membuka usaha mandiri. <br /><a href="http://localhost/klikfood.id/bemitra.html">Baca keterangan lebih lanjut disini</a></p></center>
	                  <a href="http://localhost/klikfood.id/bemitra.html"><img src="images/home/mitra.png" alt /></a>
	                  <center><a href="http://localhost/klikfood.id/bemitra.html"><button type="button" className="btn btn-default get">JADI MITRA KAMI</button></a></center><br />
	                </div>{/*/New-Product*/}</center>
	            </div>
	            <div className="col-sm-6">
	              <center>
	                <div className="price-range">{/*Jadi Rekan*/}
	                  <h3>Jadi PEMASOK</h3>
	                  <center><p>Anda sudah punya usaha? Ayo maju bareng kami!<br /><a href="http://localhost/klikfood.id/besupplier.html">Baca keterangan lebih lanjut disini</a></p></center>
	                  <a href="http://localhost/klikfood.id/besupplier.html"><img src="images/home/shake-hands.png" alt /></a>
	                  <center><a href="http://localhost/klikfood.id/besupplier.html"><button type="button" className="btn btn-default get">JADI PEMASOK</button></a></center><br />
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
	            <div className="col-sm-4">
	              <center>
	                <div className="price-range">{/*Telah-Bergabung #1*/}
	                  <h3>Mitra</h3>
	                  <center><p>Testimoni Mitra yang telah beraktifitas</p></center>
	                  <a href="#"><img src="images/home/mitra1.jpg" alt /></a>
	                </div>{/*/End-Telah Bergabung #1*/}</center>
	            </div>
	            <div className="col-sm-4">
	              <center>
	                <div className="price-range">{/*Telah-Bergabung #2*/}
	                  <h3>Mitra</h3>
	                  <center><p>Baru bergabung menjadi keluarga besar kami</p></center>
	                  <a href="#"><img src="images/home/mitra2.jpg" alt /></a>
	                </div>{/*/End-Telah Bergabung #2*/}</center>
	            </div>
	            <div className="col-sm-4">
	              <center>
	                <div className="price-range">{/*Telah-Bergabung #3*/}
	                  <h3>Rekan</h3>
	                  <center><p>Telah bergabung, Rekan Bisnis dari Bogor</p></center>
	                  <a href="#"><img src="images/home/rekan1.jpg" alt /></a>
	                </div>{/*/End-Telah Bergabung #3*/}</center>
	            </div>
	            <p />
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
	                <form action="#" className="searchform">
	                  <input type="text" placeholder="Your email address" />
	                  <button type="submit" className="btn btn-success"><i className="fa fa-arrow-circle-o-right" /></button>
	                  <p>Anda berhak mengikuti sayembara yang kami adakan dengan merekomendasikan link kami.</p>
	                </form>
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