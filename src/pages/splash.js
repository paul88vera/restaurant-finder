import React from 'react';

export default function Splash() {
  return (
    <section id='search-container' className='row'>
      <form className="form-container right-inner-addon input-container">
      <i className="fa fa-map-marker"></i>
            <input type="text"
                   className="form-control" 
                   placeholder="Enter a city" />
        </form>
    </section>
  
  );
}