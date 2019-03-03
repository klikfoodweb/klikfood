import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 250000,
			categories: []
		};
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
				<section id="advertisement">
		          <div className="container">
		            <img src="images/shop/advertisement.jpg" alt />
		          </div>
		        </section>
		        <section>
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-3">
		                <div className="left-sidebar">
		                  <h2>Category</h2>
		                  <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
		                 	{ this.state.categories.map((category,i) =>   
		                    <div className="panel panel-default" key={category.id}>
		                      <div className="panel-heading">
		                        <h4 className="panel-title"><a href="#">{category.name}</a></h4>
		                      </div>
		                    </div>
		                 	) }
		                  </div>{/*/category-productsr*/}
		                  
		                  <div className="shipping text-center">{/*shipping*/}
		                    <img src="images/home/shipping.jpg" alt />
		                  </div>{/*/shipping*/}
		                </div>
		              </div>
		              <div className="col-sm-9 padding-right">
		                <div className="features_items">{/*features_items*/}
		                  <h2 className="title text-center">Features Items</h2>
		                  <div className="col-sm-4">
		                    <div className="product-image-wrapper">
		                      <div className="single-products">
		                        <div className="productinfo text-center">
		                          <img src="images/shop/product12.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/shop/product11.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/shop/product10.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/shop/product9.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/shop/product8.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/shop/product7.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/home/product6.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/home/product5.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
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
		                          <img src="images/home/product1.jpg" alt />
		                          <h2>$56</h2>
		                          <p>Easy Polo Black Edition</p>
		                          <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                        </div>
		                        <div className="product-overlay">
		                          <div className="overlay-content">
		                            <h2>$56</h2>
		                            <p>Easy Polo Black Edition</p>
		                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="choose">
		                        <ul className="nav nav-pills nav-justified">
		                          
		                        </ul>
		                      </div>
		                    </div>
		                  </div>
		                  <ul className="pagination">
		                    <li className="active"><a href>1</a></li>
		                    <li><a href>2</a></li>
		                    <li><a href>3</a></li>
		                    <li><a href>»</a></li>
		                  </ul>
		                </div>{/*features_items*/}
		              </div>
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
export default Shop;