import { createContext, useState } from "react"
import { TProduct } from "../components/type-product"

export const CartContext = createContext<any>({cart:null,addToCart:()=>{}}) 

const CartContextProvider = ({children}:{children:React.ReactNode}) => {

  const [cart, setCart] = useState<TProduct[]>([]);

const addToCart = (product: TProduct) => {
    setCart(initialCartItems => [...initialCartItems, product]);
};

  return (
    
        <CartContext.Provider  value={{cart:cart,addToCart:addToCart}}>
          {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider