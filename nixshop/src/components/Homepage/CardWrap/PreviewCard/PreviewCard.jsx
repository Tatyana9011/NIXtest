import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Card from './Card/Card';
import s from '../CardWrap.module.css';

function PreviewCard() {
  return (
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
            <NavLink to="/goods" className={s.button}>
              <span className={s.buttonText}>$129</span>
              <span className={s.buttonText}>Shop now</span>
            </NavLink>
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
  );
}
export default PreviewCard;
