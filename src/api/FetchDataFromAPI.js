import axios from "axios";

export const fetchDataFromAPI = async (url, method, data) => {
  let config = {
    method: method,
    url: url,
    data: data,
  };

  // // console.log("URL :: ", BASE_URL + API);
  // // console.log("DATA :: ", data);
  try {
    let res = await axios(config);
    // console.log("res.data : ", res.data);
    return res.data;
  } catch (error) {
    // console.log("Error in API Call : ", error);
    let res = {};
    return (res.err = error);
  }
};
