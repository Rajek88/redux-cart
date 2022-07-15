import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decItem, incItem } from "../redux/actions";

const CardView = ({ data }) => {
  const myState = useSelector((state) => state.quantityHandler);
  const dispatch = useDispatch();
  const currentItem = myState.cart.find((item) => item.id === data.id);
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
      <div className="cardview-controller">
        <button onClick={() => dispatch(decItem(data))}>-</button>
        <input
          type="text"
          contentEditable={false}
          value={currentItem ? currentItem.qty : 0}
          readOnly
        />
        <button onClick={() => dispatch(incItem(data))}>+</button>
      </div>
    </div>
  );
};

export default CardView;
