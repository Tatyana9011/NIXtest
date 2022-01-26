import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardGood from '../CardGood/CardGood';
import { getGoodsFilterThunkCreator } from '../../store/effects';
import { setFilterGoodsData } from '../../store/actions';
import Paginator from '../comon/Paginator/Paginator';
import { countGoodsCart } from '../Functions/secondaryFunction';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';


class GoodsPage extends React.Component {
  constructor() {
    super();
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  onPageChanged (pageNumber) {
    const { pageSize, filter, values } = this.props;
    this.props.getGoodsFilterThunkCreator(pageSize, pageNumber, filter, values);
  }
  componentDidMount() {
    const { currentPage, pageSize, filter, values } = this.props;
    this.props.getGoodsFilterThunkCreator( pageSize, currentPage, filter, values);
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter ||
      this.props.values !== prevProps.values) {
      const { currentPage, pageSize, filter, values } = this.props;
      this.props.getGoodsFilterThunkCreator( pageSize, currentPage, filter, values);
    }
  }
  
  render() {
    return (
      <Container className="special-offers  pb-4 ">
        <Row>
          {
            this.props.cardGoods.map(card =>{
              return (<CardGood
                key={card.id} 
                id={card.id}
                src={`http://localhost:3000/db/${card.img}`}  
                title={card.name}
                countGoods={countGoodsCart(this.props.dataCartGoods, card.id)}
                descreption={card.description}
                price={card.price}
                newGood={card.label}
              />)
            })
          }
        </Row>
        <Paginator currentPage={this.props.currentPage}
          totalItemsCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
         />
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  dataCartGoods: state.goods.dataCartGoods,
  currentPage: state.goods.currentPage,
  pageSize: state.goods.pageSize,
  filter: state.goods.filter,
  cardGoods: state.goods.goods,
  totalCount: state.goods.totalCount,
  values: state.goods.values,
})

let mapDispatchToProps = (dispatch) => {
  return {
    getGoodsFilterThunkCreator: (pageSize, currentPage, filter, value) => dispatch(getGoodsFilterThunkCreator(pageSize, currentPage, filter, value)),
    setFilterGoodsData:(filter)=>dispatch(setFilterGoodsData(filter))
  }
}

const GoodsPageContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
  )(GoodsPage);
  
export default GoodsPageContainer;
