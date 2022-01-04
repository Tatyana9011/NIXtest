import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardGood from '../Homepage/CardWrap/CardGood';

function GoodsPage() {
    let cardGoods = [];

    for (let i = 0; i < 12; i++){
      cardGoods.push(
        <CardGood key={`cardGoods - ${i}`} src={`../../../img/image-arr${i + 1}.png`}
          title={"Striped Long Sleeve"} descreption={'Red/Sky Blue'} price={'$119'} newGood={''} />
      )
  }

    return (
      <Container className="special-offers pt-5 pb-4 ">
        <Row>
          {cardGoods}
        </Row>
      </Container>
    );
  }

  export default GoodsPage;