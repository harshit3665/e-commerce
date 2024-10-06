import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import {toast} from 'react-hot-toast';


function CartItem({item, itemIndex}) {
const dispatch=useDispatch((state) =>state)
  const removeFromcart =()=>{
        dispatch(remove(item.id));
        toast.error("item remove")
  }
  return (
    <div className='mt-10'>
      
      <div className='flex gap-2 '>
        <div>
          <img src={item.image} className='h-[200px] '/>
        </div>

       <div className=''>
        <h1 className='text-md font-bold text-gray-900 py-5'>{item.title.split("").slice(0,50).join("") + "..."}</h1>
        <h1 className='text-xs text-slate-700 py-3'>{item.description.split("").slice(0,40).join("") + "..."}</h1>
        <div className='flex gap-44'>
         <p className='text-green-600 font-bold text-sm '> ${item.price}</p>
         <div>
         <MdDelete onClick={removeFromcart}
         className='bg-red-100 rounded-full text-xl text-red-500 w-full h-full px-4 py-4'/>
         </div>
        </div>
        </div> 
      </div>
      <div className='border-b-2 border-black mt-4'></div>
    </div>
  );
};

export default CartItem
