import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import { data } from '../constants/data';

const Barbecue = () => {
    return (
      <div id="restuarant">

       <Navbar />
        <Banner />

      <div className="restaurant-details">
        <h2>Jerky Shack</h2>
        <h4>Mexican</h4><br/>
        <p>The Jerk Shack family is led by Chef Nicola Blaque. After serving
ten years in the Army, she followed her passion for cooking from
Hawaii to San Antonio to attend the Culinary Institute of America.
After graduating in 2016, Chef Nicola launched her flagship
restaurant, The Jerk Shack, with her husband Cornelius Massey
just two years later.</p>
      </div>
    <br/>
    <div id="social-links">
            <a href='/'><i class="fa-solid fa-mobile-screen-button"></i></a>
            <a href='/'><i class="fa-solid fa-map-location-dot"></i></a>
            <a href='/'><i class="fa-solid fa-laptop"></i></a>
          </div>
    </div>
    );
  }

export default Barbecue;