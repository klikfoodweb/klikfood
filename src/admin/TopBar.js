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
			          		<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>ADMIN - KlikFood</a>
			          		: (sessionStorage.role === 'Supplyer') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Pemasok - KlikFood</a>
							: (sessionStorage.role === 'Mitra') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Mitra - KlikFood</a>
			          		: (sessionStorage.role === 'COO') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>COO - KlikFood</a>
			          		: (sessionStorage.role === 'CFO') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>CFO - KlikFood</a>
			          		: (sessionStorage.role === 'CEO') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>CEO - KlikFood</a>
			          		: (sessionStorage.role === 'CMO_konsumen') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>CMO Konsumen - KlikFood</a>
			          		: (sessionStorage.role === 'CMO_mitra') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>CMO Mitra - KlikFood</a>
			          		: (sessionStorage.role === 'CMO_pemasok') ?
							<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>CMO Pemasok - KlikFood</a>
			          		: 
			          		<a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>Konsumen - KlikFood</a>
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