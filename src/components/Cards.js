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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Imported'
              path='/services'
            />
            <CardItem
              src='images/img2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
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
