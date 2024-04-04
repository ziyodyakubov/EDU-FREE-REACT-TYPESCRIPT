import "./style.scss"
import icon1 from "./../../../assets/icon-1.svg"
import icon2 from "./../../../assets/icon-2.svg"
import icon3 from "./../../../assets/icon-3.svg"
import icon4 from "./../../../assets/icon-4.svg"
import icon5 from "./../../../assets/icon-5.svg"



export default function Result(){

return(<section id="section-2" className='section-2'>
          <div className="container">
              <div className="section-2_wrapper">
                <div className="section-2_wrapper-left">
                    <div className="left-card">
                      <h2>21.000+</h2>
                      <p>Siswa terdaftar</p>
                    </div>

                    <div className="left-card">
                      <h2>100+</h2>
                      <p>Instruktur Ahli</p>
                    </div>

                    <div className="left-card">
                      <h2>150+</h2>
                      <p>Kursus Gratis</p>
                    </div>
                </div>

                <div className="section-2_wrapper-right">
                    <div className="right-card">
                      <img src={icon1} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                      <img src={icon2} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                    <img src={icon3} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                    <img src={icon5} alt="" />
                      <h2>LOREM</h2>
                    </div>

                    <div className="right-card">
                      <img src={icon4} alt="" />
                      <h2>LOREM</h2>
                    </div>


                </div>
              </div>
          </div>
</section>)}