import logo from '../../img/logo.svg';
import exit from '../../img/logout.png';
import s from './Head.module.css';
import CartBtn from '../Cart/CartBtn';
import { Container, Row, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Head({ btnDisplayNone,
  loginIn, showModal,
  count, btnShow,
  authOutUserRememberMy,
  setFilterGoodsData, values}) {

  return (
    <Container  className={`${s.header} px-4 px-md-0`} >
      <Row className="justify-content-between align-items-center" id="up">
      <div className="col-lg-2 col-6">
          <NavLink to="/home"
            onClick={() => setFilterGoodsData('label', "New")}
            className={s.logoLink}>
            <img width="128" src={logo} alt="logo:Willberries" className={s.logoImage}/>
          </NavLink>
      </div>
      <div className="col-lg-6 d-none d-lg-block align-items-center">
        <Nav className={ `${s.navigation} d-flex justify-content-around align-items-center`}>
            <Nav.Item>
              <NavLink to="/goods?category=Womens"
                onClick={() => setFilterGoodsData('gender', "Womens")}
                className={s.navigationLink} >WOMENS</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods?category=Mens"
                onClick={() => setFilterGoodsData('gender', "Mens")}
                className={s.navigationLink} > MENS </NavLink>
            </Nav.Item>
            <Nav.Item >
              <NavLink to="/goods?category=Clothing"
                onClick={() => setFilterGoodsData('category', "Clothing")} 
                className={s.navigationLink} >Clothin</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods?category=Accessories"
                onClick={() => setFilterGoodsData('category', "Accessories")}
                className={s.navigationLink} > ACCESSORIES</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/goods?category=Shoes"
                onClick={() => setFilterGoodsData('category', "Shoes")}
                className={s.navigationLink}>Shoes</NavLink>
            </Nav.Item>
            <Nav.Item >
              <NavLink to="/goods?category=goods"
                onClick={() => setFilterGoodsData('')}
                className={s.navigationLink}>All</NavLink>
						</Nav.Item>
        </Nav>
        </div>
        
        {loginIn && btnShow ?
          <CartBtn showModal={showModal} addClass={'cart'} count={count}/> : ""
        }

        {(!btnDisplayNone && loginIn) ? 
          <div className="col-lg-3 col-6 d-flex justify-content-end">
            <CartBtn showModal={showModal} addClass={''} count={count} />
            <NavLink to="/login" className={`${s.button} nav-link`}>
              <img className={`${s.buttonIcon} ${s.buttonExit}`} src={exit} alt="icon: exit" />
              <span className={s.buttonText}>Log out</span>
            </NavLink>
          </div> : (!btnDisplayNone && !loginIn) ?
          <div className="col-lg-3 col-6 d-flex justify-content-end">
            <NavLink onClick={() => authOutUserRememberMy()} to="/login" className={`${s.button} nav-link`}>
              <img className={`${s.buttonIcon} ${s.buttonExit}`} src={exit} alt="icon: exit" />
              <span className={s.buttonText}>Log in </span>
            </NavLink>
          </div> : ""
        }
    </Row>
    </Container>
  )
}
  export default Head;