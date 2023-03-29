import React from 'react';

const SingleCard = (props) => {
    const { name, picture, price, ratings, nationaluty,discription} = props.plyer;
    const handlecard = props.plyer;
    return (
        <>
            <div className="card card-compact w-full bg-primary shadow-2xl">
                <figure><img src={picture} alt="Shoes" className='w-full h-64' /></figure>
                <div className="card-body bg-black text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{discription}</p>
                    <p>price started : {price}$</p>
                    <p>ratings : {ratings}</p>
                    <p>nationaluty: {nationaluty}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handlecard(props.plyer)} className="btn btn-primary w-full text-white">Buy Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCard;