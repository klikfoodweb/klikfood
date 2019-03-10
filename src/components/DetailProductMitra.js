import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class DetailProductMitra extends Component {
	render() {
		return (
			<div>
				<Breadcrumb>
				  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href={"/"+this.props.match.params.mitra}>
				    List Produk
				  </Breadcrumb.Item>
				  <Breadcrumb.Item active>Data</Breadcrumb.Item>
				</Breadcrumb>;
			</div>
		);
	}
}
export default DetailProductMitra;