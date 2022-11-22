import Login from '../../pages/login';

export default function Search() {
  return (
    <section id="search-container">
     <form onSubmit={<Login />} className="form-container right-inner-addon input-container">
      <i className="fa fa-map-marker"></i>
            <input type="text"
                   className="form-control" 
                   placeholder="San Antonio" />
        </form>
    </section>
  )
}