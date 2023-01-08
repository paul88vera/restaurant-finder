import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Temp from '../assets/img/bbq.jpeg';

//TODO: 1. make into a prop and apply to all other cuisine pages

const Mexican = () => {
  // const data = props.data;
    return (
      <div className="cuisine-gallery">
        <Navbar />
        <Banner />
        <h4 className='cuisine-title'>Mexican Food</h4>

        <section className="cuisine-card-container">

          <div className="cuisine-card">
            <div className='cuisine-card-img'>
            <img src={Temp} alt="square alt stuff" width="100" />
            </div>
            <div className='cuisine-card-text'>
            <h4>San Antonio</h4>
            <p>Mexican</p>
            <h3>Restaurant Name</h3>
            </div>
          </div>
          <div className="cuisine-card">
            <div className='cuisine-card-img'>
            <img src={Temp} alt="square alt stuff" width="100" />
            </div>
            <div className='cuisine-card-text'>
            <h4>San Antonio</h4>
            <p>Mexican</p>
            <h3>Restaurant Name</h3>
            </div>
          </div>
          <div className="cuisine-card">
            <div className='cuisine-card-img'>
            <img src={Temp} alt="square alt stuff" width="100" />
            </div>
            <div className='cuisine-card-text'>
            <h4>San Antonio</h4>
            <p>Mexican</p>
            <h3>Restaurant Name</h3>
            </div>
          </div>
          <div className="cuisine-card">
            <div className='cuisine-card-img'>
            <img src={Temp} alt="square alt stuff" width="100" />
            </div>
            <div className='cuisine-card-text'>
            <h4>San Antonio</h4>
            <p>Mexican</p>
            <h3>Restaurant Name</h3>
            </div>
          </div>

        </section>
        
      </div>
    );
  }

export default Mexican;