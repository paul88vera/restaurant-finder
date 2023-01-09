export default function Restaurant(props, {closeModal}) {
  const data = props.data;

  return (
    <section id="data-container">
      {data.map((data) => (
        <div id="restaurant-item-modal" key={data.id}>
          <picture id="main-banner">
            <img src={data.image} width="100%" alt={data.imgAlt} />
          </picture>
          <button className="btn" onClick={()=> {closeModal(false)}}>
            X
          </button>
          <div className="restaurant-details">
            <h2>{data.name}</h2>
            <h4>{data.cuisine}</h4>
            <br />
            <p>{data.details}</p>
          </div>
          <br />
          <div id="social-links">
            <a href={data.phone}>
              <img src="https://unsplash.it/100" width="70px" alt="" />
              CALL NOW
            </a>
            <a href={data.map}>
              <img src="https://unsplash.it/100" width="70px" alt="" />
              VIEW MAP
            </a>
            <a href={data.website}>
              <img src="https://unsplash.it/100" width="70px" alt="" />
              WEBSITE
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
