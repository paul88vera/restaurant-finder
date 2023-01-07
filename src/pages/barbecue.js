import Banner from '../components/Banner';

const Barbecue = () => {
    return (
      <div id="restuarant">
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
        <a href="tel:2105019271">
        <img src="https://unsplash.it/100" width="70px" alt="" />
        CALL NOW</a>
        <a href="#/">
        <img src="https://unsplash.it/100" width="70px" alt="" />
        VIEW MAP</a>
        <a href="#/">
        <img src="https://unsplash.it/100" width="70px" alt="" />
        WEBSITE</a>
      </div>
    </div>
    );
  }

export default Barbecue;