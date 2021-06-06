import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';
import Navbar from '../Navbar';
import HorizontalCards from '../HorizontalCards'
import HorizontalCards3D from '../HorizontalCards3D'


function Home() {
 return (
    <>
      <ImageSlider slides={SliderData} />
      <Cards />
      <Navbar name={"Categories"} />
     <HorizontalCards />
     <HorizontalCards3D />
     
     <div className="bottom-container">
     <img
              className='bottom-logo'
              alt='Travel Image'
              src={'../images/logo.png'}
            />
     </div>
      <Footer />
    </>
  );
}

export default Home;
