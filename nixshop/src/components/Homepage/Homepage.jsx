  import React from 'react';
  import CardWrap from './CardWrap/CardWrap';
import Footer from './Footer/Footer';
  import Head from './Head/Head';
import Slide from './Slide/Slide';

  function Homepage() {
    return (
      <div>
        <Head/>
        <Slide />
        <CardWrap />
        <Footer/>
      </div>
    );
  }

  export default Homepage;
