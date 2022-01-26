
import React from 'react';
import { connect } from 'react-redux';
import Head from './Head';
import { showModal, authOutUserRememberMy, setFilterGoodsData } from '../../store/actions';

const HeadContainer = (props) => {

  return (
    <div>
      <Head
        values={props.values}
        btnDisplayNone={props.btnDisplayNone}
        loginIn={props.loginIn}
        showModal={props.showModal}
        count={props.dataCartGoods.length}
        btnShow={props.btnShow}
        authOutUserRememberMy={props.authOutUserRememberMy}
        props={props}
        setFilterGoodsData={props.setFilterGoodsData}
      />
    </div>)

}

const mapStateToProps = (state) => ({
  btnDisplayNone: state.isAuth.btnDisplayNone,
  loginIn: state.isAuth.loginIn,
  dataCartGoods: state.goods.dataCartGoods,
  btnShow: state.cart.btnTopShow,
  values:state.goods.values,
});
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(showModal()),
    authOutUserRememberMy: () => dispatch(authOutUserRememberMy()),
    setFilterGoodsData: (filter,values) => dispatch(setFilterGoodsData(filter,values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadContainer);
