import "./Footer.css";
import img from "./img.png";
import ic_send from "./ic_send.png"
import LogoFooter from "./LogoFooter.png"
import Footerbg from "./Footerbg.png"
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterSquare } from 'react-icons/ai'
export default function Footer() {
    return (
        <div className="footer">
        <img src={Footerbg} className="footer-bg" />
        <Container>
          <div className="footer-content">
            <div className="footer_CTA">
              <div className="logo_phone">
              <img src={LogoFooter} className="Logo_phone"/>
              </div>
              <div className="footer_list">
                <h3>Join our list</h3>
                <div className="list_input">
                  <input type="Your Email" placeholder="Your Email" className="input_ed" />
                  <button><img src={ic_send} /></button>
                </div>
              </div>
              <div className="footer_img">
                <img src={img} className="img_edit"/>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="footer_address">
              <div className="footer_logo">
                <img src={LogoFooter} />
              </div>
              <div className="address_info">
                <p>Tipo Figure is the best place for buy figure.</p>
                <p>8387 East Mayfield Ave. Antioch,</p>
                <p>CA 94509</p>
              </div>
            </div>
             <div className="footer_menu">
              <div className="menu_info">
                <div className="info_1">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shops</Link>
                  <Link to="/Contact">Contact</Link>
                </div>
                <div className="info_1">
                  <a href="#">Terms and Conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookie Policy</a>
                </div>
                <div className="info_2">
                  <span className="social">Socials</span>
                  <div className="social-icons">
                    <Link to="https://www.facebook.com" className="in"><ImFacebook2 /></Link>
                    <Link to="https://www.instagram.com" className="in"><BsInstagram /></Link>
                    <Link to="https://www.twitter.com" className="in"><AiFillTwitterSquare /></Link>
                  </div>
                </div>
                </div>
            </div>
          </div> 
          
        </Container>
        <span className="copy_right">Copyright © 2022 Tipo. Powered by Tri </span>
      </div>
      
    )
}