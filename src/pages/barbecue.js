import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

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
            <a href='/' className='icon-container'><i className="fa-solid fa-mobile-screen-button"></i><span>Phone</span></a>
            <a href='/' className='icon-container'><i className="fa-solid fa-map-location-dot"></i><span>Map</span></a>
            <a href='/' className='icon-container'><i className="fa-solid fa-laptop"></i><span>Website</span></a>
          </div>
    </div>
    );
  }

export default Barbecue;