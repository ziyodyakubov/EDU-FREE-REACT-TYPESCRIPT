import logo from "./../../assets/main-logo.svg";
import information from "./../../assets/more-info.svg";
import "./style.scss";
import "./../containers/container";

export default function Header(){
    return <header>
        <div className="container">
            <nav>
                <div className="footer-wrapper">
                <a href="#"><img src={logo} alt="main-logo" /></a>
                <ul className="footer-ul">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TENTANG KAMI</a></li>
                    <li><a href="#">KURSUS</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li className="blog-wrapper">
                        <p>BLOG</p>
                        <img src={information} alt="information-img" />
                    </li>
                    <li><button>Login</button></li>
                </ul>
                </div>
            </nav>
        </div>
    </header>
}