
import React, { useContext} from 'react'
import { TProduct } from './type-product'
import { Search } from 'lucide-react';
import { useCustomFetch } from './custom-fetch';
import { CartContext } from '../context/cartContextProvider';

const Product = () => {
  const {cart,addToCart} =useContext(CartContext)
  const [product, fetchingError, loading] = useCustomFetch()
  

  // console.log(cart)
 
  return (
    <div className=' grid grid-cols-2 w-[90%]  gap-1  ml-5 p-2 items-center justify-center rounded-md shadow-sm'  >

      {loading && <p>Loading...</p>}
      {fetchingError && <p>Error on product fetching. </p>}


      
      {
        Array.isArray(product) && product.length > 0 && product.map((items: TProduct) => {
          return (
            
            <div className='border rounded-md shadow-sm m-2 h-80'  key={items.id} >

              <div className='flex bg-gray-200 h-[14%] text-sm text-blue-500 items-center '>
                <button className='pr-3 pl-3'><Search /></button>
               <button onClick={()=>addToCart(items)}>Add to cart</button>
              </div>

              <div className='flex flex-col items-center justify-center '>
                <img src={items.image} alt={items.title} className='h-[90px] w-[90px] m-8' />
                <div className='flex flex-col items-center justify-center mt-7 text-sm'>
               <span className='text-blue-500 m-2'>{items.title}</span>
              <span >${items.price}</span>
              </div>
              </div>
             

            </div>
          )
        })

      }



    </div>

  )
}

export default Product;