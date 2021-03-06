import React from "react";
import QuantityController from "./QuantityController";

const CardView = ({ data }) => {
  //   console.log("currentItem QTY", currentItem ? currentItem.qty : 0);
  return (
    <div className="cardview">
      <div className="cardview-card-image-container">
        <img
          className="cardview-card-image"
          alt={data.name}
          src={data.img_url}
        />
        {data.original_price && (
          <div className="cardview-card-image-discount">
            {((data.original_price - data.final_price) * 100) /
              data.original_price}{" "}
            % OFF
          </div>
        )}
      </div>
      <div className="cardview-description">
        <div className="cardview-description-title">
          <h3>{data.name}</h3>
          <span>
            {data.original_price && (
              <span style={{ color: "grey", textDecoration: "line-through" }}>
                {data.original_price}
              </span>
            )}{" "}
            {data.final_price}
          </span>
        </div>
        <p>{data.description}</p>
      </div>
      <QuantityController data={data} />
    </div>
  );
};

export default CardView;
