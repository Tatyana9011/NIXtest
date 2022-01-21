import {  NavLink } from 'react-bootstrap';
import s from './CardWrap.module.css';
import { useDispatch } from 'react-redux';
import { addGoodCart } from '../../../store/actions';
import CartBtn from '../../Cart/CartBtn';

function CardGood({id, src, title, descreption, price, newGood, countGoods}) {

  const dispatch = useDispatch();

  return (
    <div className="col-lg-3 col-sm-6" >
      <NavLink to="/home" className={s.goodsCard}>
        <div className={s.labelGoodsCard}>
          {(newGood !== '') ? <span className={s.label}>{newGood} </span> : ''}
          <div onClick={() => dispatch(addGoodCart(id))} >
            <CartBtn count={countGoods} addClass={'goodCart'} />
          </div>
        </div>
        <img src={src} onClick={()=>dispatch(addGoodCart(id))} alt={`image: ${title}`} className={s.goodsImage} />
        <h3 className={s.goodsTitle}> {title} </h3>
        <p className={s.goodsDescreption}>{descreption}</p>
        <span onClick={()=>dispatch(addGoodCart(id))} className={s.goodsPrice}>${price}</span>
      </NavLink>
    </div>);
}
export default CardGood;
