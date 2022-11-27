import React from 'react';
import Search from '../components/Search'

export default function Signup() {
  return (
    <section id='signup-container'>
      <Search />
      <form id='signup-form'>
      <label>NAME
      <input type="name" placeholder='Queen Nakia'/>
      </label>
      <br/><br/>
      <label>EMAIL ADDRESS
      <input type="email" placeholder='nakia@wakanda.com'/>
      </label>
      <br/><br/>
      <label>PASSWORD
      <input type="password" placeholder="************"/>
      </label>
      <br/><br/>
      <label>VERIFY PASSWORD
      <input type="verify password" placeholder='************' />
      </label>
      <br/><br/>
      <label>PREFERRED LOCATION
      <input type="zip" placeholder='zip code'/>
      </label>
      <br/><br/>
      <button type='submit'>Sign me up!</button>
    </form>
    </section>
  );
}