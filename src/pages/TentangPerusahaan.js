import React, { Component } from 'react';
import FooterTop from '../components/FooterTop';
import FooterBottom from '../components/FooterBottom';

class TentangPerusahaan extends Component {
  componentWillMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
    <div>
        <div className="container">
			<div className="WordSection1">
			<p className="MsoNormal"><b><span style={{fontSize: '16.0pt', lineHeight: '106%'}}>&nbsp;</span></b></p>
			<h2 className="title text-center">TENTANG PT. DISTRA BOGA SARANA</h2>
			<p className="MsoNormal"><b><span style={{fontSize: '16.0pt', lineHeight: '106%'}}>&nbsp;</span></b></p>
			<p className="MsoNormal"><b><span style={{fontSize: '14.0pt', lineHeight: '106%'}}>www.klikfood.id</span></b></p>
			<p className="MsoNormal"><span style={{color: '#404040'}}>Adalah merek dagang dari PT. Distra
			    Boga Sarana yang bergerak di bidang bisnis <i>Order Online Food and Meals On
			      Demand</i> untuk public dengan berbasis jaringan kemitraan dan partnership. Selain
			    itu, merek dagang kami yang lain adalah <i>Thai Addict Resto</i> yang berada di
			    beberapa lokasi di Jakarta Selatan dan Jakarta Pusat. </span></p>
			<p className="MsoNormal"><span style={{color: '#404040'}}>&nbsp;&nbsp;<br />
			    PT. Distra Boga Sarana merupakan salah satu dari anak usaha dari perusahaan PT.
			    Andalan Bangun Perkasa (ASA Group) yang merupakan group usaha korporasi <i>(Holding
			      Company) </i>dengan bisnis inti <i>(Core Business) </i>property.</span></p>
			<p className="MsoNormal">&nbsp;</p>
			<p className="MsoNormal">&nbsp;</p>
			</div>
        </div>
    <FooterTop />
    <FooterBottom />
    </div>
    );
  }
}
export default TentangPerusahaan;