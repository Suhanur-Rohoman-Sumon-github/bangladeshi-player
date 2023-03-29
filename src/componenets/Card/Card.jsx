import React from 'react';
import SingleCard from '../Cards/SingleCard'
import { useEffect, useState } from "react";
import HandleCard from '../HandleCard/HandleCard';
const Card = () => {
  const [plyers, setPlyers] = useState([]);
  const [cards,setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlyers(data))
  }, [])
  const handlecard = (player) =>{
    const newCard = [...cards,player]
    setCards(newCard)
  }
 
  
  return (
   <div className='flex mx-12'>
     <div className='grid md:grid-cols-3 my-10 gap-4  mr-4 w-[80%] '>
      {
        plyers.map(plyer => <SingleCard
          key={plyer.id}
          handlecard ={handlecard}
          
          plyer={plyer}
        >
        </SingleCard>)
      }
    </div>
    <div className='w-[20%] bg-primary borde my-10 text-white '>
      <HandleCard cards ={cards}></HandleCard>
    </div>
   </div>
  );
};

export default Card;