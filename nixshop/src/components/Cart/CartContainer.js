import React from 'react';
import s from './Cart.module.css';
import Cart from './Cart';
import { connect } from 'react-redux';
import { addGoodCart, decrementGoodCart, showModal, hideModal, deleteGoodCart, clearAllGoodsCart } from '../../store/actions';
import RowGoodCart from './RowGoodCart';

const CartContainer = (props) => {
  let rowCart = [];
  const setData = new Set(props.dataCartGoods);

  const goodCount = (data, id) => {
    let count = 0;
    data.forEach(item => {
      if (item.id === id) {
        count++;
      }
    });
    return count;
  };

  const totalPrice = props.dataCartGoods.reduce((sum, item) => {
    return sum + parseInt(item.price);
  }, 0);

  const closeModal = (event) => {
    if (!event.target.closest(`.${s.modal}`)) {
      props.hideModal();
    }
  };

  if (setData.size) {
    setData.forEach(item => {
      rowCart.push(<RowGoodCart
        key={`cart ${item.id + Math.random(props.dataCartGoods.length)}`}
        increment={props.increment}
        decrement={props.decrement}
        deleteGoodCart={props.deleteGoodCart}
        price={item.price}
        name={item.name}
        count={goodCount(props.dataCartGoods, item.id)}
        id={item.id}
      />)
    });
  };



  return (
    <div onClick={closeModal} className={`${s.overlay} ${props.show ? s.show : ''}`}>
      <Cart
        setData={setData}
        rowCart={rowCart}
        hideModal={props.hideModal}
        count={props.count}
        clearAllGoodsCart={props.clearAllGoodsCart}
        totalPrice={totalPrice}
      />
    </div >
  )
}

const mapStateToProps = (state) => ({
  show: state.cart.show,
  dataCartGoods: state.goods.dataCartGoods,
});

let mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => { dispatch(addGoodCart(id)) },
    decrement: (id) => { dispatch(decrementGoodCart(id)) },
    hideModal: () => { dispatch(hideModal()) },
    showModal: () => { dispatch(showModal()) },
    clearAllGoodsCart: () => { dispatch(clearAllGoodsCart()) },
    deleteGoodCart: (id) => { dispatch(deleteGoodCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

