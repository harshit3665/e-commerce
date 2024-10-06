import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart } = useSelector((state) => state)// jo state hai use retrun kr diya

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div className='flex-row'>
      {
        cart.length > 0 ?
          (
            <div className='flex justify-around'>

              <div>{
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
              </div>


              <div  className='mt-10'>
                <div>
                  <div className='font-semibold text-xl text-green-600'>Your Cart</div>
                  <div className='font-bold  text-green-600 text-3xl'>Summary</div>

                  <p className='text-black font-semibold text-sm'>
                    <span>Total Items : {cart.length}</span>
                  </p>
                </div>
                <div className='py-96 space-y-2'>
                  <div className='flex'>
                    <p className='text-black font-semibold text-sm'>Total Amount: </p><p className='font-bold text-sm'> ${totalAmount}</p>
                  </div>

                  <div>
                    <button className='bg-green-600 text-white font-bold px-36 py-1.5 rounded-md '>CheckOut Now</button>

                  </div>
                </div>

              </div>

            </div>) :
          (
            <div className='text-center flex-col items-center py-72'>
              <h1 className='text-xl font-semibold'>Cart Empty</h1>
              <Link to="/">
                <button className='bg-green-600 rounded-md px-10 mt-4 py-2 text-white 
                font-semibold hover:scale-110 transition duration-300 ease-in'>Shop Now</button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart
