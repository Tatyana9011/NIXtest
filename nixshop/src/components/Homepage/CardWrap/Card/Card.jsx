import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import arrow from '../../../../img/arrow.svg';
import s from '../CardWrap.module.css';

function Card({classWrap, classh3, textH3,classP,textP}) {
  return (
    <Col xl={6}>
      <div className={classWrap}>
        <h3 className={ classh3 }>{textH3}</h3>
        <p className={classP}>{textP}</p>
        <a href="true" className={s.button}>
          <span className={s.buttonText}>View al</span>
          <img src={arrow} alt="" className={s.buttonIcon}/>
        </a>
      </div>
    </Col>);
}
export default Card;
