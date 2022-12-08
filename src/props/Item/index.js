import Navbar from "../components/Navbar";

export default function Item(prop) {
// prop = [
//   image:"#",
//   name: "restaurant",
  
// ]
  return (
    <div id="item" >
    {/* 
    img,
    cuisine type,
    Name,
    details,
    number,
    map,
    website link
  */}
      <Navbar />
      <picture id='main-banner'>
        <source media="(min-width:728px)" srcset="https://unsplash.it/1920" />
        <img src="https://unsplash.it/500/350" width="100%" alt="" />
      </picture>
    <h2>name</h2>
    <h4>cuisine</h4>
    <p>details</p>

    <div id="social-links">
      <img src="https://unsplash.it/100" width="20px" alt="" />
      <img src="#" alt="" />
      <img src="#" alt="" />
    </div>
    </div>
  )
}