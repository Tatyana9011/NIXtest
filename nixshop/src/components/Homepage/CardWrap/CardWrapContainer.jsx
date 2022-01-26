import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import CardGood from '../../CardGood/CardGood';
import s from './CardWrap.module.css';
import PreviewCard from './PreviewCard/PreviewCard';
import { countGoodsCart } from '../../Functions/secondaryFunction';
import { getGoodsFilterThunkCreator } from '../../../store/effects';
import { setFilterGoodsData } from '../../../store/actions';
import { connect } from 'react-redux';


class CardWrap extends React.Component {
  constructor() {
    super();
    this.viewOllNewGoods = this.viewOllNewGoods.bind(this);
  }
  componentDidMount() {
    const {filter, values } = this.props;
    this.props.setFilterGoodsData('label', "New");
    this.props.getGoodsFilterThunkCreator(4, 1, filter, values);
  }

  viewOllNewGoods() {
    const { filter, values, totalCount } = this.props;
    this.props.getGoodsFilterThunkCreator(totalCount, 0, filter, values);
  }

    render() {
      return (
        <Container className="special-offers pt-5 pb-4 ">
          <PreviewCard />
          <Row className="align-items-center mb-4 mt-4">
            <div className="col-9">
              <h2 className={s.sectionTitle}>New Arrival</h2>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <Nav.Link onClick={this.viewOllNewGoods} className={s.linkMore} >View All</Nav.Link>
            </div>
          </Row>
          <Row>
            {
              this.props.cardGoods.map(cardGood => {
                return (
                  <CardGood id={cardGood.id} key={`${cardGood.id}`} src={`http://localhost:3000/db/${cardGood.img}`}
                    title={cardGood.name} countGoods={this.props.countGoodsCart(this.props.dataCartGoods, cardGood.id)}
                    descreption={cardGood.description} price={cardGood.price} newGood={cardGood.label} />
                );
              })
            }
          </Row>
        </Container>)
    }
}

const mapStateToProps = (state) => ({
  cardGoods: state.goods.goods,
  totalCount: state.goods.totalCount,
  dataCartGoods: state.goods.dataCartGoods,
  filter: state.goods.filter,
  values: state.goods.values,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterGoodsData: (filter, values) => dispatch(setFilterGoodsData(filter, values)),
    getGoodsFilterThunkCreator: (pageSize, page, filter, value) => dispatch(getGoodsFilterThunkCreator(pageSize, page, filter, value)),
    countGoodsCart:  (dataCart, id) => countGoodsCart(dataCart, id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrap);
