import React from 'react';
import './Cards.css';
import '../App.css';
import CardItem from './CardItem';
import styled from 'styled-components';
import { motion } from 'framer-motion';


 const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background: #f4921e;
  color: #fff;
  user-select: none;
}
`;


function Cards() {
  return (
    <>
    <div className='cards'>
      <h1>Featured Product</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.png'
              text='With Adjustable Seat Height, Head Support, Recline, Armrest'
              label='Leatherette Comfort'
              path='/services'
            />
            <CardItem
              src='images/img2.png'
              text='Primary material :Metal,  Velvet; Best for Living Room, Bed Room'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img6.png'
              text='Office use Adjustable Seat Height, Head Support, Recline'
              label='Executive'
              path='/services'
            />
            <CardItem
              src='images/img12.png'
              text='Experience comfort within your working environment'
              label='Comfort'
              path='/products'
            />
            <CardItem
              src='images/img10.png'
              text='Office chair with upholstery type: Mesh, Embossed, Cushion'
              label='Mesh Chair'
              path='/sign-up'
            />
          </ul>         
        </div>
      </div>
      </div>
      <div className='btn'>
        <Button
            whileHover={{ scale: 1.05,
             }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#ce7406',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Explore
          </Button>
      </div>
    </>
  );
}

export default Cards;
