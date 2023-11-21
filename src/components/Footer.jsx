import React from 'react';
import '../style/Footer.css';
import logo from '../assets/LifeSyncLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
  return(
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Seção do Logo e Copy */}
          <div className="col-md-3">
            <div className="footer-logo">
              <img src={logo} alt="Logo" width="250" />
              <p className="copy-text">Todos os direitos reservados &copy; 2023 LifeSync.</p>
            </div>
          </div>

          {/* Seção de Links */}
          <div className="col-md-2">
            <div className="footer-links">
              <h5>Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
          </div>

          {/* Seção de Contato */}
          <div className="col-md-2">
            <div className="footer-contact-info">
              <h5>Contato</h5>
              <p>Rua XYZ, 1 - Osasco, SP</p>
              <p>(11) 1234-5678</p>
              <p>contato@lifesync.com</p>
            </div>
          </div>

          {/* Seção de Redes Sociais */}
          <div className="col-md-2">
            <div className="footer-social">
              <h5>Redes Sociais</h5>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Seção de Newsletter */}
          <div className="col-md-3">
            <div className="footer-newsletter">
              <h5>Newsletter</h5>
              <p>Assine nossa newsletter para receber as últimas novidades.</p>
              <form action="#">
                <input type="email" placeholder="Seu e-mail" />
                <button type="submit">Inscrever-se</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
