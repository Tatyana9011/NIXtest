import { Container, Row } from 'react-bootstrap';
import CardGood from './CardGood';
import s from './CardWrap.module.css';
import PreviewCard from './PreviewCard/PreviewCard';

function CardWrap() {
  let cardGoods = [];

  for (let i = 0; i < 4; i++){
    cardGoods.push(<CardGood key={`cardGood - ${i}`} src={`../../../img/image-arr${i + 1}.png`}
        title={"Striped Long Sleeve"} descreption={'Red/Sky Blue'} price={'$119'} newGood={true} />)
  }

  return (
    <Container className="special-offers pt-5 pb-4 ">
      <PreviewCard/>
    <Row className="align-items-center mb-4 mt-4">
      <div className="col-9">
          <h2 className={s.sectionTitle}>New Arrival</h2>
      </div>
      <div className="col-3 d-flex justify-content-end">
          <a className={s.linkMore} href="true">View All</a>
      </div>
    </Row>
      <Row>
        {cardGoods}
      </Row>
  </Container>)
}
export default CardWrap;
