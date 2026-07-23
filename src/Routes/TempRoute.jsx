import React, { useContext } from 'react'
import { Outlet ,Navigate} from 'react-router'
import { MyStore } from '../Context/MyContext'

const ProtectedRoute = () => {
     let{loggedIn}=useContext(MyStore);
       if(!loggedIn){
       return  <Navigate to="/"/>;
      }
  return (
   

      <Outlet/>
    
  )
}

export default ProtectedRoute
