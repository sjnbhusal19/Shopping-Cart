import React, { useContext } from 'react'
import NavBar from '../components/navbar'
import { TProduct } from '../components/type-product'
import { CartContext } from '../context/cartContextProvider'


const ShoppingCartList = () => {
const {cart} = useContext(CartContext)
console.log(cart)
  return (
    <div className='items-center justify-center'>
        <NavBar/>
        <div className='flex justify-between m-4'>
            <div className='flex text-sm'>
            <button className='bg-blue-500 mr-4 rounded-md p-2 shadow-md  text-white'>Checkout</button>
            <button className='bg-gray-300 rounded-md p-2 shadow-md'>Continue Shopping</button>
            </div>
        <span  className='flex justify-center mr-10'>Displaying 1 - 1 of 1 </span>
        </div>

        {cart && cart.length>0 ? cart.map((items:TProduct)=>{
          return(
      <div key={items.id} className='flex justify-between border rounded-sm shadow-md m-4 p-3'>
       <div className='pl-4'></div>
       <span>title and details</span>
       <span className='pr-4'>{items.price}</span>
       </div>
          )
        }):
          <p>No Items in the cart</p>
        }
        
        </div>
  )
}

export default ShoppingCartList