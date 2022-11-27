// import Login from '../../pages/login';
// import { Outlet, Link } from 'react-router-dom';

export default function Search() {
  return (
    <section id="search-container">
     <form className="form-container right-inner-addon input-container">
      <i className="fa fa-map-marker"></i>
            <input type="text"
                   className="form-control" 
                   placeholder="San Antonio" />
        </form>
    </section>
  )
}