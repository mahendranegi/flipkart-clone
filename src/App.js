// import ContextData from "./components/ContextData";
import React,{useState} from 'react'

import Colleage from "./components/Colleage";
import { SubjectContext,StudentContext,cartContext } from "./ContextData";
import Color from './components/Color';
import Api from './components/Api';
import Product from './components/Product';
import Header from './components/Header';
import 'antd/dist/reset.css';  // ✅ new version uses reset.css

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Viewcart from './pages/Viewcart.jsx';


function App() {
  const [subject, setSubject] = useState("Science");
  const handleChange = (e)=>{
    // debugger
    setSubject(e.target.value)
  }
  const [cartCount, setCartCount] = useState(0);
  return (
   
    <cartContext.Provider value={{ cartCount, setCartCount }}>
       <Router>
    <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Details" element={<Details />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<SignUp />} />
            <Route path="/Viewcart" element={<Viewcart />} />
      </Routes>
    </Router>
      {/* <select onChange={handleChange}>
        <option value="">Select</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option  value="History">History</option>
      </select>
      <SubjectContext.Provider value={subject}>
      <h1>Context Api</h1>
      <Colleage />
      </SubjectContext.Provider> */}
      {/* <Color /> */}
      
      {/* <Api /> */}
    </cartContext.Provider>
    
  );
}

export default App;
