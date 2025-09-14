import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
export const FooterStyle  = styled.div`
     .footer {
      background: #111;
      color: #fff;
      padding: 40px 20px 20px;
          margin: 48px 0 0;
      & p{
      font-size: 16px;
      }
    }

    .footer-container {
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .footer-col h3 {
      margin-bottom: 24px !important;
      font-size: 18px;
      border-bottom: 2px solid #444;
      display: inline-block;
      padding-bottom: 5px;
    }

    .footer-col ul {
      list-style: none;
      padding: 0;
    }

    .footer-col ul li {
      margin-bottom: 10px;
    }

    .footer-col ul li a {
      color: #bbb;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-col ul li a:hover {
      color: #fff;
    }

    .footer-social a {
      margin-right: 10px;
      color: #bbb;
      font-size: 20px;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-social a:hover {
      color: #fff;
    }

    .footer-bottom {
      text-align: center;
      padding: 15px 0;
      margin-top: 20px;
      border-top: 1px solid #444;
      font-size: 14px;
      color: #bbb;
    }

    @media (max-width: 600px) {
      .footer-col h3 {
        font-size: 16px;
      }
    }
`

function Footer() {
  return (
    <FooterStyle>
        <div className='footer'>
    <div class="footer-container">
     
      <div class="footer-col">
        <h3>ShopEasy</h3>
        <p>Your one-stop shop for everything you love.  
        Quality products, fast delivery, and customer-first service.</p>
      </div>

      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">Categories</Link></li>
          <li><Link  to="/">Offers</Link></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Order Tracking</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Follow Us</h3>
        <div class="footer-social">
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © 2025 ShopEasy. All rights reserved.
    </div>
  </div>
    </FooterStyle>
  )
}

export default Footer