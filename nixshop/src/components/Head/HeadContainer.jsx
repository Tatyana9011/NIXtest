
import React from 'react';
//import { compose } from 'redux';
import { connect } from 'react-redux';
//import  { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Head from './Head';
import { showModal, authOutUserRememberMy } from '../../store/actions';

const HeadContainer = (props) => {

  return (
    <div>
      <Head
        btnDisplayNone={props.btnDisplayNone}
        logonIn={props.logonIn}
        showModal={props.showModal}
        count={props.dataCartGoods.length}
        btnShow={props.btnShow}
        authOutUserRememberMy={props.authOutUserRememberMy}
      />
    </div>)

}

const mapStateToProps = (state) => ({
  btnDisplayNone: state.isAuth.btnDisplayNone,
  logonIn: state.isAuth.logonIn,
  dataCartGoods: state.goods.dataCartGoods,
  btnShow:state.cart.btnTopShow,
});
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(showModal()),
    authOutUserRememberMy: () => dispatch(authOutUserRememberMy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadContainer);
