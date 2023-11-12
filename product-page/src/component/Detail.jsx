import React,{useState} from 'react'
import QtyInput from './QtyInput'

const Detail = ({cart,setcart}) => {
    const addToCart=()=>{
      console.log("click");
      const item={ img:"./images/image-product-1.jpg", qty:3, price:"125",total:"275" };
      setcart([...cart, item]);
    }
  return (
    <>
      <div className='md:py-14 md:px-14 mt-4'>
        <p className='text-primary-900 tracking-wider font-bold text-sm'>SNEAKER COMPANY</p>
        <p className='text-3xl md:text-4xl md:tracking-wider font-bold'>Fall Limited Edition Sneakers</p>
        <p className='text-gray-400 text-sm md:text-base md:my-10 my-5'>These low-price sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='flex flex-row md:flex-col self-center justify-between'>
          <div>
             <span className='text-2xl mr-4 font-bold'>$125.00</span>
          <span className='text-primary-900 rounded  bg-orange-200 text-xs font-bold p-1'>50%</span>
          </div>
         
          <p className='text-sm text-gray-400 line-through tracking-normal'>$250.00</p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 text-sm font-bold mt-10 md:mr-10 mb-6">
         <QtyInput />
          <button className='p-3 flex-auto inline-flex justify-center items-center bg-primary-900 text-white text-xs rounded-lg  hover:opacity-60' onClick={addToCart}>
            <img src="./images/icon-cart.svg" alt="" className='self-center fill-white w-4 h-4 mr-3'  />
           
            Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Detail