let localState;
try {
  localState = localStorage.getItem("state");
  localState = JSON.parse(localState);
  console.log("localState exists : ", localState);
} catch (error) {
  localState = false;
}

const initialState = localState
  ? localState
  : {
      products: [
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
      ],
      cart: [],
    };

const quantityHandler = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_ITEM":
      // get item from product array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //   check if item is in cart or not
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      //   if item exists in cart then increment it else add it to cart
      const newState = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case "DECREMENT_ITEM":
      // get item from product array
      const itemToRemove = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      //   check if item is in cart or not
      const isInCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      //   if item exists in cart then increment it else add it to cart
      const newState1 = {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 }
                : item
            )
          : [...state.cart, { ...itemToRemove, qty: 0 }],
      };
      localStorage.setItem("state", JSON.stringify(newState1));
      return newState1;

    default:
      localStorage.setItem("state", JSON.stringify(state));
      return state;
  }
};

export default quantityHandler;
