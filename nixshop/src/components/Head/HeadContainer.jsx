
import React from 'react';
//import { compose } from 'redux';
import { connect } from 'react-redux';
//import  { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Head from './Head';

const HeadContainer = (props) => {

  return (
    <div>
      <Head btnDisplayNone={props.btnDisplayNone} isAuth={ props.isAuth}/>
    </div>)

}

const mapStateToProps = (state) => ({
    btnDisplayNone: state.login.btnDisplayNone,
    isAuth: state.login.isAuth
});

export default connect(mapStateToProps,{})(HeadContainer);
