import React, { useState } from 'react'

const QtyInput = () => {
  const [qty, setqty] = useState(0)
  const handleMinus = (e) => {
    e.preventDefault();
    if (qty <= 0) {
      return;
    }
    else {
      let res = qty - 1;
      setqty(res);
    }

  }
  const handlePlus = (e) => {
    e.preventDefault();
    let res = qty + 1;
    setqty(res);
  }
  return (
    <>
      <div className='flex-1 p-3 inline-flex  justify-around items-center bg-gray-200 rounded-xl'>
        <div className='cursor-pointer hover:opacity-60'><img src="./images/icon-minus.svg" alt="" onClick={handleMinus} /></div>
        <div className='font-bold'>{qty}</div>
        <div className='cursor-pointer hover:hover:opacity-60'><img src="./images/icon-plus.svg" alt="" onClick={handlePlus} /></div>
      </div>
    </>
  )
}

export default QtyInput