// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './App.css'
import conf from './config/conf';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from "./store/authSlice"
import { Header,Footer } from './components';
//import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    authService.getCurrUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading?(
    <div className='min-h-screen flex flex-wrap  bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}
export default App
