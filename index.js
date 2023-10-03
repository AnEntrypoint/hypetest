const axios = require("axios");
const runCall = async input => {
  try {
    const response = await axios.get(`https://www.google.com/search?q=${input.search}`);
    console.log(response.data);
    return {response:response.data}
  } catch (error) {
    console.error(error);
    return null
  }
};
module.exports = runCall;