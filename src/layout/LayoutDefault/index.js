import { Link, NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LayoutHome.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import footerLogo from "../../assets/images/footer-logo.png"
import singiel from "../../assets/images/footer_logo_signiel.png"
import city from "../../assets/images/footer_logo_city.png"
import l7 from "../../assets/images/footer_logo_l7.png"
import hotel from "../../assets/images/footer_logo_lottehotel.png"
import resort from "../../assets/images/footer_logo_resort.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
const LayoutDefault = () => {
  return (
    <>
      <header className="header">
        {/* <h1 className="header__logo">
          <Link to="/">Logo</Link>
        </h1> */}
        <div className="container">
          <ul className="header__menu">
            <li className="header__booking">
              <FaMagnifyingGlass />
              <NavLink to="/"
                style={() => {
                  return {
                    paddingLeft: 10,
                    fontWeight: 800,
                    color: "#998465",
                  };
                }}
              >BOOK</NavLink>
            </li>
            <li>
              <NavLink to="/restaurant">DINING</NavLink>
            </li>
            <li>
              <NavLink to="/hotel-offers">ƯU ĐÃI</NavLink>
            </li>
            <li>
              <NavLink to="/wedding-conference">LỄ CƯỚI & HỘI NGHỊ</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__rewards">
          Hotel rewards
        </div>
      </header>

      <Outlet />
      
      <div className="footer__brand">
        <div className="container">
          <div className="row">
              <div className="brand col-xxl-6">
                <img src={singiel}></img>
                <img src={city}></img>
                <img src={l7}></img>
                <img src={resort}></img>
              </div>
              <div className="social col-xxl-6"> 
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
                <FaSquareTwitter />
              </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__logo col-xxl-6">
              <img src={footerLogo}></img>
              <div class="footer__hotelName">
                <p>HOTEL LOTTE</p>
                <p>
                  30, EULJI-RO, JUNG-GU, SEOUL, KOREA, 04533
                </p>
              </div>
            </div>
            <div className="footer__Map col-xxl-6">
              <ul className="footer__list">
                <li>Ăn uống</li>
                <li>About us</li>
                <li>Về thương hiệu </li>
                <li>Giải thưởng</li>
                <li>Gallery ảnh</li>
              </ul>
              <ul className="footer__list">
                <li>Ăn uống</li>
                <li>About us</li>
                <li>Về thương hiệu </li>
                <li>Giải thưởng</li>
                <li>Gallery ảnh</li>
              </ul>
              <ul className="footer__list">
                <li>Ăn uống</li>
                <li>About us</li>
                <li>Về thương hiệu </li>
                <li>Giải thưởng</li>
                <li>Gallery ảnh</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__rules">
        <div className="container">
          <div className="row">
            <div className="footer__allet">
              <span>Chính sách bảo mật
              </span> 
              <span>
              Điều khoản sử dụng
              </span>
             <span>
             Quản lí cookie
             </span>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default LayoutDefault;