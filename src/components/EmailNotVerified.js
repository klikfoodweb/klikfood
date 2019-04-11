import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmailNotVerified extends Component {
	render() {
		return (
			<div className="container">
				<br />
				<h3>Email Gagal Diverifikasi, Silahkan <Link to="/login">Register</Link> Ulang Akun Anda...</h3>
			</div>
		);
	}
}
export default EmailNotVerified;