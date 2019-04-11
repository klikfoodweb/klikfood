import React, { Component } from 'react';
import FooterTop from '../components/FooterTop';
import FooterBottom from '../components/FooterBottom';

class Disclaimer extends Component {
  componentWillMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
    <div>
      <section>
            <div className="container">
                  <div className="WordSection1">
                          <p className="MsoNormal"><b><span style={{fontSize: '12.0pt', lineHeight: '115%'}}>Disclaimer<br />
                              </span></b>(Pasal Sanggahan)</p>
                          <p className="MsoNormal">&nbsp;</p>
                          <p className="MsoNormal">Semua informasi di situs ini diterbitkan dengan itikad baik
                            dan untuk tujuan informasi umum saja. Klikfood.id tidak membuat jaminan
                            mengenai kelengkapan, keandalan dan keakuratan informasi ini. Setiap tindakan
                            yang Anda lakukan pada informasi yang Anda temukan di website ini, adalah
                            tanggungjawab Anda sendiri. Klikfood.id tidak bertanggungjawab atas segala
                            kerugian dan atau kerusakan yang timbul karena tindakan yang berkaitan dengan
                            penggunaan data / informasi yang disajikan Klikfood.id. </p>
                          <p className="MsoNormal">Dari website kami, Anda dapat mengunjungi situs-situs lain
                            dengan mengikuti hyperlink ke situs eksternal. Sementara kami berusaha untuk
                            memberikan hanya kualitas link ke situs yang berguna dan beretika, kami tidak
                            memiliki kontrol atas isi dan sifat situs tersebut. Link ke situs-situs lain
                            tidak menyiratkan rekomendasi untuk semua konten yang ditemukan disitus
                            tersebut. Pemilik situs dan konten dapat berubah tanpa pemberitahuan dan
                            mungkin terjadi sebelum kita memiliki kesempatan untuk menghapus link yang
                            mungkin telah 'rusak'.</p>
                          <p className="MsoNormal">Klikfood.id berhak untuk memuat, tidak memuat, mengedit,
                            dan/atau menghapus data/informasi yang disampaikan oleh pembaca atau pengguna.
                            Klikfood.id tidak bertanggungjawab atas tidak tersampaikannya data/informasi
                            yang dsiampaikan oleh pembaca/pengguna melalui berbagai jenis saluran
                            komunikasi (comments, email, sms, online form) karena faktor kesalahan teknis
                            yang tidak diduga-duga sebelumnya.</p>
                        </div>
            </div>
      </section>
    <FooterTop />
    <FooterBottom />
    </div>
    );
  }
}
export default Disclaimer;