import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuantityController from "../../components/QuantityController";

const Cart = () => {
  const navigate = useNavigate();
  const myState = useSelector((state) => state.quantityHandler);
  const qty = myState.cart.reduce((prev, next) => {
    return prev + next.qty;
  }, 0);
  const savings = myState.cart.reduce((prev, next) => {
    return (
      prev +
      (next.original_price
        ? (next.original_price - next.final_price) * next.qty
        : 0)
    );
  }, 0);
  const total = myState.cart.reduce((prev, next) => {
    // console.log("total", prev + next.final_price);
    return prev + next.final_price * next.qty;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          &lt; Back to Home
        </button>
        <h2 className="cart-h2">Order Summary ( {qty} items )</h2>
        {qty > 0 ? (
          <div className="cart-container-sections">
            <div className="cart-left">
              <div className="cart-table">
                <div className="cart-table-head">
                  <div>S.No</div>
                  <div>Items</div>
                  <div>Qty</div>
                </div>
                <hr />
                <div className="cart-table-body">
                  {myState &&
                    myState.cart.map(
                      (i, index) =>
                        i.qty > 0 && (
                          <div className="cart-table-data" key={i.id}>
                            <div>{index}</div>
                            <div>{i.name}</div>
                            <div className="cart-controller">
                              <QuantityController data={i} />
                            </div>
                          </div>
                        )
                    )}
                </div>
                <hr />
                <button className="addmore-btn" onClick={() => navigate("/")}>
                  + Add more items
                </button>
              </div>
            </div>
            <div className="cart-right">
              <div className="cart-table">
                <div className="cart-table-head">
                  <div>Price Details</div>
                </div>
                <hr />
                <div className="cart-table-body">
                  {myState &&
                    myState.cart.map(
                      (i) =>
                        i.qty > 0 && (
                          <div className="cart-table-data" key={i.id}>
                            <div>
                              {i.qty} X ₹ {i.final_price}
                            </div>
                            <div>₹ {i.qty * i.final_price}</div>
                          </div>
                        )
                    )}
                </div>
                <hr />
                <div className="cart-table-body">
                  {/* Show savings only when saving value is more than 0 */}
                  {savings > 0 && (
                    <div className="cart-table-data">
                      <div>Total Savings</div>
                      <div style={{ color: "#24B38B" }}>
                        - ₹ {savings.toFixed(2)}
                      </div>
                    </div>
                  )}
                  <div className="cart-table-data">
                    <div>Delivery Fee</div>
                    <div>₹ {5.0}</div>
                  </div>
                  <div className="cart-table-data">
                    <div>Taxes and Charges</div>
                    <div>₹ {(total * 0.1).toFixed(2)}</div>
                  </div>
                  <hr />
                  <div className="cart-table-data">
                    <h3>To Pay</h3>
                    <h3>₹ {(total + total * 0.1 + 5).toFixed(2)}</h3>
                  </div>
                </div>
                <hr />

                <button className="paynow-btn" onClick={() => navigate("/")}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h1>Your Cart is empty !</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
