import React from 'react'
import styled from 'styled-components'

const productcard = () => {
  return (
   <>
   <Wrapper>
    <div className='prod-container'>
   <div className="wrapper">
    <div className="product-img">
      <img src="agedcheese.webp" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Aged Cheese</h1>
        <h2>Unit size: 150 grams</h2>
        <p>Barrel Aged Fètta is inspired by a classic Greek style Feta. Ours is made with Goat & Sheep milk and barrel aged in brine for 3 weeks and then dried out for another 3 weeks. Complexity in flavours and aromas develop from the exposure to the barrel.  </p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>415</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
      <img src="freshmilk.jpg" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Fresh Milk</h1>
        <h2>1 Litre Pouch</h2>
        <p>cow milk is milked from Holstein Friesian cows at our farm near Someshwar, Baramati. This milk is automatically milked, and packaged with zero human contact. As homogenised the cream does not separate, thus giving you a wholesome taste in every sip.</p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>85</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
      <img src="chaddercheese.webp" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Cheddar Cheese</h1>
        <p>Cheddar cheese is often served in sandwiches with luncheon meat, in open or closed-faced grilled cheese sandwiches, as an appetizer or snack with meats, fruit and breads, as a dessert cheese with pie, or as an ingredient in a variety of cooked dishes and baked goods.</p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>100</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  </div>

  <div className='prod-container'>
   <div className="wrapper">
    <div className="product-img">
      <img src="yogurt.webp" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Yogurt</h1>
        <h2>Unit size: 100 grams</h2>
        <p>Milky Mist Greek Yogurt is the perfect tasty snack to have between meals. Greek yoghurt is considered the most nutritious option when it comes to yoghurts. Due to the way it is made, it is naturally higher in protein, which makes it a great addition to breakfast, leaving you feeling satisfied throughout the morning</p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>89</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
      <img src="Gorgonzola.webp" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Gorgonzola</h1>
        <h2>1 Litre Pouch</h2>
        <p>A semi-soft blue veined, sharp and salty in taste cheese, made from cow's milk. Pairs well with a Red Port Wine.Usage: Pair Danish Blue with red meat steak, allowing it to melt in, or serve it in soups, pastas or stews for an extraordinarily creamy consistency.</p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>499</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
      <img src="lastimg.jpg" height="420" width="327"></img>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Ricotta</h1>
        <p>Highland Farms Ricotta cheese has a signature salty and sweet taste using ingredients like free-range A2 cow milk, apple cider vinegar, salt whey, and cow cream. Your taste bud experiences a unique flavor as you take a piece of this soft and crumbly whey cheese in your mouth. Explore using our ricotta cheese for baking Italian dishes or adding it to your salads or cheesecake.   </p>
      </div>
      <div className="product-price-btn">
        <p>Rs.<span>399</span></p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  </div>
  </Wrapper>
   </>
  )
}

const Wrapper = styled.section`
.prod-container{
    display:flex;
    width:100%;
    margin:40px;
}
.wrapper {
    height: 420px;
    width: 654px;
    margin-left:20px;
    border-radius: 7px 7px 7px 7px;
    -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  }
  
  .product-img {
    float: left;
    height: 420px;
    width: 327px;
  }
  
  .product-img img {
    border-radius: 7px 0 0 7px;
  }
  
  .product-info {
    float: left;
    height: 420px;
    width: 327px;
    border-radius: 0 7px 10px 7px;
    background-color: #ffffff;
  }
  
  .product-text {
    height: 300px;
    width: 327px;
  }
  
  .product-text h1 {
    margin: 0 0 0 38px;
    padding-top: 52px;
    font-size: 34px;
    color: #474747;
  }
  
  .product-text h1,
  .product-price-btn p {
    font-family: 'Bentham', serif;
  }
  
  .product-text h2 {
    margin: 0 0 47px 38px;
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #d2d2d2;
    letter-spacing: 0.2em;
  }
  
  .product-text p {
    height: 125px;
    margin: 0 0 0 38px;
    font-family: 'Playfair Display', serif;
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
  }
  
  .product-price-btn {
    height: 103px;
    width: 327px;
    margin-top: 17px;
    position: relative;
  }
  
  .product-price-btn p {
    display: inline-block;
    position: absolute;
    top: -13px;
    height: 50px;
    font-family: 'Trocchi', serif;
    margin: 0 0 0 38px;
    font-size: 20px;
    font-weight: lighter;
    color: #474747;
  }
  
  span {
    display: inline-block;
    height: 50px;
    font-family: 'Suranna', serif;
    font-size: 34px;
  }
  
  .product-price-btn button {
    float: right;
    display: inline-block;
    height: 50px;
    width: 176px;
    margin: 0 40px 0 16px;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: #9cebd5;
    cursor: pointer;
    outline: none;
  }
  
  .product-price-btn button:hover {
    background-color: #79b0a1;
  }
`;
export default productcard;
