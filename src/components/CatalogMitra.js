import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Pagination from './Pagination';

class CatalogMitra extends Component {
	constructor() {
	    super();

	    // an example array of items to be paged
	    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

	    this.state = {
	        exampleItems: exampleItems,
	        pageOfItems: [],
	 		categories: [],
	 		verifiedproducts: []
	    };

	    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
	    this.onChangePage = this.onChangePage.bind(this);

    	// http://apiklikfood.herokuapp.com//mitra/produk/5c7ba01c2cb8710944005d39
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

	  axios.get(`http://apiklikfood.herokuapp.com/produksupplyer?type=verify`, { 'headers': { 'Authorization': sessionStorage.api_token } })
	    .then((response) => {
	    	console.log(response.data.data);
	    	this.setState({
	    		verifiedproducts: response.data.data
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
		            <img src="images/shop/advertisement.jpg" alt="advertisement" />
		          </div>
		        </section>
		        <section>
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-3">
		                <div className="left-sidebar">
		                  <h2>KATEGORI</h2>
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
		                  </div>{/*/category-productsr*/}
		                  
		                  <div className="shipping text-center">{/*shipping*/}
		                    <img src="images/home/shipping.jpg" alt="shipping" />
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
		                          <img src="images/shop/product12.jpg" alt="product12"  />
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
		                          <img src="images/shop/product11.jpg" alt="product11" />
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

		                  {this.state.pageOfItems.map(item =>
		                      <div key={item.id}>{item.name}</div>
		                  )}
		                  <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />

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
export default CatalogMitra;