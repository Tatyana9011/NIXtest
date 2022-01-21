import React from 'react';
import s from './Cart.module.css';

const Cart = ({ setData, hideModal, clearAllGoodsCart, totalPrice, rowCart }) => {

  return (
    <div className={s.modal} >
      <header className={s.modalHeader}>
        <h2 className={s.modalTitle}>Cart</h2>
        {setData.size ? <button onClick={clearAllGoodsCart} className={`${s.button} ${s.clearTable}`} >Clear oll</button> : ''}
        <button onClick={hideModal} className={s.modalClose}>x</button>
      </header>
      {setData.size ?
        <table className={s.cartTable}>
          <colgroup>
            <col className={s.colGoods} />
            <col className={s.colPrice} />
            <col className={s.colMinus} />
            <col className={s.colQty} />
            <col className={s.colPlus} />
            <col className={s.colTotalPrice} />
            <col className={s.colDelete} />
          </colgroup>
          <thead>
            <tr>
              <th>Good(s)</th>
              <th>Price</th>
              <th colSpan="3">Qty.</th>
              <th colSpan="2">Total</th>
            </tr>
          </thead>
          <tbody className={s.cartTableGoods}>
            {rowCart}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="5">Total:</th>
              <th className={s.cardTableTotal} colSpan="2">{totalPrice}$</th>
            </tr>
          </tfoot>
        </table>
        : <p>no products yet</p>}
      {setData.size ?
        <form className={s.modalForm} action="">
          <input className={s.modalInput} type="text" placeholder="Имя" name="nameCustomer" />
          <input className={s.modalInput} type="text" placeholder="Телефон" name="phoneCustomer" />
          <button className={`${s.button} ${s.cartBuy}`}>
            <span className={s.buttonText}>Checkout</span>
          </button>
        </form>
        : ''}
    </div>

  )
}

export default Cart;