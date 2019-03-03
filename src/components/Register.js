import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../login.css';
import qs from 'qs';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			birthplace: '',
			dateofbirth: '',
			address: '',
			website: '',
			email: '',
			password: '',
			aboutme: ''
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = { 
			name: this.state.name,
			birthplace: this.state.birthplace,
			dateofbirth: this.state.dateofbirth, 
			address: this.state.address,
			website: this.state.website,
			email: this.state.email,
			password: this.state.password,
			aboutme: this.state.aboutme
		}
		axios.post(`http://localhost/bajax-lumen/html/register`, qs.stringify( data ))
	      .then(res => {
	        console.log(res);
	        console.log(res.data);
	      }).catch(err => {
	      	console.log(err);
	      });
	}

	render() {
		return (
			<div className="container" style={{marginTop: '2vh'}}> 
				
				  <Card.Body style={{width: '100%'}}>
				  	<div className="row">
			  	        <div className="col-sm-12 col-md-12 col-lg-12 mx-auto">
			  	          <div className="card card-signin my-5">
			  	            <div className="card-body">
			  	              <h5 className="card-title text-center">Register</h5>
			  	              <form className="form-signin" onSubmit={this.handleSubmit}>
			  	                <div className="form-label-group">
			  	                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="inputName" className="form-control" placeholder="Name" required autoFocus />
			  	                  <label htmlFor="inputName">Name</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="text" name="birthplace" value={this.state.birthplace} onChange={this.handleChange} id="inputBirthPlace" className="form-control" placeholder="Birthplace" required autoFocus />
			  	                  <label htmlFor="inputBirthPlace">Birthplace</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange} id="inputDateOfBirth" className="form-control" placeholder="Date Of Birth" required autoFocus />
			  	                  <label htmlFor="inputDateOfBirth">Date Of Birth</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="text" name="address" value={this.state.address} onChange={this.handleChange} id="inputAddress" className="form-control" placeholder="Address" required autoFocus />
			  	                  <label htmlFor="inputAddress">Address</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="url" name="website" value={this.state.website} onChange={this.handleChange} id="inputWebsite" className="form-control" placeholder="Website" autoFocus />
			  	                  <label htmlFor="inputWebsite">Website</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
			  	                  <label htmlFor="inputEmail">Email address</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="inputPassword" className="form-control" placeholder="Password" required />
			  	                  <label htmlFor="inputPassword">Password</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="text" name="aboutme" value={this.state.aboutme} onChange={this.handleChange} id="inputAboutMe" className="form-control" placeholder="About Me" required />
			  	                  <label htmlFor="inputAboutMe">About Me</label>
			  	                </div>
			  	                {/*<div className="custom-control custom-checkbox mb-3">
			  	                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
			  	                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
			  	                </div>*/}
			  	                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register Now</button>
			  	                <br />
			  	                <div className="custom-control custom-checkbox mb-3">
			  	                  <label><Link to="/login">Have an Account?</Link></label>
			  	                </div>
			  	                <hr className="my-4" />
			  	                {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
			  	                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>*/}
			  	              </form>
			  	            </div>
			  	          </div>
			  	        </div>
			  	      </div>
				  </Card.Body>
				
			</div>
		);
	}
}
export default Register;