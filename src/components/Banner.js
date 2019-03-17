import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliders: [],
		}
	}

	componentWillMount() {
		axios.get(`http://35.243.170.33/index.php/slider`)
		  .then((response) => {
		  	console.log(response.data.data)
		  	this.setState({
		  		sliders: response.data.data
		  	})
		  }).catch((error) => {
		  	console.log(error)
		  })
	}

	testclick = (e) => {
		console.log(this.state.sliders)
	}

	render() {
		return (
			<div>
				<section id="slider">{/*slider*/}
				  <div className="container">
				    <div className="row">
				      <div className="col-sm-12">
				        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
				          <ol className="carousel-indicators">
				          	{
				          		this.state.sliders.map((item,i) => 
				          			(i === 0) 
				          				? 
					          			<React.Fragment>
					          				<li key={i} data-target="#slider-carousel" data-slide-to={i} className="active" />
					          			</React.Fragment>
					          			: 
					          			<React.Fragment>
					          				<li key={i} data-target="#slider-carousel" data-slide-to={i} />
				          				</React.Fragment>
				          		)
				          	}
				            </ol>
				          <div className="carousel-inner">
				          {
				          		this.state.sliders.map( (slider,i) => 
							        (i === 0) ? 
				          			<React.Fragment>
							            <div className="item active">
							              <div className="col-sm-6">
							                {/*<img src="images/home/pricing.png" className="pricing" alt />*/}
							                <h1><span>{slider.judul}</span></h1>
							                <h2>{slider.subjudul}</h2>
							                <p>{slider.keterangan} </p>
							                <center><Link to="/search-mitra"><button type="button" className="btn btn-default get">Beli Sekarang</button></Link></center><br />
							              </div>
							              <div className="col-sm-6">
							                <Link to="/search-mitra"><img src={"http://35.243.170.33/uploads/slider/"+slider._id+"/"+slider.image} className="girl img-responsive" alt /></Link>
							              </div>
							            </div>
						        	</React.Fragment>
						        	: 
						        	<React.Fragment>
						        		<div className="item">
							              <div className="col-sm-6">
							                {/*<img src="images/home/pricing.png" className="pricing" alt />*/}
							                <h1><span>{slider.judul}</span></h1>
							                <h2>{slider.subjudul}</h2>
							                <p>{slider.keterangan} </p>
							                <center><Link to="/search-mitra"><button type="button" className="btn btn-default get">Beli Sekarang</button></Link></center><br />
							              </div>
							              <div className="col-sm-6">
							                <Link to="/search-mitra"><img src={"http://35.243.170.33/uploads/slider/"+slider._id+"/"+slider.image} className="girl img-responsive" alt /></Link>
							              </div>
							            </div>
						       		</React.Fragment>
						        )
						    }
				          </div>
				          <a href="#slider-carousel" onClick={this.testclick} className="left control-carousel hidden-xs" data-slide="prev">
				            <i className="fa fa-angle-left" />
				          </a>
				          <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
				            <i className="fa fa-angle-right" />
				          </a>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>{/*/slider*/}
			</div>
		);
	}
}
export default Banner;