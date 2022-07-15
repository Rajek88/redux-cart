// import React, { useEffect, useState } from "react";
import React from "react";
import CardView from "../../components/CardView";
// import { fetchDataFromAPI } from "../../api/FetchDataFromAPI";

const Home = () => {
  // -------------------------- To Make things Dyanamic -------------------
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const fetcher = async () => {
  //     const cartItemsData = await fetchDataFromAPI(
  //       "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json",
  //       "GET"
  //     );
  //     console.log("cartItemsData", cartItemsData);
  //     if (cartItemsData) {
  //       setCartItems(cartItemsData.data);
  //     }
  //   };
  //   fetcher();
  // }, []);
  // ----------------------------------------------------------------------

  const cartItems = [
    {
      id: 1,
      name: "food card",
      description: "This card is used for spending on Food merchants",
      final_price: 21,
      original_price: 30,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
    },
    {
      id: 2,
      name: "travel card",
      description:
        "This card is used for spending on Travel and hotel bookings",
      final_price: 20,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
    },
    {
      id: 3,
      name: "epic card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
    },
    {
      id: 4,
      name: "happay premium card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url:
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
    },
  ];

  return (
    <div className="home">
      <h1>Most Popular</h1>
      <h1>------------------------- * --------------------------------</h1>
      <div className="cardview-container">
        {cartItems.map((i) => (
          <CardView key={i.id} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
