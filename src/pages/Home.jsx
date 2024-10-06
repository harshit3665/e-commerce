import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner'
import Product from '../component/Product'


function Home() {
    const API_URL="https://fakestoreapi.com/products";
    const[loading,setLoading] =useState(false)
    const [posts , setPosts] =useState([]);
    async function fetchProductData(){
      setLoading(true);
      try{
        const res =await fetch(API_URL);
        const data = await res.json();
        setPosts(data);

      }
      catch(error){
        console.log(error);
        setPosts([]);

      }
      setLoading(false);

    }
    useEffect(()=> {
      fetchProductData();
    },[])

  return (
    <div>
    {
      
        loading ? <Spinner /> :
       
        (<div className='grid  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1
         lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
                  posts.map( (post) => (
                    <Product key ={post.id} post={post}/>
                  ))}
          </div>) }
       
     </div>    
    
  )
}

export default Home
