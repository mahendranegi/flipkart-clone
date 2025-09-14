import React from 'react'
import Header from '../components/Header'
import { ViewCartStyle, Cart } from "../components/styled";
import { Button,Input } from 'antd';
import Protection from '../components/Protection';
import Footer from '../components/Footer';
function Viewcart() {
  return (
    <ViewCartStyle>
         <Header />
    <aside>
        <div className="container">
<div className='leftPannel'>
  <div className='savedAddress'>
    <h4>From Saved Addresses</h4>
    <Button type='default'>Enter Delivery Pincode</Button>
  </div>
  <div>
  <div className='productDetatails'>
    <div className='imgContainsBox'>
      <img loading="lazy" class="DByuf4" alt="" src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/p/e/2/-original-imahfjsfgu7vjkvw.jpeg?q=90"></img>
    </div>
      <div className='productInfo'>
        <div>
          <h4>Google Pixel 10 (Frost, 256 GB)</h4>
        <p>12 GB RAM</p>
        <span>Seller:mmkekin</span>
        <h3>78677</h3>
        </div>
        <h5>Delivery by Sat Sep 13</h5>        
      </div>
  </div>
 <Protection />
 <div className='saveForLater'>
  <div>
 <span><i class="fa-solid fa-plus"></i></span><Input type='number' /><span><i class="fa-solid fa-minus"></i></span>
 </div>
 <Button type='default' size='large'>Save for later</Button>
  <Button type='danger ' size='large'>Remove</Button>
 </div>
  <footer>
             <Button type='primary' size='large'>PLACE ORDER</Button>
         </footer>
  </div>

</div>
        <div  className='stickyInfo'>
            <h4>Price details</h4>
            <hr />
            <div className='tableFormatList'>
                <p>Price (1 item) <h6>777</h6></p>
                <p>Buy more & save more <h6>777</h6></p>
                <p>Protect Promise Fee <h6>777</h6></p>

            </div>
              <hr />
            <div className='tableFormatList'>
                <p><strong>Total Amount</strong>  <h6>777</h6> </p>
               
            </div>
            <hr />
             <span>You will save ₹59 on this order</span>
        </div>
        </div>
        
    </aside>
    <Footer />
    </ViewCartStyle>
  )
}

export default Viewcart