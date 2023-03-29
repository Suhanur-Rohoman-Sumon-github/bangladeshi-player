import React from 'react';

const ShoertCart = (props) => {
    const { name, picture, price, ratings, nationaluty, discription } = props.car;
    return (
        <div className='flex bg-white mt-4 mx-4 rounded-md shadow-2xl'>
            <div className='mt-4'>
                <img src={picture} alt="Album" className='h-20 w-20 rounded-full' />
            </div>
            <div className="text-black ml-2">
                <h2 className="card-title">{name}</h2>
                <p>price started : {price}$</p>
                <p>ratings : {ratings}</p>
                <p>nationaluty: {nationaluty}</p>
            </div>
        </div>
    );
};

export default ShoertCart;