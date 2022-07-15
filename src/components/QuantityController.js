import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decItem, incItem } from "../redux/actions";

const QuantityController = ({ data }) => {
  const myState = useSelector((state) => state.quantityHandler);
  const dispatch = useDispatch();
  const currentItem = myState.cart.find((item) => item.id === data.id);
  return (
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
  );
};

export default QuantityController;
