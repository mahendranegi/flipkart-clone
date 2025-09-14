import React, { useEffect, useState } from "react";
import { HeaderWrapper, Cart } from "../components/styled.js"
// import Api from './components/Api';
import Product from '../components/Product';
import Header from '../components/Header';
import LeftPannel from '../components/LeftPannel.jsx';
import { getProducts } from "../Services/api";
function Home() {
    const [data, setData] = useState([]);
  useEffect(() => {
      getProducts().then((products) => {
        setData(products);
      });
    }, []);
  
  return (
    <HeaderWrapper>
      <Header />
      <aside>
      <LeftPannel />
      <Product />
      </aside>
      </HeaderWrapper>
  )
  
  ;
}

export default Home;
