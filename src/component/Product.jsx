import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import {add,remove} from '../redux/Slices/CartSlice'
import { RiUserStarFill } from "react-icons/ri";

function Product({post}) {
const{cart}=useSelector((state)=>state);
const dispatch=useDispatch();
const addToCart = () =>{
dispatch(add(post));
toast.success("Item added to cart")
}

const removeFromCart = () =>{
  dispatch(remove(post.id));
  toast.error("Item remove")
  }

  return (
    <div className='flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in rounded-xl
 gap-3 p-4 mt-10 ml-5   shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
      <div >
        <p className='font-semibold text-gray-700 text-lg text-left truncate w-40 mt-1'>
          {post.title.split("").slice(0,20).join("") + "..."}
        </p>
      </div>

       <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split("").slice(0,20).join("") + "..."}</p> 
       </div>
  <div  className='h-[180px]'>
    <img src={post.image} className='w-full h-full'/>
  </div>
  <div className='flex mt-3'><p className='text-green-600 font-bold text-sm flex gap-1 mt-1'><RiUserStarFill /></p>
  <p className='text-green-600 font-bold text-sm flex gap-1 '>{post.rating.rate}</p></div>
  <div className='flex justify-between gap-12'>
  <div>
 <p className='text-green-600 font-semibold items-center w-full mt-5 '> ${post.price}</p>
  </div>
    <div>
      {
        cart.some((p) => p.id==post.id) ? (
          
            <button
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase mt-5 hover:bg-gray-700
            hover:text-white  transition duration-300 ease-in'
             onClick={removeFromCart}>Remove Item</button>
          ) :
        (
          <button
           className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-2 uppercase mt-5 hover:bg-gray-700
            hover:text-white  transition duration-300 ease-in'
           onClick={addToCart}>
            Add To Cart
          </button>
        )
      }
    </div></div>
 </div>
  )
}

export default Product
