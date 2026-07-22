import { createContext, useState } from "react";


export const MyStore=createContext();

export const ContextProvider=({children})=>{
   const[product,setProduct] =useState([]);
   let [registeredUser,setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUsers"))|| []);
   
   let [loggedIn,setLoggedIn]=useState(JSON.parse(localStorage.getItem("loggedInUser")))

   const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);
console.log(cartItems);
 return(
    <MyStore.Provider value={{product,setProduct,registeredUser,setRegisteredUser,setLoggedIn,loggedIn,setCartItems,cartItems,isCartOpen,setIsCartOpen}}>{children}</MyStore.Provider>
 )
}