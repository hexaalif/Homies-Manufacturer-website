import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
  let navigate = useNavigate()
  const handleBuyNow = () =>{
    navigate('/purchase')
  }
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h4 className="text-xl text-bold">Price: {product.price}</h4>
        <b>Stock: {product.Stock}</b>
        <b>Minimum Order: {product.Minimum_Order}</b>
        <p>{product.about}</p>
        <div className="card-actions">
          <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
