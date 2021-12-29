import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Card from './Card/Card';
import s from './CardWrap.module.css';

function CardWrap() {
  let cardGoods = [];

  for (let i = 0; i < 4; i++){
    cardGoods.push(
      <div key={`cardGoods - ${i}`} className="col-lg-3 col-sm-6">
        <a href="true" className={s.goodsCard}>
        <span className={s.label}>New</span>
          <img src={`../../../img/image-arr${i + 1}.png`}
            alt="image: Striped Long Sleeve" className={s.goodsImage} />
          <h3 className={s.goodsTitle}> Striped Long Sleeve</h3>
          <p className={s.goodsDescreption}>Red/Sky Blue</p>
          <span className={s.goodsPrice}>$119</span>
        </a>
      </div>
    )
  }
  
  return (
    <Container className="special-offers pt-5 pb-4 ">
      <Row className='mb-4'>
        <Card
          classWrap={`${s.card1} ${s.card} mb-4`}
          classh3={s.cardTitel}
          textH3 = {'Fashion Month Ready in Capital Shop'}
          classP={s.cardText}
          textP={'Bags & Acsessories & Lingerie & Sportswear & Beauty & Swimwear'}
        />
        <Card
          classWrap={`${s.card2} ${s.card} mb-4`}
          classh3={`${s.cardTitel} ${s.textLight}`}
           textH3 = {'Catch the Sun: Spring Break Styles From $5.99'}
          classP={`${s.cardText} ${s.textLight}`}
        textP={'Sweaters & Hoodies & Puffer Jackets & Coats and Jackets & Knit'}
        />
        <div className="col-xl-9 col-lg-6 mb-4 absolute">
          <div className={`${s.card3} ${s.card}`}>
            <span className={s.label}>Bestseller</span>
            <h3 className={`${s.cardTitel} ${s.large}`} >Poplin Top With Sleeve Bow</h3>
            <p className={`${s.cardText} ${s.large}`} >Poplin top with roll neckline, long sleeves</p>
            <a href="true" className={s.button}>
              <span className={s.buttonText}>$129</span>
              <span className={s.buttonText}>Shop now</span>
            </a>
          </div>
      </div>
      <div className="col-xl-3  col-lg-6 mb-4">
        <div className={`${s.card4} ${s.card}`}>
          <h3 className={`${s.cardTitel} ${s.textLight}`}>Printed Shirt with a Bow</h3>
          <p className={`${s.cardText} ${s.textLight}`}>Pink/Sky Blue/Yellow</p>
            <span className={s.cardPrice}>$129</span>
        </div>
      </div>
   </Row>
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
