import React from 'react';
import { NavLink } from 'react-bootstrap';
import s from './CardGood.module.css';
import { useDispatch } from 'react-redux';
import { addGoodCart} from '../../store/actions';
import CartBtn from '../Cart/CartBtn';

function CardGood({id, src, title, descreption, price, newGood, countGoods}) {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-3 col-sm-6" >
      <NavLink to="/home" className={s.goodsCard}>
        <div className={s.labelGoodsCard}>
          {(newGood !== '') ? <span className={s.label}>{newGood} </span> : ''}
          <div>
            <CartBtn count={countGoods} addClass={'goodCart'} id={id} />
          </div>
        </div>
        <img src={src} alt={`image: ${title}`} className={s.goodsImage} />
        <h3 onClick={()=>dispatch(addGoodCart(id))} className={s.goodsTitle}> {title} </h3>
        <p className={s.goodsDescreption} onClick={()=>dispatch(addGoodCart(id))} >{descreption}</p>
        <span onClick={()=>dispatch(addGoodCart(id))} className={s.goodsPrice}>${price}</span>
      </NavLink>
    </div>);
}
export default CardGood;
