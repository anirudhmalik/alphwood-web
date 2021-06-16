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
           {"OTTOMAN"}
          </div>
          </div>
      </div>
      </div>
      {id === 0 ?
     <div className='cards__wrapper2'>
     <CardItem
                src='images/img6.png'
                text='Executive Chair'
                label='Imported'
                path='/services'
              />
              <CardItem
                src='images/img7.png'
                text='Office Chair'
                label='Luxury'
                path='/services'
              />
            <CardItem
                src='images/img8.png'
                text='Executive Chair with Head rest'
                label='Mystery'
                path='/services'
              />
              <CardItem
                src='images/img9.png'
                text='Mesh Chair with Mid Back'
                label='Adventure'
                path='/products'
              />
              <CardItem
                src='images/img10.png'
                text='Mesh Chair with Low Back'
                label='Adrenaline'
                path='/sign-up'
          />
           <CardItem
                src='images/img11.png'
                text='Leatherette Executive Chair'
                label='Adrenaline'
                path='/sign-up'
          />
           <CardItem
                src='images/img12.png'
                text='Office Chair'
                label='Adrenaline'
                path='/sign-up'
              />
        </div>
     
     : <></>}
     
    </>
  );
}

export default Cards;
