import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl p-5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
