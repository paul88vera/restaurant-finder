import { useState } from "react";
import Restaurant from "../restaurant";


export default function Selection(props) {
  const selection = props.selection;

  const [openModal, setOpenModal] = useState(false);

  const [restaurantData] = useState([
   {
     id: 1,
     image: "#",
     imgAlt: "this is another alt statement",
     name: "Not Dons",
     cuisine: "Mexican",
     details: "This is a really cool Mexican restaurant",
     phone: "tel:888-888-8888",
     map: "https://maps.google.com/",
     website: "https://google.com/",
   }
 ]);
  return (
    <section id="cuisine-card-container">
      {selection.map((selection) => (
        <div className="cuisine-card" key={selection.id} style={{cursor: 'pointer'}} onClick={() => {
         setOpenModal(true);
        }}>
          <div className="cuisine-card-img">
            <img src={selection.img} alt={selection.alt} width="100" />
          </div>
          <div className="cuisine-card-text">
            <h4>{selection.city}</h4>
            <p>{selection.cuisine}</p>
            <h3>{selection.name}</h3>
          </div>
        </div>
      ))}

      {openModal && <Restaurant data={restaurantData} closeModal={setOpenModal} />}
    </section>
  );
}