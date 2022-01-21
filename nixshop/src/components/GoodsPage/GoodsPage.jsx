import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardGood from '../Homepage/CardWrap/CardGood';
import { useSelector } from 'react-redux';
import Paginator from '../comon/Paginator/Paginator';
import { countGoodsCart } from '../Functions/secondaryFunction';

function GoodsPage(props) {
  const filter = props.history.location.search.substring(10);
  let cardGoodsElem = [];
  const cardGoods = useSelector(state => state.goods[filter]);
  const dataCartGoods = useSelector(state => state.goods.dataCartGoods);

  for (let i = 0; i < cardGoods.length; i++){
      cardGoodsElem.push(
        <CardGood id={ cardGoods[i].id} key={`${cardGoods[i].id}`} src={`http://localhost:3000/db/${cardGoods[i].img}`}
          title={cardGoods[i].name} countGoods={countGoodsCart(dataCartGoods, cardGoods[i].id) }descreption={cardGoods[i].description} price={cardGoods[i].price} newGood={cardGoods[i].label} />
      )
  }
 const onPageChanged = (pageNamber) => {
    let { getUsersThunkCreator, pageSize } = this.props;
    getUsersThunkCreator(pageNamber, pageSize);
  }

    return (
      <Container className="special-offers  pb-4 ">
        <Row>
          {cardGoodsElem}
        </Row>
        <Paginator currentPage={1}
          totalItemsCount={cardGoods.length}
          pageSize={8}
          onPageChanged={onPageChanged}
         />
      </Container>
    );
}


export default GoodsPage;
