import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

class Cart extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	 		carts: []
	    };
		
		var carts = JSON.parse(localStorage.getItem('cart'));
		if(carts)
			carts.map(item => 
				this.state.carts.push(item)
			)

		this.handleDeleteCart = this.handleDeleteCart.bind(this);
	}

	componentDidMount() {
	}

	handleDeleteCart = i => {
		this.setState( state => {
			const carts = this.state.carts.filter((item, j) => i !== j);
			return {
				carts,
			}
		});				                      
	}

	render() {
		if (sessionStorage.length === 0) {
			{toast.success("Login Terlebih Dahulu !")}
			return (
				<Redirect to={'/login'}/>
			)
	    }
		return (
			<div>
				<section id="cart_items">
		          <div className="container">
		            <div className="breadcrumbs">
		              <ol className="breadcrumb">
		                <li><a href="/">Home</a></li>
		                <li className="active">Shopping Cart</li>
		              </ol>
		            </div>
		            <div className="table-responsive cart_info">
		              <table className="table table-condensed">
		                <thead>
		                  <tr className="cart_menu" onClick={e => console.log(this.state.carts)}>
		                    <td className="image">Item</td>
		                    <td className="description" />
		                    <td className="price">Price</td>
		                    <td className="quantity">Quantity</td>
		                    <td className="total">Total</td>
		                    <td />
		                  </tr>
		                </thead>
		                <tbody>
		                { this.state.carts.map( (cart, index) => 
		                  <tr>
		                    <td className="cart_product">
		                      <a href><img src={ "http://bajax.0hi.me/produk/"+ cart[2] } alt="cart" width="150" /></a>
		                    </td>
		                    <td className="cart_description">
		                      <h4><a href>{ cart[0] }</a></h4>
		                      {/*<p>Web ID: 1089772</p>*/}
		                    </td>
		                    <td className="cart_price">
		                      <p>Rp. { cart[1] }</p>
		                    </td>
		                    <td className="cart_quantity">
		                      <div className="cart_quantity_button">
		                        <a className="cart_quantity_up" onClick={e => {
		                        	const newJumlah = this.state.carts.slice();
		                        	newJumlah[index][3] += 1;
		                        	this.setState({carts: newJumlah});
		                        	console.log(this.state.carts); 
		                        } } href> + </a>
		                        <input className="cart_quantity_input" type="text" value={cart[3]} name="quantity" autoComplete="off" size={2} />
		                        <a className="cart_quantity_down" onClick={e => {
		                        	const newJumlah = this.state.carts.slice();
		                        	if(newJumlah[index][3] > 1)
		                        		newJumlah[index][3] -= 1;
		                        		this.setState({carts: newJumlah});
		                        	console.log(this.state.carts); 
		                        } }  href> - </a>
		                      </div>
		                    </td>
		                    <td className="cart_total">
		                      <p className="cart_total_price">Rp. { cart[1] * cart[3] }</p>
		                    </td>
		                    <td className="cart_delete">
		                      <a className="cart_quantity_delete" id={cart[0]} onClick={() => this.handleDeleteCart(index) } href><i className="fa fa-times" id={index} /></a>
		                    </td>
		                  </tr>
		                ) }
		                </tbody>
		              </table>
		            </div>
		          </div>
		        </section> {/*/#cart_items*/}
		        <section id="do_action">
		          <div className="container">
		            <div className="heading">
		              <h3>What would you like to do next?</h3>
		              <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
		            </div>
		            <div className="row">
		              <div className="col-sm-6">
		                <div className="chose_area">
		                  <ul className="user_option">
		                    <li>
		                      <input type="checkbox" />
		                      <label>Use Coupon Code</label>
		                    </li>
		                    <li>
		                      <input type="checkbox" />
		                      <label>Use Gift Voucher</label>
		                    </li>
		                    <li>
		                      <input type="checkbox" />
		                      <label>Estimate Shipping &amp; Taxes</label>
		                    </li>
		                  </ul>
		                  <ul className="user_info">
		                    <li className="single_field">
		                      <label>Country:</label>
		                      <select>
		                        <option>United States</option>
		                        <option>Bangladesh</option>
		                        <option>UK</option>
		                        <option>India</option>
		                        <option>Pakistan</option>
		                        <option>Ucrane</option>
		                        <option>Canada</option>
		                        <option>Dubai</option>
		                      </select>
		                    </li>
		                    <li className="single_field">
		                      <label>Region / State:</label>
		                      <select>
		                        <option>Select</option>
		                        <option>Dhaka</option>
		                        <option>London</option>
		                        <option>Dillih</option>
		                        <option>Lahore</option>
		                        <option>Alaska</option>
		                        <option>Canada</option>
		                        <option>Dubai</option>
		                      </select>
		                    </li>
		                    <li className="single_field zip-field">
		                      <label>Zip Code:</label>
		                      <input type="text" />
		                    </li>
		                  </ul>
		                  <a className="btn btn-default update" href>Get Quotes</a>
		                  <a className="btn btn-default check_out" href>Continue</a>
		                </div>
		              </div>
		              <div className="col-sm-6">
		                <div className="total_area">
		                  <ul>
		                    <li>Cart Sub Total <span>$59</span></li>
		                    <li>Eco Tax <span>$2</span></li>
		                    <li>Shipping Cost <span>Free</span></li>
		                    <li>Total <span>$61</span></li>
		                  </ul>
		                  <a className="btn btn-default update" href>Update</a>
		                  <a className="btn btn-default check_out" href>Check Out</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </section>{/*/#do_action*/}
		        <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
		      	</footer>
			</div>
		);
	}
}
export default Cart;