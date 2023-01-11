import  Banner from '../components/Banner';
import  Navbar from '../components/Navbar';

import Selection from '../props/selection';

import { useState } from "react";

const Mexican = () => {
  const [selectionData] = useState([
    {
      id: 1,
      img: "../assets/img/bbq.jpeg",
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Mexican",
      name: "Don Pedro's",
    },
    {
      id: 2,
      img: "../assets/img/bbq.jpeg",
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Mexican",
      name: "Don Pedro's Too",
    },
  ]);

  return (
    <div className="cuisine-gallery">
      <Navbar />
      <Banner />
      <h4 className="cuisine-title">Mexican Food</h4>
      <Selection
        selection={selectionData}
        key={selectionData.id}
      />
    </div>
  );
};

export default Mexican;
