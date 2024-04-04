import sectionmain from "./../../../assets/section-1-asosiy.png"
import "./style.scss"



export default function intro(){

return (
<section id="section-1" className="section-1">
<div className="container">
  <div className="section-1_wrapper">
    <div className="section-1_wrapper-title">
      <h2>Bangun dan Wujudkan Cita Bersama EDUFREE</h2>

      <p>EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online
        yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>

      <div className="buttons-wrapper">
        <button className="kursu">Lihat Kursus</button>
        <button className='lihat'>Lihat Alur Belajar <i className='bx bx-right-arrow-alt'></i></button>
      </div>
    </div>

    <div className="section-1_wrapper-img">
      <img src={sectionmain} alt="" />
    </div>
  </div>
</div>
</section>)

}