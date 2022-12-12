import React from 'react';
import Banner from '../components/Banner';
import Cuisine from '../components/Cuisine';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div id='home'>
      <Navbar />
      <Banner />
<br/>
      <section id='cuisine-choices'>
      <h4>What are you looking for?</h4>
<br/>
      <br/>
      <Cuisine />
      </section>
    </div>
  );
}