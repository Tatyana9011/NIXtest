// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import React from 'react';
import 'swiper/css';
import s from './SwiperSlideComponent.module.css';
import { Container, Row, Col, Button} from 'react-bootstrap';




SwiperCore.use([Navigation]);

function SwiperSlideComponent (){
  const slides = [];
  
  for (let i = 0; i < 3; i++){
    slides.push(
      <SwiperSlide key={`slide-${ i }`}>
       <section className={ `${s.slide1} ${s.slide}`}>
				<Container>
					<Row>
						<Col className='col-lg-4 col-10 offset-lg-1 justify-content-start align-items-start' >
							<span className={s.label}>Bestseller</span>
							<h2 className={s.slideTitle}>Women's Alpargata Loafer</h2>
							<p className={s.slideDescription}>At Alpa believe in a better tomorrow, one where humanity thrives.</p>
                <Button className={s.button} id="add-to-cart" data-id={`${i+1}00`}>
								<span className={s.buttonPrice}>$219</span>
                <span className={s.buttonText}>Shop now</span>
              </Button>
						</Col>
					</Row>
				</Container>
			</section>
      </SwiperSlide>
    )
  }
  return ( <Swiper
      className={s.slider}
      id='main' tag='section'
      navigation
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides}
    </Swiper>
 );
};

export default SwiperSlideComponent;
