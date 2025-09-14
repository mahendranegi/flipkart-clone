import React, { useContext, useState } from 'react'
import '../components/Style.css'
import { cartContext } from '../ContextData'
import { Button, Input, Card } from "antd";
import { BrowserRouter as Router, Routes, Route, Link, Links } from "react-router-dom";
import AddToCart from './AddToCart';
import Logo from '../assets/images/logo.png';

function Header() {
 const { cartCount } = useContext(cartContext);
   return (
    <cartContext.Provider>
        <header>
            <div className='conatiner'>
            <div>  <Link to="/"><img src={Logo} alt='Logo' style={{width: '100px'}}/> </Link> <Input placeholder="Enter here"/></div>
           
            <div>
                <Button type='primary'><Link to='/Login'>Login</Link></Button>
                  <Link to='/Viewcart'><AddToCart /></Link>
            </div>
          
         
</div>
        </header>
    </cartContext.Provider>
  )
}

export default Header