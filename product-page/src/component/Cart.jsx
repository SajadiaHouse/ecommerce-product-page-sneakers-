import React from 'react'

const Cart = ({ cart,setcart }) => {
    const delCart=()=>{
        setcart([]);
    }
    return (
        <>
            <div className="flex flex-col text-left">
                <p className='font-bold text-sm  mb-2 border-gray-700 border-b-2 pb-2'>Cart</p>
                {/* <hr style={{ height: '12px' }} /> */}
                {cart.length === 0 ?
                    <div className='h-16 flex justify-center items-start'>
                        <p className='text-sm text-slate-500'>Your cart is empty.</p>
                    </div> : <div className="flex flex-wrap gap-2 my-3">
                        <img src="./images/image-product-1.jpg" className='h-10 w-10 rounded-lg' alt="" />
                        <span className='text-sm text-slate-400 font-light'>Fall limited Edition Sneakers
                            <p className='text-sm text-slate-400 font-light'>$125.00 x 3= <span className='font-bold text-black'>$325.00</span></p>
                        </span>
                        <span className=' self-center cursor-pointer'>
                            <img src="./images/icon-delete.svg" alt="" onClick={delCart} className='w-3 h-auto ' />
                        </span>
                    </div>}

                <button className='w-full p-2 bg-primary-900 rounded-lg hover:opacity-60 text-white text-sm font-bold' >Check out</button>
            </div>
        </>
    )
}

export default Cart