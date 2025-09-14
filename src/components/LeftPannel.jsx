import React, { useEffect, useState } from 'react'
import {getProducts } from '../Services/api'
import styled from "styled-components";

import Accordians from './Accordians.jsx';
export const StyleLeftAside = styled.div`
.filterDataSec{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.ant-collapse-header{
    padding: 4px 12px!important;
}
    .ant-collapse{
    border-radius: 2px;
    }
.leftPannelSec{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
    .ant-collapse-header-text{
    font-weight: bold;
    }
    .ant-collapse-expand-icon{
        position: absolute;
    right: 0;
}
    .ant-collapse-content-box{
    padding: 12px !important;
    }
  min-width: 270px;
  position: sticky;
  height: max-content;
  top: 94px;
    background: #fff;
    padding: 12px;
    border-radius: 0px;
  border: 1px solid #ddd;
  & hr {
    width: calc(100% + 24px);
    margin: 16px 0 16px -12px;
    border: none;
    background: #f6f6f6;
    height: 1px;
  }
`;

function LeftPannel() {
     const [data, setData] = useState([]);
    
      useEffect(() => {
        getProducts().then((products) => setData(products));
      }, []);
      console.log(data)
  
  return (
    <StyleLeftAside>
        <h1>Filter</h1>
        <hr />
        <div className='filterDataSec'>
         <Accordians 
         titleText="tttt"
         valueOne="jdfjdkjk"
          valueTwo="Second value"
          valueThree="Third value"
         />
         <Accordians 
         valueOne="999jj"
          titleText="hhh"
          valueTwo="Second value"
          valueThree="Third value"
         />
            {data.map((item) => (
        <h5 key={item.id}>{item.category}</h5>
      ))}
            {/* <h5>CATEGORIES</h5> */}

        </div>
    </StyleLeftAside>
  )
}

export default LeftPannel