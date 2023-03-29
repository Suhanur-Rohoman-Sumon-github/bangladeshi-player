import React from 'react';
import ShoertCart from '../Cards/ShortCart/ShoertCart';

const HandleCard = (props) => {
    const { cards } = props;
    // console.log(cards)
    let newPrice = 0;
    for (const car of cards) {
        // console.log(car)
        newPrice = newPrice + car.price;
    }
    const transitionFee = newPrice * 7 / 100;
    const totalPrice = newPrice + transitionFee;

    return (
        <div className='bg-primary py-10 sticky'>
            <h1 className='text-center font-bold text-3xl'>Your Card</h1>
            <div className='ml-6 mt-3'>
                <p className=' mt-3'>total added : {cards.length}</p>
                <p className=' mt-3'> price : {newPrice}$</p>
                <p className=' mt-3'>transition fee :{transitionFee}$</p>
                <p className=' mt-3 text-3xl'>total price :{totalPrice}$</p>
                </div>
               <div className=' border-solid divide-black '>
               {
                    cards.map(car => <ShoertCart
                        key ={car.id}
                         car={car} >
                         </ShoertCart>)
                }
               </div>   
               
        </div>
    );
};

export default HandleCard;