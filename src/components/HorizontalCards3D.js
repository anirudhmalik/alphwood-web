import React from 'react';
import './HorizontalCards.css';
import '../App.css';
import CardItem from './HorizontalCardItem';
import { NikeCard } from './nikeCard'
import Chair1 from "../assets/3Dimages/img1.png";
import Chair2 from "../assets/3Dimages/img2.png";
import Chair3 from "../assets/3Dimages/img3.png";

function Cards() {
  return (
    <>
       <div className='cards'>
      <h1>Best Selling Products</h1>
      <div className='cards__container'>
      <div className='cards__wrapper'>
          <ul className='cards__items'>
              <NikeCard name={"office chair"}
                price={"600"}
                description={"buy it now"}
                imageUrl={Chair1}
                primaryColor={ "brown"}
                secondaryColor={"pink"}
              />
               <NikeCard name={"LOUNGE CHAIR"}
                price={"400"}
                description={"buy it now"}
                imageUrl={Chair2}
                primaryColor={ "#1d1f21"}
                secondaryColor={"#f4921e"}
              />
              <NikeCard name={"BOSS CHAIR"}
                price={"900"}
                description={"buy it now"}
                imageUrl={Chair3}
                primaryColor={ "orange"}
                secondaryColor={"grey"}
              />
        
              </ul>
        </div>
        </div>
        </div>
    </>
  );
}

export default Cards;
