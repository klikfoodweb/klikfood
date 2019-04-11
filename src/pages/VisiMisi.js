import React, { Component } from 'react';
import FooterTop from '../components/FooterTop';
import FooterBottom from '../components/FooterBottom';

class VisiMisi extends Component {
  componentWillMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div>
        <div className="container">
            <div className="WordSection1">
              <p className="MsoNormal"><b><span style={{fontSize: '16.0pt', lineHeight: '106%'}}>&nbsp;</span></b></p>
              <h2 className="title text-center">VISI & MISI</h2>   
              <p className="MsoNormal"><b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>&nbsp;</span></b></p>
              <p className="MsoNormal"><b><span style={{fontSize: '14.0pt', lineHeight: '107%'}}>VISI</span></b></p>
              <p className="MsoNormal">Menjadi perusahaan terbaik di Indonesia di bidang <b><i>Order
                    Online Food and Meals On Demand</i> </b>serta <b><i>Online to Offline Business</i></b>
                yang berdampak luas serta bermanfaat untuk seluruh masyarakat Indonesia. </p>
              <p className="MsoNormal">&nbsp;</p>
              <p className="MsoNormal"><b><span style={{fontSize: '14.0pt', lineHeight: '107%'}}>MISI</span></b></p>
              <p className="MsoNormal">Memberikan solusi dalam hal kemudahan mendapatkan bahan
                pangan dan makanan bagi masyarakat, yang juga merupakan solusi bagi khalayak
                yang ingin berusaha / berwiraswasta mandiri dengan memiliki outlet sendiri
                dalam jaringan kemitraan dan pemasok klikfood.id</p>
              <p className="MsoNormal">&nbsp;</p>
            </div>
        </div>
    <FooterTop />
    <FooterBottom />
    </div>
    );
  }
}
export default VisiMisi;