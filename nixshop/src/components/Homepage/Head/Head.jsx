import logo from '../../../img/logo.svg';
import cart from '../../../img/cart.svg';
import exit from '../../../img/logout.png';
import s from './Head.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Nav} from 'react-bootstrap';

function Head() {
  return (
    <Container  className={`${s.header} px-4 px-md-0`}>
    <Row className="justify-content-between align-items-center">
      <div className="col-lg-2 col-6">
        <a href="true" className="logo-link">
          <img width="128" src={logo} alt="logo:Willberries" className="logo-image"/>
        </a>
      </div>
      <div className="col-lg-6 d-none d-lg-block align-items-center">
        <Nav className={ `${s.navigation} d-flex justify-content-around align-items-center`}>
            <Nav.Item>
              <Nav.Link href="/home" className={s.navigationLink}>WOMENS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={s.navigationLink}>MENS</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/home" className={s.navigationLink}>GOODS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={s.navigationLink}>ACCESSORIES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={s.navigationLink}>BRENDS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className={s.navigationLink}>BLOG</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
        <div className="col-lg-3 col-6 d-flex justify-content-end">
         
        <Nav.Link href="true" className={`${s.button}`}>
          <img className={s.buttonIcon} src={cart} alt="icon: cart"/>
          <span className={s.buttonText}>Cart</span>
        </Nav.Link>
        <Nav.Link href="true" className={`${s.button}`}>
          <img className={`${s.buttonIcon} ${s.buttonExit}`} src={exit} alt="icon: exit"/>
          <span className={s.buttonText}>Log in</span>
        </Nav.Link>
      </div>
    </Row>

    </Container>
  )
}
  export default Head;