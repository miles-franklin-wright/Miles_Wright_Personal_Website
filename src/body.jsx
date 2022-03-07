import React from 'react';
import Header from './header_and_footer/header.jsx';
import Footer from './header_and_footer/footer.jsx';
import Landing from './/landing_components/landing.jsx';

function Body() {
  return(
    <div>
      body
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default Body;