import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
		axios.get(`https://api.klikfood.id/index.php/kategori`)
		  .then((response) => {
		  	this.setState({
		  		categories: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("Tidak Bisa Mendapatkan Kategori :(");
		  })
	}

  logout = () => {
  	axios.get(`https://api.klikfood.id/index.php/logout`, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  .then((response) => {
		sessionStorage.clear();
		localStorage.clear();
	  	toast.success("Log Out Berhasil !");
	  	setTimeout(() => {
	  		this.setState({ 
				redirect: true,
				logged: true
	  		})
	  		window.location.href='/';
	  	}, 3000)
	  }).catch((error) => {
	  	toast.error("Gagal Log Out :(");
	  })
  }

  profile = () => {
  	window.location.href='/profile';
  }

  keyPress = (e) => {
  	if(e.keyCode == 13){
  		window.location.href='/search?query='+e.target.value;		
    }
  }

  render() {
    return (
    	<div>
    		<ToastContainer
    		position="top-right"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover />
			<header id="header">{/*header*/}
	          <div className="header_top">{/*header_top*/}
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-6">
	                  <div className="contactinfo">
	                    <ul className="nav nav-pills">
	                      <li><a href="#"><i className="fa fa-phone" /> (021) 7918 6869</a></li>
	                      <li><Link to="/contact"><i className="fa fa-envelope" /> info@klikfood.id</Link></li>
	                    </ul>
	                  </div>
	                </div>
	                <div className="col-sm-6">
	                  
	                </div>
	              </div>
	            </div>
	          </div>{/*/header_top*/}
	          <div className="header-middle">{/*header-middle*/}
	            <div className="container">
	              <div className="row">
	                <div className="col-sm-4">
	                  <div className="logo pull-left">
	                    <Link to="/"><img src="/images/home/logo.png" alt="logo" /></Link>
	                  </div>
	                </div>
	                <div className="col-sm-8">
	                  <div className="shop-menu pull-right">
	                    <ul className="nav navbar-nav">
	                      <li><Link to="/login"><i className="fa fa-star" /> Daftar</Link></li>
	                      <li><Link to="/cart"><i className="fa fa-shopping-cart" /> Keranjang</Link></li>
	                    {(sessionStorage.length === 0) ?
	                      <li><Link to="/login"><i className="fa fa-lock" /> Login</Link></li>
	                    	: null
	                    }
	    				{(sessionStorage.length !== 0) ?
	                      <React.Fragment>
	                      {/*<li><Link to="/profile"><i className="fa fa-user" /> Akun Saya</Link></li>*/}
	                      <li>
	                      	<Dropdown style={{position: 'relative', marginLeft: '20px'}}>
	                      	  <Dropdown.Toggle variant="default" id="dropdown-basic">
	                      	    <i className="fa fa-user" /> Dashboard
	                      	  </Dropdown.Toggle>

	                      	  <Dropdown.Menu>
	                      	  <center>
	                      	    <Dropdown.Item href="/admin"><b>Dashboard</b></Dropdown.Item><br />
	                      	    <Dropdown.Item href="/profile"><b>Profil</b></Dropdown.Item><br />
	                      	    <Dropdown.Item onClick={this.logout}><b>Keluar</b></Dropdown.Item>
	                      	  </center>
	                      	  </Dropdown.Menu>
	                      	</Dropdown>
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
	                      <li className="dropdown">
	                      	<a href="#">Kategori<i className="fa fa-angle-down" /></a>
		                        <ul role="menu" className="sub-menu" id="nav-primary">
			                        { this.state.categories.map((category,i) => 
			                        <React.Fragment>
			                          <li><a href="#">{ category.kategori.name } <i className="fa fa-angle-down" /></a>	
				                        	<ul className="subnav">
				                        	{ category.subkategori.map((subcategory,i) =>
			                					<li key={ subcategory._id }><a href={"/search/"+subcategory._id} style={{fontSize: '12px', paddingLeft: '10px'}}>{ subcategory.name } </a></li>
			                				) }
			                				</ul>
		                			  </li>
		                			</React.Fragment>
			                        ) }
		                        </ul>								
	                      </li> 								
	                      <li><Link to="/contact">Kontak</Link></li>
	                      <li><Link to="/mitra-supplyer">Jadi Mitra / Pemasok</Link></li>
	                      <li><a href="http://blogklikfood.000webhostapp.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
	                      <li><a href="https://tawk.to/chat/5c8407f1c37db86fcfcce4bc/1d5hs5ip0" target="_blank" rel="noopener noreferrer">Support</a></li>
	                    </ul>
	                  </div>
	                </div>
	                <div className="col-sm-3" style={{marginTop: '10px'}}>
	                  <div className="search_box pull-right">
	                    <input type="text" placeholder="Cari Produk" onKeyDown={this.keyPress} />
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