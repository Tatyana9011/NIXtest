import { Col } from 'react-bootstrap';
import arrow from '../../../../../img/arrow.svg';
import s from '../../CardWrap.module.css';
import {NavLink} from 'react-router-dom';

function Card({classWrap, classh3, textH3,classP,textP,navLink}) {
  return (
    <Col xl={6}>
      <div className={classWrap}>
        <h3 className={ classh3 }>{textH3}</h3>
        <p className={classP}>{textP}</p>
        <NavLink to={navLink} className={s.button}>
          <span className={s.buttonText}>View all</span>
          <img src={arrow} alt="" className={s.buttonIcon}/>
        </NavLink>
      </div>
    </Col>);
}
export default Card;
