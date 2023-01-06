import React from 'react';
import { Link } from 'react-router-dom'

export default function Cuisine() {
  return (
    <div id="cuisine">
      <Link to={"/SanAntonio/Mexican"} className='cuisine-main-link mexican'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Mexican</h2>
        </div>
        <p className="desc">Mexican Cuisine</p>
      </div>
      </Link>
      
      <Link to={"/SanAntonio/Seafood"} className='cuisine-main-link seafood'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Seafood</h2>
        </div>
        <p className="desc">Fresh Seafood</p>
      </div>
      </Link>
      
      <Link to={"/SanAntonio/American"} className='cuisine-main-link american'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>American</h2>
        </div>
        <p className="desc">America's Finest</p>
      </div>
      </Link>

    <Link to={"/SanAntonio/Asian"} className='cuisine-main-link asian'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Asian</h2>
        </div>
        <p className="desc">Oriental Cuisine</p>
      </div>
    </Link>

      <Link to={"/SanAntonio/Barbecue"} className='cuisine-main-link barbecue'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Barbecue</h2>
        </div>
        <p className="desc">The Best BBQ</p>
      </div>
      </Link>

      <Link to={"/SanAntonio/Italian"} className='cuisine-main-link italian'>
      <div className="cuisine-container">
        <div className="cuisine-type">
          <h2>Italian</h2>
        </div>
        <p className="desc">Italian Cuisine</p>
      </div>
      </Link>

    </div>
  );
}