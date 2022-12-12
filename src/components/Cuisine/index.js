import React from 'react';

export default function Cuisine() {
  return (
    <div id="cuisine">

      <a href="/type1" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type1</h2>
        <img src="#cuisine1" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
      </a>
      
      <a href="/type2" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type2</h2>
        <img src="#cuisine2" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
      </a>
      
      <a href="/type3" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type3</h2>
        <img src="#cuisine3" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
      </a>

    <a href="/type4" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type4</h2>
        <img src="#cuisine4" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
    </a>

      <a href="/type5" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type5</h2>
        <img src="#cuisine5" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
      </a>

      <a href="/type6" className='cuisine-main-link'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Type6</h2>
        <img src="#cuisine6" alt="" />
        </div>
        <p className="desc">description</p>
      </div>
      </a>

    </div>
  );
}