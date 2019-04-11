import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmailVerified extends Component {
	render() {
		return (
			<div className="container">
				<br />
				<h3>Email Berhasil Diverifikasi, Silahkan <Link to="/login">Login</Link> Terlebih Dahulu...</h3>
			</div>
		);
	}
}
export default EmailVerified;