import "./style.scss";
import leftimage from "./../../../assets/section-3-img.png";

export default function tengtang(){
    return (
<section id="section-4" className='section-4'>
<div className="container">
  <div className="section-4-wrapper">
    <div className="title">
      <small>Tentang Kami</small>

      <h2>EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h2>

      <p>Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
    </div>

    <div className="img">
      <img src={leftimage} alt="" />
    </div>
  </div>
</div>
</section>
    )
}