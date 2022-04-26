import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
AOS.init()
const Card = ({ item }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { name, price, image, details, id } = item;
  return (
    <div

    className="flex card rounded-lg  flex-col items-center text-center bg-dark_gray ">
      <img className="rounded-lg cardImage" src={image} alt="" />
      <div className="p-3 text-left flex flex-col justify-between h-full">
        <div>
          <h3 className="text-dark_blue font-bold tracking-widest text-4xl py-1">
            {name}
          </h3>
          <p className="text-sm leading-2 py-1">{details}</p>
        </div>
        <div>
          <span className="text-4xl font-bold text-tomato_light">
            <small className="text-xl loderSeimble text-blue_light">$ </small>
            {price}
          </span>

          <button
            onClick={()=> navigate("/checkOut")}
            className="bg-tomato_light text-center text-white_light  checkOut block w-full px-4 py-1 rounded-md font-bold tracking-widest my-3"
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
