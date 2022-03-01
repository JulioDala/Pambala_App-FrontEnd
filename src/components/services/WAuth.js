 import React, { useEffect, useState } from 'react'
 import api from './api'

 import {logout, getToken} from './auth'
 import { Navigate,useNavigate} from 'react-router-dom'


 export default function WAuth({children, redirectTo}) {
     const [loading,setLoading] = useState(true);
     const navigate =useNavigate();

     useEffect(()=>{
         async function verify (){
             var res = await api.get('/user/checkToken', {params:{token:getToken()}});

             if(res.data.status === 200){
                 setLoading(false)
             }else{
                 logout();
                 navigate("/Entrar")
                 setLoading(false)
             }
            
         }
        verify();
     },[loading,navigate])
  
    return(
        loading? children : <Navigate to={redirectTo}/>
    )
 }