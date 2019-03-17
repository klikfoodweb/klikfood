import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import 'react-input-range/lib/css/index.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

class SearchMitra extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	categories: [],
	        provinsis: [],
	        kotas: [],
	        mitras: [],
	        kota: ''
	    };
	}

	componentWillMount() {
		axios.get(`http://35.243.170.33/index.php/ongkir/provinsi`)
		  .then((response) => {
			this.setState({ 
				provinsis: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
	}

	changeProvinsi = (e) => {
		this.setState({ 
			kotas: []
  		})
		axios.get(`http://35.243.170.33/index.php/ongkir/kota/`+e.target.value)
		  .then((response) => {
		  	this.setState({ 
				kotas: response.data.data
	  		})	
		  }).catch((error) => {
		  	toast.error("Something Went Wrong :(");
		  })
		  e.persist();
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		axios.get(`http://35.243.170.33/index.php/mitra?kota=`+this.state.kota)
	      .then(res => {
	      	console.log(res);
	      	this.setState({
	      		mitras: res.data.data
	      	})
	      }).catch(err => {
	      	toast.error("Gagal Mencari Mitra :( ");
	      });
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	showLayout(cell, row){
	  	return <Link className="btn btn-success" to={"/"+row.username}> Lihat </Link>;
	}

	render() {
		return (
			<div>
		        <section>
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12 padding-right">
		                <div className="features_items">{/*features_items*/}
		                  <h2 className="title text-center">Masukkan Kota Anda</h2>
		                  <center>
		                  	<form onSubmit={this.handleSubmit}>
		                  		<label> Pilih Provinsi : </label>
			                    <select name="provinsi" style={{marginBottom: '20px'}} onChange={this.changeProvinsi}>
									<option value="#">Pilih Provinsi</option>
								{ 
									this.state.provinsis.map( provinsi =>
										<React.Fragment>
											<option key={provinsi.province_id} value={provinsi.province_id}>{ provinsi.province }</option>
										</React.Fragment>
									)
								}
								</select>
								<label> Pilih Kota : </label>
								<select name="kota" style={{marginBottom: '20px'}} onChange={this.handleChange}>
									<option value="#">Pilih Kota</option>
								{ 
									this.state.kotas.map( kota =>
										<React.Fragment>
											<option key={kota.city_id} value={kota.city_id}>{kota.type} { kota.city_name }</option>
										</React.Fragment>
									)
								}
								</select>
		                  		<button type="submit" className="btn btn-success">Cari Mitra Terdekat</button>
		                  	</form>
		                  	<hr />
		                  	<BootstrapTable data={this.state.mitras} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='username' dataSort={true}>Username Toko</TableHeaderColumn>
		                  	  <TableHeaderColumn dataField='any' dataFormat={ this.showLayout } width="150"> </TableHeaderColumn>
				        	</BootstrapTable>
		                  </center>
		                  <br />
		                </div>{/*features_items*/}
		              </div>
		            </div>
		          </div>
		        </section>
		        <footer id="footer">
			      	<FooterTop />
			      	<FooterBottom />
		      	</footer>
			</div>
		);
	}
}
export default SearchMitra;