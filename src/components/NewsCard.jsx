import React from 'react'
import styled from 'styled-components'


const NewsCard = () => {
  return (
    <>
    <Wrapper>
      <div className='top-con'>
        <img className='logo' src='newslogo.png'></img>
      </div>
      <div className='total-con'>
    <div className="container">
     <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/2023/10/05/263693-milkpexels.jpg?im=FitAndFill=(1200,900)" alt="news" />
    </div>
    <div className="card-body">
      <h4>Milk, milk products must not contain protein binders, emulsifiers, other additives: Food safety regulator</h4>
      <br></br>
      <p>Days ahead of the onset of the festive season in the country, food safety regulator FSSAI has said that there is no need to add ingredients such as protein binders and emulsifiers in milk and milk products. </p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/economy-infra/news-milk-milk-products-must-not-contain-protein-binder-emulsifier-food-safety-regulator-257744" className="link">Read more</a></button>
  </div>

    <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/2023/06/01/245442-milk-g90944839d1280.jpg?im=FitAndFill=(1200,900)" alt="news" />
    </div>
    <div className="card-body">
      <h4>World Milk Day 2023: Lakhs of dairy farmers of 22 milk producer companies pledge to boost milk output</h4>
      <br></br>
      <p>World Milk Day 2023: Lakhs of dairy farming members of 22 milk producer companies on Thursday pledged to boost milk production for increasing India's share in the global output, NDDB Dairy Services said.</p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/companies/news-world-milk-day-2023-milk-milk-production-companies-dairy-farmers-milk-producing-companies-india-dairy-of-the-world-238280" className="link">Read more</a></button>
  </div>
  
  <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/08/18/195738-milkfed-verka-twitter.jpg?itok=xWHhGy9w&c=c5af8c0f92ccc8e249257bf0f1cb18e8" alt="news" />
    </div>
    <div className="card-body">
      <h4>Punjab Milk Prices Hiked: Milkfed raises rates by Rs 2 per litre </h4>
      <br></br>
      <p>The hike comes days after other milk suppliers, Amul and Mother Dairy, raised prices by Rs 2 per litre from Friday.</p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/markets/commodities/news-punjab-milk-prices-hiked-milkfed-raises-rates-by-rs-2-per-litre-194744" className="link">Read more</a></button>
  </div> 
  </div>

   <div className="container">
     <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/07/15/154185-milk-price-1-reuters.jpg?itok=CpHqb_mL&c=e2a68e0ad8c5bcea1feba8b79671b27b" alt="rover" />
    </div>
    <div className="card-body">
      <h4>Milk Price Hike in UP: After Amul, Mother Dairy, Parag Millk increases price by Rs 2 across state from THIS date—Check details</h4>
      <br></br>
      <p>This comes as a big blow to common man as  milk prices are being increased amid ever rising petrol and diesel prices and LPG cylinder cost. </p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/personal-finance/news-milk-price-hike-in-up-after-amul-mother-dairy-parag-millk-increases-price-by-rs-2-across-state-from-this-date-check-details-160711" className="link">Read more</a></button>
  </div>

    <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/04/05/179142-ge.jpg?itok=XHR2fTJ_" alt="ballons" />
    </div>
    <div className="card-body">
      <h4>Amul milk prices to remain firm, says MD RS Sodhi</h4>
      <p>Dairy major Amul feels prices will remain "firm" going forward due to increased pressure from energy, logistics and packaging costs, a top official said on Tuesday.</p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/india/news-amul-milk-prices-to-remain-firm-says-md-rs-sodhi-182230" className="link">Read more</a></button>
  </div>
  
  <div className="card">
    <div className="card-header">
      <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2018/07/16/45450-milksupply-to-mumbai-zeenews.jpg?itok=VEmNEuwB&c=1cac8e47d5c727e51da2aad54a503f8d" alt="city" />
    </div>
    <div className="card-body">
      <h4>Milk-less in Mumbai! Maximum city set to run dry!</h4>
      <p>The Swabhimaani Shetkari Sangthana reportedly wields influence in Western Maharashtra’s milk-producing areas, but the organisation has received a shot in the arm with support from Palghar strongman Hitendra Thakur as well as the CPI-M. Shetti said Thakur’s Bahujan Vikas Aghadi (BVA), JDU MLC Kapil Patil, the CPI-M’s Kisan Sabha and Gujarat’s Patidar leader Hardik Patel had reportedly extended their support to the protest. The protest is likely to block supply from neighboring state via the Mumbai- Ahmedabad highway, thereby depriving the corporate capital of these basic needs.  </p>
    </div>
    <button className="btn-more"><a href="https://www.zeebiz.com/india/news-milk-less-in-mumbai-maximum-city-set-to-run-dry-55444" className="link">Read more</a></button>
  </div>
  
  </div>
  </div>
  <button class="btn"><a href="https://timesofindia.indiatimes.com/?from=mdr" className='link'>Discover more News</a></button>
  </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.logo{
  width:200px;
  margin-left:50%;
}
.total-con{
  width:100%;
  justify-content:center;
  align-items:center;
  margin-left:250px;
}
.container {
  display: flex;
  width: 1700px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 400px;
}
.card-header img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.card-body h4{
 font-size:20px;
}
.card-body p {
  font-size: 14px;
  margin: 0 0 40px;
}

.btn{
  margin-left:50%;
  margin-top:2%;
  margin-bottom:3%;
  align-items: center;
  appearance: none;
  background-color:lightblue;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 45px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 20px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}
.btn:hover {
  background: #F6F9FE;
  color: lightblue;
}
.btn-more{
  margin-left:30%;
  margin-bottom:4%;
  align-items: center;
  appearance: none;
  background-color:lightblue;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 45px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 20px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}
.btn-more:hover {
  background: #F6F9FE;
  color: lightblue;
}
.link{
  text-decoration:none;
  color:#fff;
}
`;
export default NewsCard

