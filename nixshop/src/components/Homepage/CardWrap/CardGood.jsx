import {  NavLink } from 'react-bootstrap';
import s from './CardWrap.module.css';

function CardGood({src,title, descreption, price, newGood}) {
  return (
    <div className="col-lg-3 col-sm-6" >
      <NavLink to="/home" className={s.goodsCard}>
        { {newGood} ? <span className={s.label}>New</span> : ''}
        <img src={src} alt={`image: ${title}`} className={s.goodsImage} />
        <h3 className={s.goodsTitle}> {title} </h3>
        <p className={s.goodsDescreption}>{descreption}</p>
        <span className={s.goodsPrice}>{price}</span>
      </NavLink>
    </div>);
}
export default CardGood;
