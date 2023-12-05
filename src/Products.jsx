
import React from 'react';
import styled from 'styled-components'
import Productcard from './components/Productcard'


const Products = () => {
  let openShopping = document.querySelector('.shopping');
  let closeShopping = document.querySelector('.closeShopping');
  let list = document.querySelector('.list');
  let listcard = document.querySelector('.listcard');
  let total = document.querySelector('.total');
  let body = document.querySelector('.body-con');
  let quantity = document.querySelector('.quantity');
 
 
//   openShopping.addEventListener('click',()=>{
//     body.classList.add('active');
//   })
//  closeShopping.addEventListener('click',()=>{
//    body.classList.remove('active');
//  })

  return (
    <>
      <Wrapper>
        <div className='body-con'>
          <div className="container">
            <header>
              <h3></h3>
              <img className='logo_img' src="allproducts.png"></img>
              <div className='shopping'>
                <img src="shopping-cart-outline-svgrepo-com.svg"></img>
                <span className='quantity'>0</span>
              </div>
            </header>
            <div className='list'></div>
          </div>
          <div className='card'>
            <h3>card</h3>
            <ul className="listcard"></ul>
            <div className='checkout'>
              <div className='total'>0</div>
              <div className='closeShopping'>Close</div>
            </div>
          </div>
          <Productcard/>
        </div>
        
      </Wrapper>

    </>
    
  );
}
const Wrapper = styled.section`
.body-con{
  font-family:system-ui;
}
.logo_img{
  width:200px;
}
  .container{
    width:90%;
    margin:auto;
    transition:0.5s;
  }
  header{
    display:flex;
    justify-content:space-between;
    margin-top:50px;
  }
  header .shopping{
    position:relative;
    text-align:right;
  }
  header .shopping img{
    width:40px;
    left:50%;
  }
  header .shopping span{
    background-color:red;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    position:absolute;
    top:-10px;
    left:80%;
    padding:3px 10px;
  }
  .list{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    column-gap:20px;
    row-gap:20px;
    margin-top:50px;
  }
  .card{
    position:fixed;
    top:0px;
    left:100%;
    width:500px;
    background-color:#453E38;
    height:100vh;
    transition:0.5s;
  }
  .card h3{
    color:#E8BC0E;
    font-weight:100;
    margin:0;
    padding:0 20px;
    height:80px;
    display:flex;
    align-items:center;
  }
  .card .checkout{
    position:absolute;
    bottom:0;
    width:100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
  }
  .card .checkout div{
    background-color:#E8BC0E;
    width:100%;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    cursor:pointer;
  }
  .card .checkout div:nth-child(2){
    background-color:#1C1F25;
    color:#fff;
  }
  .active .card{
    left:77%;
  }
  .active .container{
    transform:translateX(-200px);
  }
`;




export default Products;


