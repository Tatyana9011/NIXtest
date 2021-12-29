import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Nav } from 'react-bootstrap';
import s from './Footer.module.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <Row>
          <div className="col-xl-7 mb-4 mb-xl-0">
            <Nav>
              <ul className={`${s.footerMenu} d-sm-flex`}>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>Shop</a></li>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>About Us</a></li>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>Careers</a></li>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>FAQ</a></li>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>Blog</a></li>
                <li className={s.footerMenuItem}><a href="true" className={s.footerMenuLink}>Contacts</a></li>
              </ul>
            </Nav>
          </div>
          <div className="col-lg-3 d-flex align-items-center">
            <span className={s.footerText}>Follow Us</span>
            <span className={`${s.footerSocial} d-inline-flex align-items-center`}>
              <a href="true" className={s.socialLink}><img src="../../../img/Facebook.svg" alt="Facebook"/></a>
              <a href="true" className={s.socialLink}><img src="../../../img/Twitter.svg" alt="Twitter"/></a>
              <a href="true" className={s.socialLink}><img src="../../../img/Instagram.svg" alt="Instagram"/></a>
            </span>
          </div>
          <div className="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
            <span className={s.footerText}>© 2019 Universal UI Kit</span>
          </div>
        </Row>
        <hr className={`${s.footerLine} mt-4 mb-4`}/>
        <Row className="justify-content-between">
          <div className="col-lg-4 col-sm-9">
            <img className={s.paymentLogo} src="../../../img/VISA.png" alt="VISA"/>
            <img className={s.paymentLogo} src="../../../img/MasCard.png" alt="MasCard"/>
            <img className={s.paymentLogo} src="../../../img/PayPal.png" alt="PayPal"/>
            <img className={s.paymentLogo} src="../../../img/bitcoin.png" alt="bitcoin"/>
          </div>
          <div className="col-lg-2 col-sm-3 d-flex justify-content-end">
            <a href="true" className={`${s.topLink} d-flex align-items-center`}>
              <span className={s.topLinkText}>Top</span>
              <img src="../../../img/top.svg" alt="top"/>
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;