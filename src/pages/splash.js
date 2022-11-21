import React from 'react';
import Login from '../components/Login';

export default function Splash() {
  return (
    <section id='search-container' className='row'>
      <form className="form-container right-inner-addon input-container">
      <i className="fa fa-map-marker"></i>
            <input type="text"
                   className="form-control" 
                   placeholder="San Antonio" />
        </form>
        <Login />
    </section>
  
  );
}