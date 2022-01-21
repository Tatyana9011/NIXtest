import s from './Cart.module.css';
import cart from '../../img/cart.svg';

const CartBtn = ({ showModal, count, addClass}) => {
  return (
    <div onClick={showModal}
      className={`${s.button} ${addClass === 'cart' ? s.cart : addClass === 'goodCart' ? s.goodCart : ''}`}>
            <img className={s.buttonIcon} src={cart} alt="icon: cart" />
            <span className={`${s.buttonText} ${s.cartCount}`}>{count > 0 ? count : ''}</span>
     </div>
  )
}
export default CartBtn;