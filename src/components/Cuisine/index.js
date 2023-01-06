import React from 'react';
// import MexicanImg from '../../assets/img/mexican.jpeg';
// import SeafoodImg from '../../assets/img/seafood.jpeg';
// import AmericanImg from '../../assets/img/american.jpeg';
// import AsianImg from '../../assets/img/asian.jpeg';
// import BbqImg from '../../assets/img/bbq.jpeg';
// import ItalianImg from '../../assets/img/italian.jpeg';

//**********/
//*TODO: Complete the following to complete this page
//// 1. place types of cuisine in the correct spots
//// 2. find an image that portrays the correct cuisine
//// 3. connect the food image to the correct cuisine
// 4. link the correct page to each cuisine category
// 5. Change max-width css for this whole block = should stop at three columns
//**********/
export default function Cuisine() {
  return (
    <div id="cuisine">

      <a href="/mexican-food" className='cuisine-main-link mexican'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Mexican</h2>
        </div>
        <p className="desc">Mexican Cuisine</p>
      </div>
      </a>
      
      <a href="/seafood" className='cuisine-main-link seafood'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Seafood</h2>
        </div>
        <p className="desc">Fresh Seafood</p>
      </div>
      </a>
      
      <a href="/american-food" className='cuisine-main-link american'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>American</h2>
        </div>
        <p className="desc">America's Finest</p>
      </div>
      </a>

    <a href="/asian-food" className='cuisine-main-link asian'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Asian</h2>
        </div>
        <p className="desc">Oriental Cuisine</p>
      </div>
    </a>

      <a href="/barbecue" className='cuisine-main-link barbecue'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Barbecue</h2>
        </div>
        <p className="desc">The Best BBQ</p>
      </div>
      </a>

      <a href="/italian-food" className='cuisine-main-link italian'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Italian</h2>
        </div>
        <p className="desc">Italian Cuisine</p>
      </div>
      </a>

    </div>
  );
}