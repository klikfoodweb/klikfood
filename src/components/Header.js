import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		redirect: false,
  		logged: false,
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

  logout = () => {
  	axios.get(`http://apiklikfood.herokuapp.com/logout`, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  .then((response) => {
		sessionStorage.clear();
	  	toast.success("You Are Logged Out !");
	  	setTimeout(() => {
	  		this.setState({ 
				redirect: true,
				logged: true
	  		})
	  		window.location.href='/';
	  	}, 3000)
	  }).catch((error) => {
	  	toast.error("Something Went Wrong :(");
	  })
  }

  profile = () => {
  	window.location.href='/profile';
  }

  render() {
    return (
    	<div>
    		<ToastContainer />
			<header id="header">{/*header*/}
	          <div className="header_top">{/*header_top*/}
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-6">
	                  <div className="contactinfo">
	                    <ul className="nav nav-pills">
	                      <li><a href="#"><i className="fa fa-phone" /> (021) 7918 6869</a></li>
	                      <li><a href="#"><i className="fa fa-envelope" /> info@klikfood.id</a></li>
	                    </ul>
	                  </div>
	                </div>
	                <div className="col-sm-6">
	                  <div className="social-icons pull-right" style={{marginTop: '-20px'}}>
	                    <ul className="nav navbar-nav">
	                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
	                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
	                      <li><a href="#"><i className="fa fa-linkedin" /></a></li>
	                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
	                    </ul>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>{/*/header_top*/}
	          <div className="header-middle">{/*header-middle*/}
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-4">
	                  <div className="logo pull-left">
	                    <Link to="/"><img src="images/home/logo.png" alt="logo" /></Link>
	                  </div>
	                </div>
	                <div className="col-sm-8">
	                  <div className="shop-menu pull-right">
	                    <ul className="nav navbar-nav">
	                      <li><a href="#"><i className="fa fa-star" /> Daftar</a></li>
	                      <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Support</a></li>
	                      <li><Link to="/cart"><i className="fa fa-shopping-cart" /> Keranjang Belanja</Link></li>
	                    {(sessionStorage.length === 0) ?
	                      <li><Link to="/login"><i className="fa fa-lock" /> Login</Link></li>
	                    	: null
	                    }
	    				{(sessionStorage.length !== 0) ?
	                      <React.Fragment>
	                      {/*<li><Link to="/profile"><i className="fa fa-user" /> Akun Saya</Link></li>*/}
	                      <li>
	                      	<Dropdown>
	                      	  <Dropdown.Toggle variant="default" id="dropdown-basic">
	                      	    <i className="fa fa-user" /> Akun Saya
	                      	  </Dropdown.Toggle>

	                      	  <Dropdown.Menu>
	                      	  <center>
	                      	    <Dropdown.Item href="/admin"><b>Dashboard</b></Dropdown.Item><br />
	                      	    <Dropdown.Item href="/profile"><b>Profile</b></Dropdown.Item><br />
	                      	    <Dropdown.Item onClick={this.logout}><b>Logout</b></Dropdown.Item>
	                      	  </center>
	                      	  </Dropdown.Menu>
	                      	</Dropdown>;
	                      </li>
	                      </React.Fragment>
	                    	: null
	                    }
	                    </ul>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>{/*/header-middle*/}
	          <div className="header-bottom">{/*header-bottom*/}
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-9">
	                  <div className="navbar-header" style={{}}>
	                    <button type="button" className="navbar-toggle btn-success" data-toggle="collapse" data-target=".navbar-collapse">
	                      <span className="sr-only">Toggle navigation</span>
	                      <span className="icon-bar" />
	                      <span className="icon-bar" />
	                      <span className="icon-bar" />
	                    </button>
	                  </div>
	                  <div className="mainmenu pull-left">
	                    <ul className="nav navbar-nav collapse navbar-collapse">
	                      <li><Link to="/" className="active">Home</Link></li>
	                      <li className="dropdown"><a href="#">Kategori<i className="fa fa-angle-down" /></a>
	                        <ul role="menu" className="sub-menu">
	                        { this.state.categories.map((category,i) => 
	                          <li><Link to="/shop">{ category.kategori.name }</Link></li>	
	                        ) }
	                        </ul>								
	                      </li> 								
	                      <li><Link to="/contact">Layanan Pelanggan</Link></li>								
	                      <li><Link to="/contact">Layanan Mitra</Link></li>
	                      <li><Link to="/contact">Kontak</Link></li>
	                      <li><a href="http://klikfood.id" target="_blank" rel="noopener noreferrer">Blog</a></li>
	                    </ul>
	                  </div>
	                </div>
	                <div className="col-sm-3" style={{marginTop: '10px'}}>
	                  <div className="search_box pull-right">
	                    <input type="text" placeholder="Cari Produk" />
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>{/*/header-bottom*/}
	        </header>{/*/header*/}
		</div>
		)
	}
}
export default Header;