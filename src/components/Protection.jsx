import React from 'react'
import styled from "styled-components";
import { ViewCartStyle} from "../components/styled";
import { Button } from 'antd';
export const ProtectionStyle  = styled.div`
    background: #f4f8ff;
    padding: 24px 16px;
    border: 1px solid #e0e0e0;
    margin: 16px 0 0;
    border-radius: 4px;
    & h4{
    padding: 0 0 16px;
    color: #212121;
    font-weight: bold;
    }
`
function Protection() {
  return (
    <ProtectionStyle>
        <h4>Complete Mobile Protection</h4>
        <ViewCartStyle>
            <div className='productDetatails'>
    <div className='imgContainsBox'>
      <img loading="lazy" class="DByuf4" alt="" src="https://rukminim2.flixcart.com/image/144/144/xif0q/damage-protection-plan/s/m/i/-original-imahfs9fvg6kydgh.jpeg?q=90"></img>
    </div>
      <div className='productInfo'>
        <div>
          <h4>Complete Mobile Protection</h4>
        <p>3 Months</p>
        <span>Seller:mmkekin</span>
        <h3>78677</h3>
        </div>
       <Button type='primary' size='large'>Add Item</Button>       
      </div>
  </div>
        </ViewCartStyle>
       
    </ProtectionStyle>
  )
}

export default Protection