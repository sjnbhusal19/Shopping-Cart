import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShoppingCartList from './pages/shopping-cart-list';
import CartContextProvider from './context/cartContextProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/shopping-cart-list",
    element: <ShoppingCartList/>
  },
]); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
