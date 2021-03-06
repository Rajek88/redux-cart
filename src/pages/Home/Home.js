// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardView from "../../components/CardView";
// import { fetchDataFromAPI } from "../../api/FetchDataFromAPI";

const Home = () => {
  const myState = useSelector((state) => state.quantityHandler);
  // -------------------------- To Make things Dyanamic -------------------
  // const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/redux-cart/Home");
    // const fetcher = async () => {
    //   const cartItemsData = await fetchDataFromAPI(
    //     "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json",
    //     "GET"
    //   );
    //   console.log("cartItemsData", cartItemsData);
    //   if (cartItemsData) {
    //     setCartItems(cartItemsData.data);
    //   }
    // };
    // fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ----------------------------------------------------------------------

  return (
    <div className="home">
      <h1>Most Popular</h1>
      <h1>------ * ------</h1>
      <div className="cardview-container">
        {myState.products.map((i) => (
          <CardView key={i.id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
