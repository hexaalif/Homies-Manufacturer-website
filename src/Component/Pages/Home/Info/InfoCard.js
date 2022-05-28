import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InfoCard = ({icon, cardTitle, detail}) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl my-10 bg-orange-300">
      <figure>
          {/* <img src={faTruckFast}></img> */}
          <FontAwesomeIcon icon={icon} className="text-5xl ml-5"></FontAwesomeIcon>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default InfoCard;
