import React from 'react'
import Navbar from '../component/Navbar'
import ImageBox from '../component/ImageBox'
import Detail from '../component/Detail'
import { useState } from 'react'
const Index = () => {
     const [cart, setcart] = useState([]);
  return (
    <>
    <div className="h-screen md:mx-28">
         <Navbar cart={cart} setcart={setcart} />
         <div className="flex flex-col md:flex-row">
            <div className="md:flex-1 flex justify-center items-center">
                 <ImageBox />
            </div>
            <div className="md:flex-1 flex justify-center items-center">
                 <Detail cart={cart} setcart={setcart} />
            </div>
         </div>
    </div>
       
    </>
  )
}

export default Index