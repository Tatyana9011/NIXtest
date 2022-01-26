import { Col } from 'react-bootstrap';
import arrow from '../../../../../img/arrow.svg';
import s from '../../CardWrap.module.css';
import {NavLink} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setFilterGoodsData } from "../../../../../store/actions";

function Card({ classWrap, classh3, textH3, classP, textP, navLink, filter, values }) {
  const dispatch = useDispatch();
  return (
    <Col xl={6}>
      <div className={classWrap}>
        <h3 className={ classh3 }>{textH3}</h3>
        <p className={classP}>{textP}</p>
        <NavLink to={navLink} className={s.button} onClick={() => dispatch(setFilterGoodsData(filter, values))}>
          <span className={s.buttonText}>View all</span>
          <img src={arrow} alt="" className={s.buttonIcon}/>
        </NavLink>
      </div>
    </Col>);
}
export default Card;
