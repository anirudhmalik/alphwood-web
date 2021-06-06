import React,{useState} from 'react';
import './HorizontalCards.css';
import '../App.css';
import CardItem from './HorizontalCardItem';

function Cards() {
  const [id, setID] = useState(0);
  return (
    <>
    <div className='navbar'>
        <div className='navbar-container2'>
          <div className='navbar-logo'>
          <div className={id===0 ? 'nav-links-selected' : 'nav-links'}  onClick={()=>setID(0)} >
           {"CHAIR"}
          </div>
          </div>
          <div className='navbar-logo'>
          <div className={id===1 ? 'nav-links-selected' : 'nav-links'}  onClick={()=>setID(1)} >
           {"CABINET"}
          </div>
          </div>
          <div className='navbar-logo'>
          <div className={id===2 ? 'nav-links-selected' : 'nav-links'}  onClick={()=>setID(2)} >
           {"SOFA"}
          </div>
          </div>
          <div className='navbar-logo'>
          <div className={id===3 ? 'nav-links-selected' : 'nav-links'}  onClick={()=>setID(3)} >
           {"BENCH"}
          </div>
          </div>
      </div>
      </div>
      {id === 0 ?
     <div className='cards__wrapper2'>
     <CardItem
                src='images/img6.png'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Imported'
                path='/services'
              />
              <CardItem
                src='images/img7.png'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            <CardItem
                src='images/img8.png'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img9.png'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img10.png'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
          />
           <CardItem
                src='images/img11.png'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
          />
           <CardItem
                src='images/img12.png'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
        </div>
     
     : <></>}
     
    </>
  );
}

export default Cards;
