import { Container, Row } from 'react-bootstrap';
import CardGood from './CardGood';
import s from './CardWrap.module.css';
import PreviewCard from './PreviewCard/PreviewCard';
import {useSelector}  from 'react-redux';
import { NavLink } from 'react-router-dom';
import { countGoodsCart } from '../../Functions/secondaryFunction';
function CardWrap() {
  const cardGoods = useSelector(state => state.goods.goodsNew);
  const dataCartGoods = useSelector(state => state.goods.dataCartGoods);

  let cardGoodsElem = [];
  
  for (let i = 0; i < cardGoods.length; i++){
      cardGoodsElem.push(
        <CardGood id={ cardGoods[i].id} key={`${cardGoods[i].id}`} src={`http://localhost:3000/db/${cardGoods[i].img}`}
          title={cardGoods[i].name} countGoods={countGoodsCart(dataCartGoods, cardGoods[i].id) } descreption={cardGoods[i].description} price={cardGoods[i].price} newGood={cardGoods[i].label} />
      )
  }
 
  return (
    <Container className="special-offers pt-5 pb-4 ">
      <PreviewCard/>
    <Row className="align-items-center mb-4 mt-4">
      <div className="col-9">
          <h2 className={s.sectionTitle}>New Arrival</h2>
      </div>
        <div className="col-3 d-flex justify-content-end">
          <NavLink to="/goods?category=goods" className={s.linkMore} >View All</NavLink>
      </div>
    </Row>
      <Row>
        {cardGoodsElem}
      </Row>
  </Container>)
}
export default CardWrap;
