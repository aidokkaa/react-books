import React from 'react'
import Header from './components/Header'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';
import Cart from './components/Cart';
import {Routes, Route} from 'react-router-dom'

import Platezh from './components/Platezh';
import CartEmpty from './components/CartEmpty';
import HelpPage from './Pages/HelpPages';
import Payment from './Pages/Payment';

export default function App(){
 const[searchValue,setSearchValue]= React.useState('');

  return(
      <div>
        <Header searchValue={searchValue} setSearchValue={setSearchValue}></Header>
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}></Route>
          <Route path='*'  element={<NotFound/>}></Route>
          <Route path='/cart'  element={<Cart/>}></Route>
          <Route path='/help'  element={<HelpPage/>}></Route>
          <Route path='/payment'  element={<Payment/>}></Route>
          <Route path='/platezh'  element={<Platezh/>}></Route>
        
 

        </Routes>
        
      </div>
      
  )
}


    

  

  


