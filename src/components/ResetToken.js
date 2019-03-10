import React, { Component } from 'react';

class ResetToken extends Component {
	componentWillMount() {
		sessionStorage.clear();
		localStorage.clear();
		window.location.href='/login';
	}

	render() {
		return (
			<div></div>
		);
	}
}
export default ResetToken;