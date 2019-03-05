import React, { Component } from 'react';

class TopBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" />
				      <a href="javascript:void(0);" className="bars" />
				      {
			          	(sessionStorage.role === 'Administrator') ?
			          		<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>ADMIN - ClickFood</a>
			          		: (sessionStorage.role === 'Supplyer') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Supplyer - ClickFood</a>
							: (sessionStorage.role === 'Mitra') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Mitra - ClickFood</a>
			          		: 
			          		<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Konsumen - ClickFood</a>
			          }
				    </div>
				    <div className="collapse navbar-collapse" id="navbar-collapse">
				
				    </div>
				  </div>
				</nav>
			</div>
		);
	}
}
export default TopBar;