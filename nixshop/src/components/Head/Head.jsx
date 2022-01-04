import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import exit from '../../img/logout.png';
import s from './Head.module.css';
import { Container, Row, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Head({btnDisplayNone, isAuth}) {
  console.log('isAuth: ', isAuth);
  console.log('btnDisplayNone: ', btnDisplayNone);

  return (
    <Container  className={`${s.header} px-4 px-md-0`}>
    <Row className="justify-content-between align-items-center">
      <div className="col-lg-2 col-6">
          <Nav.Link href="/home" className={s.logoLink}>
            <img width="128" src={logo} alt="logo:Willberries" className={s.logoImage}/>
          </Nav.Link>
      </div>
      <div className="col-lg-6 d-none d-lg-block align-items-center">
        <Nav className={ `${s.navigation} d-flex justify-content-around align-items-center`}>
            <Nav.Item>
              <NavLink to="/goods" className={s.navigationLink} data-gender="Womens">WOMENS</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods" className={s.navigationLink} data-gender="Mens">MENS</NavLink>
            </Nav.Item>
            <Nav.Item >
              <NavLink to="/goods" className={s.navigationLink} data-category="Clothing">GOODS</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods" className={s.navigationLink}data-category="Accessories">ACCESSORIES</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods" className={s.navigationLink}>BRENDS</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/blog" className={s.navigationLink}>BLOG</NavLink>
            </Nav.Item>
        </Nav>
        </div>
        
        {isAuth ?
            <div className="col-lg-3 col-6 d-flex justify-content-end">
            <NavLink to="/cart" className={`${s.button}`}>
                <img className={s.buttonIcon} src={cart} alt="icon: cart" />
                <span className={s.buttonText}>Cart</span>
              </NavLink>
              <NavLink to="/home" className={`${s.button}`}>
                <img className={`${s.buttonIcon} ${s.buttonExit}`} src={exit} alt="icon: exit"/>
                <span className={s.buttonText}>Log out</span>
              </NavLink>
          </div> : !btnDisplayNone ?
            <div className="col-lg-3 col-6 d-flex justify-content-end">
              <NavLink to="/login" className={`${s.button}`}>
                <img className={`${s.buttonIcon} ${s.buttonExit}`} src={exit} alt="icon: exit"/>
                <span className={s.buttonText}>Log in</span>
              </NavLink>
          </div> : "" 
        }
    </Row>
    </Container>
  )
}
  export default Head;